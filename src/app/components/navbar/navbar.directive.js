(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .directive('navbar', navbar);

  /** @ngInject */
  function navbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($mdSidenav, $mdMedia) {
      var vm = this;

      vm.showSidenav = function () {
        $mdSidenav('right')
          .toggle();
      };

      vm.isShow = function () {
        return $mdMedia('gt-md');
      };

      return vm;
    }
  }

})();
