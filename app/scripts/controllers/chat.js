/**
 * controller for the first chat screen
 * 
 * Created December 30th, 2014
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez LTD
 */

'use strict';

angular.module('firebaseApp')
  .controller('ChatCtrl', function ($scope) {
    
    /**
     * when the user submits the chat with form
     */
    $scope.gotoActiveChat = function(){
        location.href = '/#/chat-active/' + $scope.fromMail + '/' + $scope.toMail;
    };
    
  });
