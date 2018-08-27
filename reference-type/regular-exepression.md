## RegExp 类型   
ECMAScript 通过 RegExp 类型来支持正则表达式，创建语法为：

1. 字面量形式：`var expression = / pattern / flags;`  
2. 使用构造函数，它接收两个参数：一个要匹配的字符串模式，另一个是可选的标志字符串。使用字面量定义的任何表达式，都可以使用构造函数来定义。  
PS：使用正则表达式字面量和使用 RegExp 构造函数创建的正则表达式不一样。在 ECMAScript 3 中，正则表达式字面量始终会共享同一个 RegExp 实例，而使用构造函数创建的每一个新实例都是一个新实例。ECMAScript5 明确规定，使用正则表达式字面量必须像直接调用 RegExp 构造函数一样，每次都创建新的 RegExp 实例。 IE9+ 据此作出了修改。  

其中的模式部分可以是任何简单或复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用。每个正则表达式都可以带有一个或多个标志(flags),用以标明正则表达式的行为。  
匹配模式可分为：  
1. g：表示全局（global）模式，即模式将被应用与所有字符串，而非在发现第一个匹配项时立即停止。  
2. i: 表示不区分大小写（case-insensitive）模式，即在确定匹配项时忽略模式与字符串的大小写。  
3. m: 表示多行（multiline）模式，即在到达一行文本末尾时还会继续查找下一行中是否存在与模式匹配的项。  
PS：上述三种模式可自由组合。  
正则表达式的元字符在使用时必须转义，**在使用构造函数的字符串模式是涉及到双重转义情况**元字符包括：  
( { [ \ ^ $ | ? * + .] } )  
### RegExp 实例属性  
RegExp 的每个实例都具有下列属性，通过这些属性可以取得有关模式的各种信息。  
1. global：布尔值，表示是否设置了 g 标志。  
2. ignoreCase：布尔值，表示是否设置了 i 标志。  
3. lastindex: 整数，表示开始搜索下一个匹配项的字符位置，从 0 算起。
4. multiline：布尔值，表示是否设置了 m 标志。  
5. source： 正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。  
### RegExp 实例方法  
RegExp 对象的主要方法包括：  
1. `exec()`该方法是专门为捕获**组**而设计的。该方法接收一个参数，即要应用模式的字符串，然后返回包括第一个匹配项信息的数组；或者在没有匹配项的情况下返回 null。返回的数组虽然是 Array 的实例，但包含两个额外的属性：index 和 input。其中，index 表示匹配项在字符串中的位置，而 input 表示应用正则表达式的字符串。在数组中，第一项是与整个模式匹配的字符串，其他项是与模式中的捕获组匹配的字符串（如果模式中没有捕获组，则该数组只包含一项）。   
特别说明，即使在模式中设置了全局标志（g），它每次也只会返回一个匹配项。在不设置全局标志的情况下，在同一个字符串上多次调用该方法将始终返回第一个匹配项的信息。而在设置全局标志的情况下，每次调用该方法则都会在字符串中继续查找新匹配项。   
2. `test()`接受一个字符串参数。在模式与该参数匹配的情况下返回 true；否则，返回 false。此方法一般适用于：知道目标字符串与某个模式是否匹配，但不需要知道其文本内容的情况，因此该方法经常被用在 if 语句中。  
### RegExp 构造函数属性  
RegExp 构造函数包含一些属性（这些属性在其他语言中被看成是静态属性）。这些属性适用于作用域中的所有正则表达式，并且基于所执行的最近一次正则表达式操作而变化。换句话说，这些属性分别有一个长属性和一个短属性名。  

    长属性名                短属性名                                  说明 
    input                   $_                      最近一次要匹配的字符串。Opera未实现此属性
    lastMatch               $&                      最近一次的匹配项。Opera未实现此属性
    lastParen               $+                      最近一次匹配的捕获组。Opera未实现此属性
    leftContext             $`                      input 字符串中 lastMatch 之前的文本
    multiline               $*                      布尔值，表示是否所有表达式都有多行文本模式。IE 和 Oprea未实现此属性
    rightContext            $'                      Input 字符串中 lastMatch 之后的文本
RexExp.$1、RexExp.$2、...、RexExp.$9分别用于存储第一、第二...第九个匹配的捕获组。在调用 `exec()` 和 `test()`方法时，这些属性会被自动填充。
