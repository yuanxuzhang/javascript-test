/*!
 * 所有类型的值都有与Boolean值等价的值，Boolean()函数可用于转换。
 * @return {[type]} [description]
 */
function booleanTest(){

	// true
	doConvert("XXX");
	// false
	doConvert("");

	// true
	doConvert(222);
	// true
	doConvert(-222);
	// false
	doConvert(0);

	// true
	doConvert(new Object());
	// false
	doConvert(null);
 	
 	var un;
 	// false
	doConvert(un);
}

function doConvert(value){
	var booleanTest = Boolean(value);
	console.log(booleanTest)
}

booleanTest();