var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.strictEqual([1, 2, 3].indexOf(4), -1);
    });
  });
});

const Algorithms = require('../public/javascripts/algorithms')

describe('Algorithms', function(){
    describe('getLowestAvailableInt', function(){
        it('should return 3 in array [0, 1, 2, 4]', function() {
            assert.strictEqual(Algorithms.getLowestAvailableInt([0, 1, 2, 4]), 3);
        })
        it('should return 0 in array [1, 2, 3]', function() {
            assert.strictEqual(Algorithms.getLowestAvailableInt([1, 2, 3]), 0);
        })
        it('should return 1 in array [0, 2, 3]', function() {
            assert.strictEqual(Algorithms.getLowestAvailableInt([0, 2, 3]), 1);
        })
        it('should return 0 in empty array []', function() {
            assert.strictEqual(Algorithms.getLowestAvailableInt([]), 0);
        })
        it('should return 4 in array [0, 1, 2, 3]', function() {
            assert.strictEqual(Algorithms.getLowestAvailableInt([]), 0);
        })
    })
})