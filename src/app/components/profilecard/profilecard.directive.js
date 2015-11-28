(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .directive('profileCard', profileCard);

  /** @ngInject */
  function profileCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/profilecard/profilecard.html',
      controller: ProfileCardController,
      controllerAs: 'pc',
      bindToController: true,
      replace: true,
      scope: {
        profileCard: '=profileCard'
      }
    };

    return directive;

    /** @ngInject */
    function ProfileCardController() {
    }
  }

})();
