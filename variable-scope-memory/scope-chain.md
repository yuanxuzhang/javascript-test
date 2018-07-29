## 作用域链  
                            
创建时间：  
执行环境(其他语言的作用域)     ？ TODO  
作用域链                     代码执行时  
变量对象（活动对象）          ？ TODO  
关系：  
每个函数都有自己的执行环境。    
__函数__ 执行时,函数的执行环境会被推入环境栈中，函数执行完毕，栈将环境弹出。  
代码在一个环境中执行时，会创建变量对象的一个作用域链。  
#### 延长作用域链  
虽然执行环境的类型总共只有两种（全局和局部），但是还是有其他办法来延长作用域链。有些语句可以在作用域链的前端临时增加一个变量对象， __该变量对象会在代码执行后被移除__ 。     
try-catch语句的catch快  会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明。  
with语句 将指定的对象添加到作用域链中。  [Code](https://github.com/yuanxuzhang/javascript-test/blob/master/variable-scope-memory/ExtendScopeChain.js)  
#### 没有块级作用域  
##### 函数声明  
使用var声明的变量会被自动添加到最接近的环境中：  
在函数内部，最接近的环境是函数的局部环境  
在with语句中，最接近的环境是函数环境  
如果初始化变量时没有使用var声明，该变量就会自动被添加到全局环境  
__Javascript不声明而直接初始化变量是一个常见的错误做法，这样做可能导致意外情况，在初始化变量前一定要先声明__。  

##### 查询标识符（变量）  
环境中使用到标识符时，必须通过搜索来确定该标识符实际代表什么。搜索过程从作用域链的前端开始，向上逐级查询与给定名字匹配的标识符。如果局部环境中找到了该标识符，搜索过程停止，变量就绪。如果在局部环境中没有找到该变量，则继续沿作用域链向上搜索，搜索过程将一直追溯到全局环境的变量对象。若果在全局环境中也没有找到这个标识符，则意味着这个变量没有定义。  
ps：局部变量中存在着同名标识符，就不会使用位于父环境中的标识符。  
变量查询也不是没有代价的。很明显，访问局部变量要比访问全局变量更快，但Javascript引擎在优化标识符查询方面，已经是代价很小。  








