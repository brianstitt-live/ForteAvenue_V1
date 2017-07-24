// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})



.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

        .state('app.ScientificFacts', {
            url: '/ScientificFacts',
            views: {
                'menuContent': {
                    templateUrl: 'templates/NAV_SF.html'
                }
            }
        })

        .state('app.MoreScientificFacts', {
            url: '/MoreScientificFacts',
            views: {
                'menuContent': {
                    templateUrl: 'templates/NAV_MoreSF.html'
                }
            }
        })


/*
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
*/
      
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html'
      }
    }
  })

  .state('app.networks', {
    url: '/networks',
    views: {
      'menuContent': {
        templateUrl: 'templates/networks.html'
      }
    }
  })

  .state('app.messages', {
    url: '/messages',
    views: {
      'menuContent': {
        templateUrl: 'templates/messages.html'
      }
    }
  })

  .state('app.artists', {
      url: '/artists',
      views: {
        'menuContent': {
          templateUrl: 'templates/artists.html',
          controller: 'ListController'
        }
      }
    })

    .state('app.formsample', {
        url: '/formsample',
        views: {
          'menuContent': {
            templateUrl: 'templates/form_sample.html',
          }
        }
      })

      .state('app.actionsheet', {
          url: '/actionsheet',
          views: {
            'menuContent': {
              templateUrl: 'templates/actionsheet.html',
              controller: 'ActionSheetCtrl'
            }
          }
        })


      .state('app.formsample-othertypes', {
          url: '/formsample-othertypes',
          views: {
            'menuContent': {
              templateUrl: 'templates/form_sample-other_types.html',
            }
          }
        })

    .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.offenders', {
          url: '/offenders',
          views: {
            'menuContent': {
              templateUrl: 'templates/offenders.html',
              controller: 'OffenderController'
            }
          }
        })

            .state('app.MasterList', {
                url: '/MasterList',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/MasterList.html',
                    }
                }
            })

                  .state('app.MasterListDetail', {
                      url: '/MasterListDetail/:id',
                      views: {
                          'menuContent': {
                              templateUrl: 'templates/MasterList_Details.html',
                              controller: 'ListController'
                          }
                      }
                  })



  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/artists');

});
