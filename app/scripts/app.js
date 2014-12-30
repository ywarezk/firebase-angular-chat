/**
 * entry point for our app
 * 
 * Created December 30th ,2014
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez LTD
 */

'use strict';

angular
  .module('firebaseApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/chat-active/:from/:to', {
        templateUrl: 'views/chat-active.html',
        controller: 'ChatActiveCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
