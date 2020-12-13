 //对象是由new运算符生成，生成对象的函数被称类（或构造函数，对象类型）。    
 //生成的对象被称为类的实例，简称为对象。     
 {
     function foo() {}  
     foo.prototype.z = 3;   
     let obj = new foo();   
     console.log(foo.prototype.z);
 }

 {
     let obj = {};  
     obj.y = 2;  
     obj.x = 1;  
     obj.z = 3;
     delete obj.z
     console.log(obj);
 }    

 {
    function fun() {};  
    fun.prototype.a = 3;   
    fun.prototype.b = 4;   
    fun.prototype.c = 5;  
    console.log('fun',fun.prototype);   
    let obj = new fun();   
    console.log(obj.a);   
    console.log(obj.b);  
    //对象里有个原型标签proto,fun函数使用new运算符生成obj对象，fun函数可被称为类，构造函数或对象类型；   
    //而obj被称为fun类的实例对象，obj原型指向fun原型，obj对象也继承了它的属性，所以能访问到
 }

