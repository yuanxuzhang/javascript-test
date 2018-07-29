## 保留字和关键字 
### 关键字  
    break          do              instanceof          typeof          else      
    new            var             catch               finally         return  
    void           continue        for                 switch          while
    debugger*      function        this                with            default  
    if             throw           delete              in              try  
PS：debugger是第五版新增的关键字。  
### 保留字  
    abstract        enum              int             short             boolean  
    export          interface         static          byte              extends  
    long            super             char            final             native  
    synchronized    class             float           package           throws  
    const           goto              private         transient         debugger  
    implements      protected         volatile        double            import  
    public  
PS：以上是ECMA-262第三版的全部保留关键字  
第五版在非严格模式运行时的保留关键字缩减为下列：  
###  
    class        enum        extends     super         const       export     import  
严格模式下，第五版还对以下保留字施加了限制：  
###
    implement    package     public      interface     private     static     let       protected      yield  
let和yield是第五版新增的保留字；其他保留字都是第三版定义的。  
在实现ECMAScript3的javascript引擎中使用关键字作为标识符，会导致“Identifier Expected”错误。而是用保留字作标识符可能会也可能不会导致相同的错误，具体取决于特定的引擎。  
第五版对使用关键字和保留字的规则进行了少许修改。关键字和保留字虽然任然不能作为标识符使用，但现在可以用作对象名字的属性名。一般来说，最好不要使用关键字和保留字作为标识符和属性名，以便与将来的ECMAScript版本兼容。  
除了上面的保留字和关键字，ECMA-262第五版对eval和arguments还施加了限制，在严格模式下，这两个名字也不能作为标识符或属性名，否则会抛错。  
