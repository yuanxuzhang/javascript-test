var a = "Eric";
var b = true;
var c = 22;
var d;
var e = null;
var f = new Object();

// string
console.log(typeof a);
// boolean
console.log(typeof b);
// number
console.log(typeof c);
// undefined
console.log(typeof d);
// object
console.log(typeof e);
// object
console.log(typeof f);

// false
console.log(a instanceof Object);
// false
console.log(null instanceof Object);
// true
console.log(f instanceof Object);
