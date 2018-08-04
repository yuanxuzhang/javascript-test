// false
console.log(NaN == NaN);
// true
isNaNTest(NaN);
// false
isNaNTest(10);
// false
isNaNTest("10");
// true
isNaNTest("blue");
// false
isNaNTest(true);
// false
isNaNTest(false);

// true
isNaNTest(new Object())

function isNaNTest(type){
	console.log(isNaN(type));
}