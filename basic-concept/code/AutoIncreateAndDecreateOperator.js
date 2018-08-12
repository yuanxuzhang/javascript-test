// 3
increateBefore("2");
// 2
increateAfter("2");
// 2.1
increateBefore(1.1);
// 1.1
increateAfter(1.1);
// 2
console.log(parseInt("2A"));
// [Number: NaN]
console.log(new Number("2A"));
// NaN
increateBefore("2q");
// NaN
increateAfter("2q");
// 1
increateBefore(false);
// 0
increateAfter(false);
var o = {
	valueOf: function(){
		return -1;
	}
}
// 0
increateBefore(o);
// -1
increateAfter(o);


function increateBefore(param){

	console.log(++param)
}
function increateAfter(param){

	console.log(param++)
}