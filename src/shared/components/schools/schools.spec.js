/* eslint-env jasmine */
/* global module, inject */

(function() {
  'use strict';

  describe('SPF_SINGAPORE_SCHOOLS', function() {

    beforeEach(module('spf.shared'));

    it('should hold a list of school', inject(function(SPF_SINGAPORE_SCHOOLS) {
      var nus = SPF_SINGAPORE_SCHOOLS.find(function(school) {
        return school.name === 'NUS High School';
      });

      expect(nus.type).toBe('Junior College');
      expect(nus.iconUrl).toBe('/assets/schools/NUS_HS.jpeg');
    }));

  });

})();