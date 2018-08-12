// 1
addtionTest("01");
// 1.1
addtionTest("1.1");
// NaN
addtionTest("z");
// 0
addtionTest(false);
// 1
addtionTest(true);
var o = {
	valueOf: function(){
		return -1;
	}
}
// -1
addtionTest(o);


function addtionTest(param){
	console.log(+param);
}