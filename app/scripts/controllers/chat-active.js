/**
 * the actual chat window
 * 
 * Created December 30th, 2014
 * @author: Yariv Katz
 * @version: 1.0
 * @copyright: Nerdeez LTD
 */

'use strict';

angular.module('firebaseApp')
  .controller('ChatActiveCtrl', function ($scope, $routeParams) {
    
    /**
     * constructor 
     */
    function _init(){
        $scope.chatMessages = [];
        var from = $routeParams.from;
        var to = $routeParams.to;
        var firebase = new Firebase('https://nerdeez-chat-example.firebaseIO.com/chat');
        firebase.on('child_added', function(snapshot){
            var data = snapshot.val();
            if(data.from != from && data.to != from) return;
            if(data.from != to && data.to != to) return;
            $scope.chatMessages.push(data);
            $scope.$apply();
        });
    }
    
    /**
     * when the user submits a message
     */
    $scope.sendMessage = function(){
        var firebase = new Firebase('https://nerdeez-chat-example.firebaseIO.com/chat');
        firebase.push({from: $routeParams.from, to: $routeParams.to, message: $scope.message});
        $scope.message = '';
    };
    
    _init();
    
    
  });
