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
  .provider('OTConfig', function (TB) {
    var _apiKey;
    return {
      setKey: function (value) {
        _apiKey = value;
      },
      setExceptionHandler: function (handler) {
        TB.on('exception', handler);
      },
      $get: function () {
        return {
          apiKey: _apiKey
        };
      }
    };
  })
  .factory('OTSession', ['TB', '$rootScope', '$q', 'OTConfig', '$log',
    function (TB, $rootScope, $q, OTConfig, $log) {
      if (!OTConfig.apiKey) throw new Error('You need to specify api key');

      var OTSession = {
        streams: [],
        connections: [],
        publishers: [],
        ui: {
          hasAudio: true,
          hasVideo: true
        },
        init: function (sessionId, token) {
          this.session = TB.initSession(OTConfig.apiKey, sessionId);

          OTSession.session.on({
            sessionConnected: function (event) {
              $log.info('sessionConnected', event);
              OTSession.publishers.forEach(function (publisher) {
                OTSession.session.publish(publisher);
              });
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
          OTSession.publishers.forEach(function (publisher) {
            publisher.publishAudio(OTSession.ui.hasAudio);
          });
        },
        togglePublishersVideo: function (condition) {
          OTSession.ui.hasVideo = typeof condition === 'boolean' ? condition : !OTSession.ui.hasVideo;
          OTSession.publishers.forEach(function (publisher) {
            publisher.publishVideo(OTSession.ui.hasVideo);
          });
        },
        resetPublishers: function () {
          OTSession.togglePublishersAudio(true);
          OTSession.togglePublishersVideo(true);
        }
      };
      TB.$.eventing(OTSession);
      return OTSession;
    }
  ])
  .factory('OTDirectivesHelpers', function () {
    var volumeLevels = [
      {level: 0, name: 'volume-low'},
      {level: 0.3, name: 'volume-mid'},
      {level: 0.8, name: 'volume-high'}
    ];

    var OTDirectivesHelpers = {
      getVolumeLevelChanges: function () {
        var movingAvg = null;
        var previousLevel = null;
        return function (event) {
          if (movingAvg === null || movingAvg <= event.audioLevel) {
            movingAvg = event.audioLevel;
          } else {
            movingAvg = 0.7 * movingAvg + 0.3 * event.audioLevel;
          }
          // 1.5 scaling to map the -30 - 0 dBm range to [0,1]
          var logLevel = (Math.log(movingAvg) / Math.LN10) / 1.5 + 1;
          logLevel = Math.min(Math.max(logLevel, 0), 1);
          var result = {
            previous: previousLevel,
            current: null
          };
          volumeLevels.forEach(function (volumeLevel) {
            if (logLevel <= volumeLevel.level) return;
            result.current = volumeLevel.name;
          });
          previousLevel = result.current;
          return result;
        }
      },
      setVolumeLevelChanges: function (element) {
        var volumeNames = volumeLevels.map(function (level) {
          return level.name;
        }).join(' ');
        element.removeClass(volumeNames);
        var getVolumeMethod = OTDirectivesHelpers.getVolumeLevelChanges();
        return function (event) {
          var changes = getVolumeMethod(event);
          console.log(changes);
          if (changes.previous === changes.current) return;
          element.removeClass(changes.previous);
          element.addClass(changes.current);
        }
      }
    };
    return OTDirectivesHelpers;
  })
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
  }
  ])
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
          scope.publisher.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          scope.$on('$destroy', function () {
            if (OTSession.session) {
              OTSession.session.unpublish(scope.publisher);
            } else {
              scope.publisher.destroy();
            }
            OTSession.publishers = OTSession.publishers.filter(function (publisher) {
              return publisher !== scope.publisher;
            });
            scope.publisher = null;
          });
          if (OTSession.isSessionConnected()) {
            OTSession.session.publish(scope.publisher);
          } else {
            scope.publisher.on('streamDestroyed', function (event) {
              event.preventDefault();
            });
          }
          OTSession.publishers.push(scope.publisher);
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
          var props = scope.props() || {};
          props.width = props.width || element[0].offsetWidth;
          props.height = props.height || element[0].offsetHeight;
          var oldChildren = element.children();
          var subscriber = OTSession.session.subscribe(scope.stream, element[0], props, function (err) {
            if (err) scope.$emit('otSubscriberError', err, subscriber);
          });
          subscriber.on('audioLevelUpdated', OTDirectivesHelpers.setVolumeLevelChanges(element));
          subscriber.on('loaded', scope.$emit.bind(scope, 'otLayout'));
          // Make transcluding work manually by putting the children back in there
          angular.element(element).append(oldChildren);
          scope.$on('$destroy', function () {
            OTSession.session.unsubscribe(subscriber);
          });
        }
      };
    }]);
