(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .config(config);

  /** @ngInject */
  function config($logProvider, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // ng-material theming
    $mdThemingProvider.theme('default')
      .primaryPalette('blue')
      .accentPalette('lime');
  }

})();
