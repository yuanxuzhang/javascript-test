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
### Boolean类型  
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
浮点数值的最高精度是17位小数，但进行算数计算时其精度远远不如整数。  
**浮点数值计算会产生舍入误差问题，永远不要测试某个特定的浮点数值**
- 数值范围  
ECMAScript可表示的最大值为Number.MAX_VALUE,  
                 最小值为Number.MIN_VALUE,  
超出范围的值负无穷Number.NEGATIVE_INFINITY,  
           正无穷Number.POSITIVE_INFINITY.  
正负无穷值无法参加计算，使用**isFinite()** 检测和监控这些值是有必要的。
                 