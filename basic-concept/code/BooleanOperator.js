// true
console.log(!false);
// false
console.log(!"char");
// true
console.log(!"");
// true
console.log(!0);
// true
console.log(!NaN);
// false
console.log(!12345);

var Person = function(){

}
Person.prototype.toString = function(){
	console("Person");
}

var Cat = function(){

}
Cat.prototype.toString = function(){
	console("Cat");
}

var cat = new Cat();

var person = new Person();

// ture
console.log((true && person)instanceof Person);
// false
console.log((false && person)instanceof Person);
// ture
console.log((cat && person)instanceof Person);
// NaN
console.log( NaN && person);
// null
console.log( null && person);