(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .directive('menu', menu);

  /** @ngInject */
  function menu() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/menu/menu.html',
      scope: {
          creationDate: '='
      },
      controller: MenuController,
      controllerAs: 'vm',
      bindToController: true,
      replace: true
    };

    return directive;

    /** @ngInject */
    function MenuController($state) {
      var vm = this;
      vm.go = function (state) {
        $state.go(state);
      };
      return vm;
    }
  }

})();

