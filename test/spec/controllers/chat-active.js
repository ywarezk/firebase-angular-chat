'use strict';

describe('Controller: ChatActiveCtrl', function () {

  // load the controller's module
  beforeEach(module('firebaseApp'));

  var ChatActiveCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ChatActiveCtrl = $controller('ChatActiveCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
