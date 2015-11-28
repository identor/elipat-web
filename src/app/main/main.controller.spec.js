(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('beaverWeb'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

    it('should work', function() {
      expect(!!vm.agents).toEqual(true);
    });

  });
})();
