//运算符常用于表达式之间做一些运算，按照运算符操作数的数量可以分为。。。  
//一元运算符；+num  二元运算符：a + b; 三元运算符 c ? a : b     
//逗号运算符  
let a = (1, 2, 3)
console.log(a);

//运算符delete;   
let obj = { x: 1 };
console.log(obj.x);
delete obj.x
console.log(obj.x);
//IE9后的方法delete无法删除掉 defineProperty方法  
/* let Obj = { x: 1, y: 2 };
Object.defineProperty(Obj, 'y', {
    configurable: false, //为true则表示可以删掉
    value: 1  //改值
});
delete Obj.y;
console.log(Obj.y); */

//运算符in
//window.x = 1;     
//console.log('x' in window);   浏览器打印可以考虑 node.js无法识别window   

//运算符instanceof,typeof      
//instanceof是判断对象的类型基于原型链去判断，typeof返回的是一个字符串，常用于原始类型或者函数对象  
//判断一个变量是不是原始类型或者是不是函数的话typeof是比较合适的
let OBJ = {} instanceof Object
console.log(OBJ);

console.log(typeof 100 === 'number');

//总结：
//js数据类型有六种，简单数据类型五种：String,Number,Boolean,undefined,Null,Obeject(function,array...)  
//表达式定义：表达式是js的一种短语，可使js解释器用来产生一个值   
//表达式分类:1原始表达式，2，初始化表达式，3函数表达式，4属性访问表达式，5，调用表达式，6，对象创建表达式   
//运算符从操作数上来划分有三种，操作一个数的一元运算符，操作两个数二元运算符，操作三个数三元运算符，  
//从功能上划分为七种运算符，1.赋值运算符，2.比较运算符，3.算术运算符，4.位运算符，5.逻辑运算符，6.字符串运算符  
//7.特殊运算符。  
//特殊运算符：条件运算符，逗号运算符，delete运算符，in运算符，instanceof运算符，typeof运算符，new运算符  
//this运算符，void运算符。   
//instanceof运算符，typeof运算符    
//逻辑运算符：逻辑或 || 当第一个表达式为真时直接返回第一个表达式的值,否则跳到二表达式返回二表达式的值，其中一个满足即可  
//逻辑与 && 两个表达式值都为真，返回第二个表达式的值，第一个表达式为假，直接返回第一个的值
let df = typeof true;
let cn = new Array instanceof Object;
console.log(cn);

/* let objs = {y: 10, x: 50};  
Object.defineProperty(objs,'x',{
    configurable: false,  
    value: 20
});
delete objs.y
console.log(objs); */   
/* 
let use = {name: 'tom', age: 18, likes: '跑步'};    
Object.defineProperty(use,'age',{
    configurable: false,   
    value: 90,
});      
delete use.likes
console.log(use); */

//Object.defineProperty()  //Object.defineProperty()  Object.defineProperty() Object.defineProperty()   
//Object.defineProperty(对象名，'要改的属性名'，{
//    configurable: false || ture   
//     value: 要改的值
//})   

/* let obje = {x: 10, y: 20, z: 30};   
Object.defineProperty(obje,'y',{
    configurable: false,  //当为fasle时指定的属性不能delete掉,没指定的可以删掉
    value: 50,
});  
delete obje.y
console.log(obje);   */
let vb = typeof Boolean;  
console.log(vb);  
var fg = 0 || 'tjh';  
console.log(fg);  
console.log(true || 1 > 3);   

let oobj = {x:3,y: 5};   
Object.defineProperty(oobj,'x',{
    configurable: false,  
    value: 5
})  
delete oobj.x
console.log(oobj);     












