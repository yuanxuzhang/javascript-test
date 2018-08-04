// 数字最小值 5e-324
console.log(Number.MIN_VALUE);
// 数字最大值 1.7976931348623157e+308
console.log(Number.MAX_VALUE);
// 负无穷 -Infinity
console.log(Number.NEGATIVE_INFINITY);
// 正无穷 Infinity
console.log(Number.POSITIVE_INFINITY);

// true
console.log(isFinite(Number.MIN_VALUE));
// true
console.log(isFinite(Number.MAX_VALUE));
// false
console.log(isFinite(Number.NEGATIVE_INFINITY));
// false
console.log(isFinite(Number.POSITIVE_INFINITY));