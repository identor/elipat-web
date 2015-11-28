(function() {
  'use strict';

  angular
    .module('beaverWeb')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($mdDialog, $document) {
    var vm = this;

    vm.orders = [
      { 
        imgSrc: 'http://tinyurl.com/nvvjr7f',
        customerName: 'Vladimir Putingina',
        orderDate: new Date(Date.UTC(2015, 11, 1)),
        dateDelivered: null,
        status: 'Pending',
        address: '#7 Toshiba, Intel Celeron.'
      },
      { 
        imgSrc: 'http://tinyurl.com/p8gz6oo',
        customerName: 'Juan Dela Cruz',
        orderDate: new Date(Date.UTC(2015, 11, 1)),
        dateDelivered: null,
        status: 'Pending',
        address: '#7 Toshiba, Intel Celeron.'
      },
      { 
        imgSrc: 'http://tinyurl.com/oxfs37o',
        customerName: 'Batack Obama',
        orderDate: new Date(Date.UTC(2015, 11, 1)),
        dateDelivered: new Date(Date.UTC(2015, 11, 2)),
        status: 'Delivered',
        address: '#7 Toshiba, Intel Celeron.'
      }
    ];

    vm.update = function (ev, i) {
      var order = vm.orders[i];
      $mdDialog.show({
        controller: function () {
          var dialog  = this;

          dialog.order = {};

          dialog.save = function () {
            $mdDialog.hide(dialog.order);
          };

          dialog.close = function () {
            $mdDialog.cancel();
          };
        },
        controllerAs: 'vm',
        templateUrl: 'app/main/editorder.html',
        parent: $document.body,
        targetEvent: ev
      }).then(function (order) {
        vm.orders[i].status = 'Delivered';
        vm.orders[i].dateDelivered = order.dateDelivered;
      });
    };

    vm.addObama = function (ev) {
      $mdDialog.show({
        controller: function () {
          var vm  = this;

          vm.order = {
            status: 'Pending'
          };

          vm.save = function () {
            $mdDialog.hide(vm.order);
          };

          vm.close = function () {
            $mdDialog.cancel();
          };
        },
        controllerAs: 'vm',
        templateUrl: 'app/main/addorder.html',
        parent: $document.body,
        targetEvent: ev
      }).then(function (order) {
        return vm.orders.push(order);
      });
    };

  }
})();
