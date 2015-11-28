/* global document:false */
(function() {
  'use strict';

  angular
      .module('beaverWeb')
      .service('modal', modal);

  /** @ngInject */
  function modal($document, $mdDialog) {
    var mdl = this;

    mdl.showInfo = function (ev, title, message) {
      return $mdDialog.show(
        $mdDialog.alert()
          .parent($document.body)
          .clickOutsideToClose(true)
          .title(title)
          .content(message)
          .ariaLabel(title)
          .ok('Got it!')
          .targetEvent(ev)
        );
    };

    mdl.showError = function (ev, err) {
      if (err && err.message) {
        return mdl.showInfo(ev, 'Error', err.message);
      } else {
        return mdl.showInfo(ev, 'Error', err);
      }
    };

    mdl.showConfirm = function (ev, title, message) {
      return $mdDialog.show(
        $mdDialog.confirm()
          .parent($document.body)
          .clickOutsideToClose(true)
          .title(title)
          .content(message)
          .ariaLabel(title)
          .cancel('No')
          .ok('Proceed')
          .targetEvent(ev)
        );
    };
  }

})();
