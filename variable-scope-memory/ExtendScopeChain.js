function extendScopeChainTest(){
	var firstName = "firstName";
	// 添加withScope对象到作用域链上
	with(withScope){
		console.log(firstName + lastName);
	}

    // with语句块执行完毕后作用域链上的对象withScope被移除 lastName is not defined
	console.log(lastName);
}
withScope ={
	lastName : "lastName"
}

extendScopeChainTest();