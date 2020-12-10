//一.javascript数据类型
//javascript共有6种数据类型，5种基本类型，1种对象类型
//原始数据类型    
//1.number数字型  2.string字符串类型  3.boolean布尔值型  4.null   
//5.undefined 
// null和undefined为比较特殊的两种类型  
// 6.object 对象类型   
//对象类型又分 a.Function  b.Array  c.Date......  

//二.隐式转换   
let x = 'The anwer is' + 42;   
let y = 42 + 'is the answer';   
let a = '37' - 0;  
let b = '37' + 0;
console.log(x,y,a,b);      

//a == b   
let strs = '1.23' == 1.23; 
console.log('1.23 == 1.23',strs);  

let zero = 0 == false;   
console.log('0==false?',zero); 

 let data = null == undefined;  
 console.log('null==undefined?',data);  
let obj = new Object() == new Object();     
console.log('new Object() == new Object() ?', obj);  

let arr = [1,2] == [1,2]; 
console.log('[1,2] == [1,2] ?',arr);
//a === b   

//类型不同，返回false   
//类型相同：  
//null === null;  
let data_undefined = undefined === undefined;    
console.log('undefined === undefined ?',data_undefined); 
//NaN != NaN   NaN是number的一个值，跟谁比都不相等，包括他自己
//new Object != new Object  
//类型相同，同===   
//类型不同，尝试类型转换和比较：  
let data_null = null === undefined;     
console.log('null === undefined ?',data_null);   
let bool = 1 == true;    
console.log('1 == true ?',bool);     
let Obj = new String('123') == 123;    
console.log('对象转换', Obj);

// 三.包装对象，number,string,boolean这三个原始类型都有对应的包装类型
let str = 'tjh';  
let strObj = new String('tjh'); 
console.log(typeof(str));  
console.log(typeof(strObj)); 
console.log(str.length);   
//基本的数据类型是不具备对象的属性和方法的
//当一个基本数据类型以对象的方式去使用它的时候，javascript会智能的把基本类型转化为  
//对应的包装类型对象，当访问完之后临时对象会消掉，javascript里万物皆对象  
//javascript里万物皆对象 String number boolean Array function
let numObj = new Number(123);  
console.log(numObj);  
console.log(typeof(numObj));  
console.log(numObj);   

//四.类型检测   
//使用typeof运算符会返回一个字符串，比较适用于基本类型判断和函数对象  
console.log(typeof(100));  
console.log(typeof(true));  
console.log(typeof(function(){}));
console.log(typeof{});  
console.log(typeof(new Object()));   
console.log(typeof([1,2,3,4,5]));   
console.log(typeof(NaN));   
console.log(typeof(null));

//判断对象类型更常用instanceof操作符   
let arr1 = [1,2] instanceof Array === true;  
console.log(arr1);   
let OBj = new Object() instanceof Array === true; 
console.log(OBj);  



