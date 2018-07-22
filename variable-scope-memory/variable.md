Javascript变量 __松散类型__ 本质,决定了它只能在特定的时间用于保存特定值的一个名字而已。由于 _不存在定义某个变量必须要保存何种数据类型值的规则_ ,变量的值及其类型可以在脚本的生命周期内改变。  
## 基本类型和引用类型的值
基本类型：简单的数据段。Undefined Null Boolean Number __String__  
引用类型：可能由多个值构成的对象。  
在将一个值赋给变量时，解析器必须确定这个值是基本类型值还是引用类型值。  
#### 动态的属性
对于引用类型，具有动态的属性，创建并赋值后，还可以添加属性和方法，也可以改变和删除属性和方法。  
#### 赋值变量值  
值类型的复制会在新变量对象上创建一个新值。  
引用类型的赋值同样也会在新变量对象上创建一个新值，但是这个新值是指向实际对象的 __指针__ 。  
#### 检测类型
typeof：是确定一个变量是字符串（string），数值（number），布尔值（boolean），undefined的最佳工具。  
__null在typeof下显示为object__ 。    
instanceof: 检测引用类型变量的类型值（根据原型链来识别）。
所有的引用类型都继承自object 引用类型 instanceof Object 返回true，基本类型不是对象 基本类型 instanceof Object 返回false。  
[Code](https://github.com/yuanxuzhang/javascript-test/blob/master/variable-scope-memory/TypeTest.js)
