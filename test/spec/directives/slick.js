'use strict';

describe('Directive: slick', function () {

  // load the directive's module
  beforeEach(module('infrasonicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<slick></slick>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the slick directive');
  }));
});
