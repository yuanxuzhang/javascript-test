var age = 11;
// 11 age是Number的实例，而Number又继承自Object
console.log(age.toString());

var found = true;
// true 同上
console.log(found.toString());

var num = 10;
// 10
console.log(num.toString());
// 1010
console.log(num.toString(2));
// 12
console.log(num.toString(8));
// 10
console.log(num.toString(10));
// a
console.log(num.toString(16));

var numberValue = 10;
var booleanValue = true;
var nullValue = null;
var undefinedValue;
// 10
console.log(String(numberValue));
// true
console.log(String(booleanValue));
// null
console.log(String(nullValue));
// undefined
console.log(String(undefinedValue));