(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .directive('breadcrumbs', breadcrumbs);

  /** @ngInject */
  function breadcrumbs() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/breadcrumbs/breadcrumbs.html',
      scope: {
        creationDate: '=',
        items: '='
      },
      controller: BreadcrumbsController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function BreadcrumbsController() {
    }
  }

})();

