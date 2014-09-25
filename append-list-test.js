/*:
	@test-configuration:
		{
			"packageName": "append-list",
			"fileName": "append-list-test.js",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/append-list.git",
			"referenceFile": "append-list.js",
			"referenceModule": "appendList"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"append-list@github.com/volkovasystems": "appendList",
			"assert@nodejs": "assert"
		}
	@end-include
*/

describe( "appendList",
	function testAppendList( ){
		it( "should append [ 4, 5, 6 ] to [ 1, 2, 3 ]",
			function testCase( ){
				assert.deepEqual( appendList( [ 1, 2, 3 ], [ 4, 5, 6 ] ), [ 1, 2, 3, 4, 5, 6 ] );
			} );

		it( "should maintain reference to [ 1, 2, 3 ] when [ 4, 5, 6 ] was appended to it",
			function testCase( ){
				var list = [ 1, 2, 3 ];
				assert.strictEqual( appendList( list, [ 4, 5, 6 ] ), list );
			} );
	} );

var appendList = require( "./append-list.js" );

var assert = require( "assert" );