/*!
 * 闭包与变量测试
 * 该函数的内部函数只能引用最终的局部变量结果。
 */
function createFunctions(){

	var result = new Array();

	for(var i = 0; i < 10; i++){
		result[i] = function(){
			return i;
		}
	}

	return result;
}

createFunctions().forEach(function(item, index, array){
	// 值统统为10
	console.log('索引为：' + index + '  值为： ' + item());
});

// 改进措施
function createFunctionsImproved(){

	var result = new Array();

	for(var i = 0; i < 10; i++){
		result[i] = function(num){
			return function(){
				return num;
			};
		}(i);
	}

	return result;
}

createFunctionsImproved().forEach(function(item, index, array){
	// 值统统为0 1 2 3 4 5 6 7 8 9
	console.log('索引为：' + index + '  值为： ' + item());
});