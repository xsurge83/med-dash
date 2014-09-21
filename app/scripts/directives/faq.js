(function (angular) {
  function faqDirective() {
    return {
      restrict: 'AE',
      scope: true,
      link: function postLink(scope, element) {
        scope.show = false;
        element.click(function(){
          scope.show =!scope.show;
          scope.$apply();
        });
      }
    };
  }

  function answerDirective() {
    return {
      restrict: 'AE',
      replace : true,
      transclude: true,
      templateUrl: 'views/faq/faq.tpl.html',
      link : function(scope, element){
        element.click(function(event){
          event.stopPropagation()();
        });
      }
    };
  }

  /**
   * @ngdoc directive
   * @name infrasonicApp.directive:slick
   * @description
   * # slick
   */
  angular.module('infrasonicApp')
    .directive('faq', faqDirective)
    .directive('answer', answerDirective);

})(angular);