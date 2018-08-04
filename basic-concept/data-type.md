## 数据类型  
### Undefined  
Undefined类型只是一个值，即特殊的undefined。  
在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined。  
PS：一般而言，不存在需要显示地把一个变量设置为undefined值的情况。字面值undefined的主要目的是用于**比较** ,  **第三版引入这个值是为了正式区分空对象指针与未初始化的变量**。  
对**未初始化**的变量执行typeof操作符会返回undefined值，而对**未声明**的变量执行typeof操作符同样也会返回undefined值。  
直接使用未声明的变量会报错。  
### Null类型  
Null类型是第二个只有一个值的数据类型，这个特殊的值时null。  
从逻辑家角度来看，null值表示一个**空指针**，而这也正是typeof操作符检测null值时会返回“object”的原因。  
如果定义的变量准备在将来用于保存对象，那么最好将该变量初始化为null而不是其他值，这样一来，只要检查null值就可以知道相应的变量是否已经保存了一个对象的引用。  
实际上，undefined值是派生自null值的，因此ECMAScript-262规定对它们的相等性测试要返回true。  
尽管null和undefined有这样的关系，但它们的用途完全不同，如前所述，无论在什么情况下都没有必要把一个变量的值显示地设置为undefined，可是同样的规则对null却不适应。即只要意在保存对象的变量还没有真正保存对象，就应该明确地让该变量保存null值。这样做不仅可以体现null作为空对象指针的惯例，而且也有助于进一步区分null和undefined。  
### Boolean类型  [Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/BooleanFunction.js)  
Boolean类型只有两个字面值：true和false。这两个值与数字值不是一回事，true不一定是1，false也不一定等于0。  
**Boolean类型的字面值true和false是区分大小写的**。  
虽然Boolean类型的字面值只有两个，但ECMAScript中所有类型的值都与这两个值等价，可以调用Boolean()函数显示转化，控制语句也可自动转化。  
#####
    数据类型                             转化为true值                                 转化为false值
    Boolean                                 true                                         false
    String                              任何非空字符串                                 ‘’空字符串
    Number                               任何非零数字                                     0和Nan
    Object                                 任何对象                                        null
    Undefined                               -----                                      undefinded
### Number  
使用IEEE754格式来表示整数和浮点数。  
- 浮点数字   
**浮点数** ：数值中必须包含一个小数点，并且小数点后面必须至少有一位数字，小数点前面可以没有数字，但不推荐。  
浮点数转换为整数情况：
背景，浮点数值需要的内存空间是保存整数的两倍。  
1. 小数点后没有任何数字。  
2. 浮点数本身就是一个整数（1.0）
默认情况下，ECMAScript会将那些小数点后面带有6个零以上的浮点数转换为以e表示法的数值。  
浮点数值的最高精度是17位小数，但进行算数计算时其精度远远不如整数。[Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/FloatOperation.js)    
**浮点数值计算会产生舍入误差问题，永远不要测试某个特定的浮点数值**
- 数值范围   [Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/NumberScope.js)  
ECMAScript可表示的最大值为Number.MAX_VALUE,  
                 最小值为Number.MIN_VALUE,  
超出范围的值负无穷Number.NEGATIVE_INFINITY,  
           正无穷Number.POSITIVE_INFINITY.  
正负无穷值无法参加计算，使用**isFinite()** 检测和监控这些值是有必要的。  
- NaN  [Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/IsNaNFunction.js)  
NaN(Not a Number)是一个特殊的数值，用于表示一个本来要返回数值的操作数未返回数值的情况。  
NaN特点：  
1. 任何涉及NaN的操作都会返回NaN，这个特点在多步计算中有可能导致问题。  
2. NaN与任何值不相等，包括NaN本身。  
可以使用 **isNaN()** 函数检测是不是数值。[Code]()  
**isNaN在接收到一个值之后，会尝试将这个值转换为数值，某些不是数值的值会直接转换为数值，例如“10”或者Boolean值。儿任何不能转换为数值的值都会导致这个函数返回true** 
PS：isNaN确实也适用于对象，在基于对象调用isNaN()函数时，会首先调用对象的valueof()方法，然后确定方法返回的值是否可以转换为数值，如果不能则基于这个返回值再调用toString()方法，再测试返回值。---这也是ECMAScript中内置函数和操作符的一般执行流程。 
### 数值转换  [Code](https://github.com/yuanxuzhang/javascript-test/blob/master/basic-concept/code/NumberConvert.js)  
非数值转换数值的函数：  
Number(): 任何数据类型。  
parseInt(): 专用于字符串。  
parseFloat(): 专用于字符串。  
Number转换规则：  
- Boolean值，true和false将分别转化为1和0。  
- 数字值，只是简单的传入和返回。  
- 如果是null值，返回0。
- 如果是undefined，返回NaN。
- 字符串情况：  
1. 字符串中只包含数字（包括正负号），将其转换为十进制数值。  
2. 字符串中包含有效的浮点格式，则将其转换为对应的浮点数值。  
3. 字符串中包含有效的十六位进制格式，则将其转换为相同大小的十进制整数值。  
4. 字符串是空的（不包含任何字符），则将其转换为0。  
5. 字符串中包含上述格式之外的字符，则将其转换为NaN。      

由于Number()函数在转换字符串是比较复杂且不合理，因此在处理整数的时候更常用parseInt()函数。该函数在转换字符串时，更多的是看其是否符合数值模式。
parseInt转换规则：
0. 忽略字符串前面的空格，知道找到第一个非空格字符。  
1. 第一个字符不是数字或者负号，返回NaN，包含空字符串。  
2. 如果第一个字符是数字字符，将继续解析第二个字符，直到解析完所有后续字符或者 **遇到了一个非数字字符（后边的会被忽略）**。  
PS：如果字符串第一个字符是数字字符，parseInt也能识别出各种整数格式（0八进制，0x十六进制）。  
**pasreInt第二个参数接受转换的数字进制数，不指定意味着让parseInt()去决定如何解析输入的字符串进制，转换时应当主动传进制数**  
parseFloat()与parseInt类似，仅有的不同之处为：  
1. 第一个小数点是可以解析的。  
2. 会忽略 **前导** 的零，造成十六进制会被解析为0（0x）。  
3. 如果字符串是一个可解析为整数的数（没有小数点，或者小数点之后都为零），将会返回整数。  

