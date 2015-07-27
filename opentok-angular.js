/*!
 *  opentok-angular (https://github.com/aullman/OpenTok-Angular)
 *
 *  Angular module for OpenTok
 *
 *  @Author: Adam Ullman (http://github.com/aullman)
 *  @Copyright (c) 2014 Adam Ullman
 *  @License: Released under the MIT license (http://opensource.org/licenses/MIT)
 **/

if (!window.TB) throw new Error('You must include the TB library before the TB_Angular library');

angular.module('opentok', [])
  .constant('TB', window.TB)
  .provider('OTConfig', function () {
    var _apiKey;
    return {
      setKey: function (value) {
        _apiKey = value;
      },
      $get: function () {
        return {
          apiKey: _apiKey
        };
      }
    };
  })
  .factory('OTSession', ['TB', '$rootScope', '$q', 'OTConfig', '$log', '_',
    function (TB, $rootScope, $q, OTConfig, $log, _) {
      if (!OTConfig.apiKey) throw new Error('You need to specify api key');

      var OTSession = {
        streams: [],
        connections: [],
        subscribers: [],
        publisher: null,
        screensharePublisher: null,
        ui: {
          hasAudio: true,
          hasVideo: true
        },
        init: function (sessionId, token) {
          this.session = TB.initSession(OTConfig.apiKey, sessionId);

          OTSession.session.on({
            sessionConnected: function (event) {
              $log.info('sessionConnected', event);
              OTSession.publisher && OTSession.session.publish(OTSession.publisher);
            },
            streamCreated: function (event) {
              $log.info('streamCreated', event);
              $rootScope.$apply(function () {
                OTSession.streams.push(event.stream);
              });
            },
            streamDestroyed: function (event) {
              $log.info('streamDestroyed', event);
              $rootScope.$apply(function () {
                OTSession.streams.splice(OTSession.streams.indexOf(event.stream), 1);
              });
            },
            sessionDisconnected: function (event) {
              $log.info('sessionDisconnected', event);
              $rootScope.$apply(function () {
                OTSession.streams.splice(0, OTSession.streams.length);
                OTSession.resetPublishers();
              });
            },
            connectionCreated: function (event) {
              $log.info('connectionCreated', event);
              $rootScope.$apply(function () {
                OTSession.connections.push(event.connection);
              });
            },
            connectionDestroyed: function (event) {
              $log.info('connectionDestroyed', event);
              $rootScope.$apply(function () {
                OTSession.connections.splice(OTSession.connections.indexOf(event.connection), 1);
              });
            }
          });
          OTSession.trigger('init');
          return $q(function (resolve, reject) {
            OTSession.session.connect(token, function (err) {
              if (err) return reject(err);
              resolve(OTSession.session);
            });
          });
        },
        initPublisher: function (element, properties) {
          return TB.initPublisher(OTConfig.apiKey, element, properties);
        },
        isSessionConnected: function () {
          return this.session && (this.session.connected ||
            (this.session.isConnected && this.session.isConnected()));
        },
        listen: function (listeners, targetSelf) {
          Object.keys(listeners).forEach(function (key) {
            OTSession.session.on(key, function (event) {
              listeners[key].call(targetSelf, event);
            });
          });
        },
        togglePublishersAudio: function (condition) {
          OTSession.ui.hasAudio = typeof condition === 'boolean' ? condition : !OTSession.ui.hasAudio;
          OTSession.publisher && OTSession.publisher.publishAudio(OTSession.ui.hasAudio);
        },
        togglePublishersVideo: function (condition) {
          OTSession.ui.hasVideo = typeof condition === 'boolean' ? condition : !OTSession.ui.hasVideo;
          OTSession.publisher && OTSession.publisher.publishVideo(OTSession.ui.hasVideo);
        },
        resetPublishers: function () {
          OTSession.togglePublishersAudio(true);
          OTSession.togglePublishersVideo(true);
        },
        getUniqueStreams: function (preferred) {
          var groups = _.groupBy(OTSession.streams, function (stream) {
            return stream.connection.id;
          });
          return Object.keys(groups).map(function (key) {
            var streamGroup = groups[key];
            if (streamGroup.length === 1) return streamGroup[0];
            return _.find(streamGroup, {videoType: preferred});
          });
        },
        disconnect: function () {
          if (!OTSession.isSessionConnected()) return;
          OTSession.publisher && OTSession.session.unpublish(OTSession.publisher);
          OTSession.session.disconnect();
          OTSession.session = null;
        }
      };
      TB.$.eventing(OTSession);
      return OTSession;
    }
  ])
  .factory('OTDirectivesHelpers', ['_', function (_) {
    return {
      volumeLevels: [
        {level: 0, name: 'volume-low'},
        {level: 0.3, name: 'volume-medium'},
        {level: 0.85, name: 'volume-high'}
      ],
      getVolumeLevelChanges: function () {
        var movingAvg = null;
        return function (event) {
          if (movingAvg === null || movingAvg <= event.audioLevel) {
            movingAvg = event.audioLevel;
          } else {
            movingAvg = 0.7 * movingAvg + 0.3 * event.audioLevel;
          }
          // 1.5 scaling to map the -30 - 0 dBm range to [0,1]
          var logLevel = (Math.log(movingAvg) / Math.LN10) / 1.5 + 1;
          return Math.min(Math.max(logLevel, 0), 1);
        }
      },
      setVolumeLevelChanges: function (element, callback) {
        var _this = this;
        var volumeNames = this.volumeLevels.map(function (level) {
          return level.name;
        }).join(' ');

        element.removeClass(volumeNames);
        var getVolumeMethod = this.getVolumeLevelChanges();

        var sum = 0;
        var count = 0;
        var previousLevel;
        return function (event) {
          sum += getVolumeMethod(event);
          count++;
          if (count !== 30) return;
          var average = sum / count;
          sum = count = 0;
          var currentLevel = _.findLast(_this.volumeLevels, function (volumeLevel) {
            return average >= volumeLevel.level;
          }).name;
          callback && callback(currentLevel);
          if (previousLevel === currentLevel) return;
          previousLevel = currentLevel;
          element.removeClass(volumeNames);
          element.addClass(currentLevel);
        };
      }
    }
  }])
  .directive('otLayout', ['$window', '$parse', 'TB', 'OTSession', function ($window, $parse, TB, OTSession) {
    return {
      restrict: 'E',
      link: function (scope, element, attrs) {
        var props = $parse(attrs.props)();
        var container = TB.initLayoutContainer(element[0], props);
        var layout = function () {
          container.layout();
          scope.$emit('otLayoutComplete');
        };
        scope.$watch(function () {
          return element.children().length;
        }, layout);
        $window.addEventListener('resize', layout);
        scope.$on('otLayout', layout);
        var listenForStreamChange = function listenForStreamChange() {
          OTSession.session.on('streamPropertyChanged', function (event) {
            if (event.changedProperty === 'videoDimensions') layout();
          });
        };
        if (OTSession.session) return listenForStreamChange();
        OTSession.on('init', listenForStreamChange);
      }
    };
  }])
  .directive('otPublisher', [
    '$rootScope', 'OTSession', 'OTDirectivesHelpers',
    function ($rootScope, OTSession, OTDirectivesHelpers) {
      function accessDialogEvents(publisher) {
        var previousEvent;
        [
          'accessAllowed',
          'accessDenied',
          'accessDialogClosed',
          'accessDialogOpened'
        ].forEach(function (event) {
            publisher.on(event, function () {
              if (previousEvent === 'accessDenied' && event === 'accessDialogOpened') return;
              previousEvent = event;
              $rootScope.$emit(event);
            });
          });
      }

      return {
        restrict: 'E',
        scope: {
          props: '&'
        },
        link: function (scope, element) {
          var props = scope.props() || {};
          props.width = props.width || element[0].offsetWidth;
          props.height = props.height || element[0].offsetHeight;
          var oldChildren = angular.element(element).children();
          scope.publisher = OTSession.initPublisher(element[0], props);
          // Make transcluding work manually by putting the children back in there
          angular.element(element).append(oldChildren);
          accessDialogEvents(scope.publisher);
          scope.publisher.on('loaded', function () {
            scope.publisher.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          });
          scope.$on('$destroy', function () {
            if (OTSession.session) {
              OTSession.session.unpublish(scope.publisher);
            } else {
              scope.publisher.destroy();
            }
            OTSession.publisher = scope.publisher = null;
          });
          if (OTSession.isSessionConnected()) {
            OTSession.session.publish(scope.publisher);
          } else {
            scope.publisher.on('streamDestroyed', function (event) {
              event.preventDefault();
            });
          }
          OTSession.publisher = scope.publisher;
        }
      };
    }])
  .directive('otScreenPublisher', [
    '$rootScope', 'OTSession', 'OTDirectivesHelpers', '$log',
    function ($rootScope, OTSession, OTDirectivesHelpers, $log) {
      return {
        restrict: 'E',
        scope: {
          props: '&'
        },
        link: function (scope, element) {
          var screensharePublisher;
          var props = angular.extend({
            //name: 'Screen',
            mirror: false,
            audioSource: null,
            videoSource: 'screen',
            maxResolution: {width: 1280, height: 720},
            width: element[0].offsetWidth,
            height: element[0].offsetHeight
          }, scope.props() || {});
          var oldChildren = angular.element(element).children();
          screensharePublisher = OTSession.initPublisher(element[0], props, function (err) {
            $log.info('screensharePublisher', arguments);
            if (err) return $rootScope.$emit('otScreenPublisher:error', err);
          });
          angular.element(element).append(oldChildren);
          scope.$on('$destroy', function () {
            if (OTSession.session) {
              OTSession.session.unpublish(screensharePublisher);
            } else {
              screensharePublisher.destroy();
            }
            OTSession.screensharePublisher = screensharePublisher = null;
          });
          if (OTSession.publisher) {
            OTSession.publisher.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          }
          if (OTSession.isSessionConnected()) {
            OTSession.session.publish(screensharePublisher);
          } else {
            screensharePublisher.on('streamDestroyed', function (event) {
              event.preventDefault();
            });
          }
          OTSession.screensharePublisher = screensharePublisher;
        }
      };
    }])
  .directive('otActiveCallerLayout', ['_', 'OTDirectivesHelpers', function (_, OTDirectivesHelpers) {
    return {
      restrict: 'EA',
      link: function (scope) {
        var activeCaller = null;
        var readyToChange = true;
        var delayReadyToChange = _.debounce(function () {
          readyToChange = true;
        }, 500);
        scope.$on('subscriber:volumeLevel', function ($event, targetElement, level) {
          if (level === OTDirectivesHelpers.volumeLevels[0].name) return;
          if (readyToChange && targetElement !== activeCaller) {
            activeCaller && activeCaller.removeClass('ot-active');
            activeCaller = targetElement.addClass('ot-active');
            readyToChange = false;
          } else if (targetElement === activeCaller) {
            delayReadyToChange();
          }
        });
      }
    };
  }])
  .directive('otSubscriber', [
    'OTSession', 'OTDirectivesHelpers',
    function (OTSession, OTDirectivesHelpers) {
      return {
        restrict: 'E',
        scope: {
          stream: '=',
          props: '&'
        },
        link: function (scope, element) {
          element.addClass('ot-' + scope.stream.videoType);
          var props = scope.props() || {};
          props.width = props.width || element[0].offsetWidth;
          props.height = props.height || element[0].offsetHeight;
          var oldChildren = element.children();
          var subscriber = OTSession.session.subscribe(scope.stream, element[0], props, function (err) {
            if (err) scope.$emit('otSubscriberError', err, subscriber);
          });
          subscriber.on('loaded', function () {
            OTSession.subscribers.push(subscriber);
            scope.$emit(scope, 'otLayout');
            subscriber.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element, function (level) {
              scope.$emit('subscriber:volumeLevel', element, level);
            }));
          });
          // Make transcluding work manually by putting the children back in there
          angular.element(element).append(oldChildren);
          scope.$on('$destroy', function () {
            OTSession.subscribers.splice(OTSession.subscribers.indexOf(subscriber), 1);
            OTSession.session && OTSession.session.unsubscribe(subscriber);
          });
        }
      };
    }]);
