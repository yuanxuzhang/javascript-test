## Function 类型  
在 ECMAScript 中**函数实际上是对象**，每个函数都是 Function 类型的实例，而且都与其他引用类型一样具有**属性和方法**。由于函数是对象，因此**函数名实际上也是指向函数对象的指针，不会与某个函数绑定。函数通常是使用函数声明语法定义的**。  
函数创建：  
1. `function sum(num1, num2){
       return num1 + num2;
    }`  
2. `var sum = function(num1, num2){
       return num1 + num2;
    }`  
3. `// Function构造函数可以接收任意数量的参数，但最后一个参数始终被看做是函数体    
    
    var sum = new Function("num1", "num2", "return num1 + num2");`
