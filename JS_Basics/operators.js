//运算符常用于表达式之间做一些运算，按照运算符操作数的数量可以分为。。。  
//一元运算符；+num  二元运算符：a + b; 三元运算符 c ? a : b     
//逗号运算符  
let a = (1,2,3)  
console.log(a);

//运算符delete;   
let obj = {x: 1};   
console.log(obj.x);
delete obj.x    
console.log(obj.x);  
//IE9后的方法delete无法删除掉 defineProperty方法  
let Obj = {x: 1, y: 2};    
Object.defineProperty(Obj,'y',{
    configurable: false, //为true则表示可以删掉
    value: 1  //改值
});   
delete Obj.y;  
console.log(Obj.y);      

//运算符in
//window.x = 1;     
//console.log('x' in window);   浏览器打印可以考虑 node.js无法识别window   

//运算符instanceof,typeof      
//instanceof是判断对象的类型基于原型链去判断，typeof返回的是一个字符串，常用于原始类型或者函数对象  
//判断一个变量是不是原始类型或者是不是函数的话typeof是比较合适的
let OBJ = {} instanceof Object  
console.log(OBJ);  

console.log(typeof 100 === 'number');  

//运算符new    
function Foo(){}  //创建一个空函数Foo     
Foo.prototype.x = 1;   
let obj = new Foo();  //使用new运算符创建新的对象obj  









