## 操作符  
ECMAScript操作符不同于其他语言，它们能够适用于许多值，例如字符串、数字值、布尔值，甚至对象。不过，在应用于对象时，相应的操作符通常都会调用对象的valueOf()和（或）toString()方法，以便取得操作值。  
### 一元操作符  
Unary Operator：只能操作一个值的操作符。  
1. 递增和递减  
执行前置递增和递减操作时，变量的值都是在语句被求职以前改变的（副效应）。  
后置型递减和递增操操作时，递减和递增操作是在包含它们的语句被求值之后才执行的。  
不仅可以用于整数，还可以用于字符串、布尔值、浮点值和对象[Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/AutoIncreateAndDecreateOperator.js)：  
  - 在应用于一个包含**有效数字字符**的字符串时，先将其转换为数字值，再执行加减1的操作。字符串变量变成数值变量。  
  - 在应用于一个不包含有效数字字符的字符串时，将变量的值设置为NaN.字符串变量变成数值变量。  
  - 在应用于布尔值false时，先将其转换为0再执行加减1的操作。布尔值变成数值变量。  
  - 在应用于布尔值true时，现将其转换为1再执行加减1的操作。布尔值变量变成数值变量。  
  - 在应用于浮点数时，执行加减1操作。  
  - 在应用对象时，先调用对象的valueOf方法以取得一个可供操作的值。然后对该值应用前述规则。如果是NaN，则调用toString()方法后再应用前述规则。对象变量变成数值变量。  
### 一元加和减操作符  
对非数值应用**一元加**操作时，该操作符会像Number()一样对这个值执行转型。即，布尔值false和true将转换为0和1，字符串会被按照一组特殊的规则解析，而对象是先调用他们的valueOf()和(或)toString()方法，再转换得到值[Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/AddtionOperator.js)。  


