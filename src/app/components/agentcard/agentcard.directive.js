(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .directive('agentCard', agentCard);

  /** @ngInject */
  function agentCard() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/agentcard/agentcard.html',
      controller: AgentCardController,
      controllerAs: 'ac',
      bindToController: true,
      scope: {
        agent: '=agent'
      }
    };

    return directive;

    /** @ngInject */
    function AgentCardController() {
      var vm = this;
      return vm;
    }
  }

})();
