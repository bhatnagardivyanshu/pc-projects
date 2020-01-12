// 	testing using mocha

/* 	describe() is used to group tests in Mocha. 
		
			It takes two parameters describe(group-name, callback)

			describe('string name', function(){
			  can nest more describe()'s here, or tests go here
			});
*/		

/* 	it() is used for individual test case
		
		it takes two parameters (test-description, callback)

		it('should return 0 ', function(){
			test goes here
		})
		
*/

/* 	assert library is a tool to verify the results
		assert contains many assert tests like assert.equal(actual, expected) which uses '==' to match the results

*/


const assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal('-1', [1,2,3].indexOf(4));
    });
  });
});