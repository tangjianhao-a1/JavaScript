//javascript数据类型
//javascript共有6种数据类型，5种基本类型，1种对象类型
//原始数据类型    
//1.number数字型  2.string字符串类型  3.boolean布尔值型  4.null   
//5.undefined 
// null和undefined为比较特殊的两种类型  
// 6.object 对象类型   
//对象类型又分 a.Function  b.Array  c.Date......  

//隐式转换   
let x = 'The anwer is' + 42;   
let y = 42 + 'is the answer';   
let a = '37' - 0;  
let b = '37' + 0;
console.log(x,y,a,b);      

//a == b   
let str = '1.23' == 1.23 ? true : false;  
console.log('1.23 == 1.23',str);  

let zero = 0 == false ? '真':'假';   
console.log('0==false?',zero); 

 let data = null == undefined? true : false;  
 console.log('null==undefined?',data);  
let obj = new Object() == new Object() ? true : false;     
console.log('new Object() == new Object() ?', obj);  

let arr = [1,2] == [1,2] ? true : false; 
console.log('[1,2] == [1,2] ?',arr);
//a === b   

//类型不同，返回false   
//类型相同：  
//null === null;  
let data_undefined = undefined === undefined ? true : false;    
console.log('undefined === undefined ?',data_undefined); 
//NaN != NaN   NaN是number的一个值，跟谁比都不相等，包括他自己
//new Object != new Object  
//类型相同，同===   
//类型不同，尝试类型转换和比较：  
let data_null = null === undefined ? true : false;     
console.log(' null === undefined ?',data_null);   
let bool = 1 == true ? '真': '假';    
console.log('1 == true ?',bool);
