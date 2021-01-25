//表达式是指能计算出值得任何可用程序单元    
//表达式是一种JS短语，可使JS解释器用来产生一个值。

//原始表达式 => 1.  3.14(常量) 'test'(直接量)； 2. 关键字 null,this,true;  3.变量 i k j   
// 10 * 20  原始表达式 + 运算符 = 复合表达式； 

// 数组，对象的初始化表达式  
// [1,2] 等价于 new Array(1,2);   
// [1,,,4] 等价于 [1,undefined,undefined,4];   
let o1 = {x : 1,y : 2};   
console.log(o1);    
let o2 = new Object();  
console.log(o2);  
o2.x = 3;  
o2.y = 4;  
console.log('赋值后变量o2',o2);   

//函数表达式  
let fe = function() {};  
(function(){console.log('hello world');})
();  
 
//属性访问表达式   
var a = {x: 1,y: 2}   
console.log(a.x);   
console.log(a['y']);  

//调用表达式   func();   

//对象创建表达式  
 new Func(1,2);  
 new Object;  

 //表达式 => 1原始表达式，2初始化表达式，3函数表达式，4属性访问表达式，5调用表达式，6对象创建表达式；    
   
 


