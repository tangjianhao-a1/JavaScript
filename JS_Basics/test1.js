{
  let num = 6;  
  if(num > 10) {
      console.log('执行一');
  } else if (num > 5) {
      console.log('执行二');
  } else if (num > 3) {
      console.log('执行三');
  } else {
      console.log('都没有');
  }
}  

{
    let arr = [2,5,3,7,9,1] 
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}  


{
    let a = 5;
    switch (a) {
        case 1:
            console.log('执行一');
            break;
        case 2:
            console.log('执行二');
            break;
        case 3:
            console.log('执行三');
            break;
        //default  default  default default default default default default  default  
        default:
            console.log('错误');
    }
}
{
    let name = '麻子'; 
    switch (name) {
        case '李四':
            console.log('李四');  
            break;  
            case '张三':
            console.log('张三');
            break;  
            case '王二':  
            console.log('王二');  
            break;  
            default:  
            console.log('都没有');  
            break;
    }
}  

{
    let a = 1;  
    while (a < 5) {
        console.log(a);  
        a++;
    }  

    let b = 2;  
    do {
        console.log('b---------------');  
        b++;
    } while(b < 5);
}  

{
    function foo() {};   
    foo.prototype.a = 1;  
    foo.prototype.b = 2;   
    let obj = new foo();   
    console.log(obj.a);  
    console.log(obj.b);  
    obj.x = 10;  
    obj.y = 20;  
    obj.z = 30;  
    console.log(obj);   
    for(key in obj) {
        console.log(key);
    }  
   console.log(obj.hasOwnProperty('a'));//hasOwnProperty查看当前对象是否有该属性  
   console.log(Object.getOwnPropertyDescriptor(obj,'z')); //查看所有标签的访问权限 
   console.log(obj.propertyIsEnumerable('x'));//查看是否能被枚举    
   console.log('a' in obj);  
   Object.defineProperty(obj,'x',{
       
   })  
   console.log(Object.getOwnPropertyDescriptor(obj,'x'));   
   Object.defineProperty(foo.prototype,'a',{
       value:100,
       writable: true,  
       enumerable: true,  
       configurable: true,
   })  
   console.log(obj.a); 
   Object.defineProperties(obj,{
       h: {value:5,enumerable:true,writable:true,configurable:true},
       j: {value:23,enumerable:true,writable:true,configurable:true},
       k: {value:56,enumerable: true,writable: true, configurable: true},
   });  
  console.log(Object.getOwnPropertyDescriptor(obj,'k'));  
  console.log(obj.k);    
  console.log(Object.isExtensible(obj));  
  console.log(Object.isExtensible(obj));  
  console.log(Object.isExtensible(obj));//查看这个对象是否能被添加   
  Object.preventExtensions(obj)//设置这个对象不能被添加属性  
  Object.seal(obj)//将所有对象属性configurable设置为false   
  console.log(Object.isSealed(obj));//查看对象是否被seal  
  Object.freeze(obj); //冻结对象   
  console.log(Object.isFrozen);//查看是否被冻结  
  console.log(Object.getOwnPropertyDescriptor(obj,'j'));

}  

{
    let obj = {row: 1, name:'tom', row:2, names: 'jim'};  
    console.log(JSON.stringify(obj)); 
    
}  

{
    let obj = {
        a : 1,  
        b : 2,  
        c : 3,  
        get d() {
            return 5 + 5;
        },
        set d(v) {
            console.log(v*3);
        }
    }
    obj.toString = function () {return this.a + this.b + this.c}  
    console.log(+obj);   

    obj.valueOf = function () {return this.b + this.c + 100};  
    console.log(+obj);
    console.log(obj.d);   
    obj.d = 5;   
    
    let a = {y: 1, y: 2};  
    let b = {w: 3, v: 4};  
    let c = Object.assign(a,b);  
    console.log(c);
}    

{
    let a = {b: 1, c: 2, d: 3};   
    let obj = Object.create(a);    
    obj.x = 4; obj.y = 5; obj.z = 6;  
    for(key in obj) {
        console.log(key);
    } 
    console.log(obj.b);  
    obj.b = 10;  
    console.log(a);   
    console.log(obj);  
    delete obj.b;  
    console.log(obj);   
    console.log(obj.hasOwnProperty('b'));   
    console.log('d' in obj);   
    console.log(obj.propertyIsEnumerable('x'));   
    console.log(Object.getOwnPropertyDescriptor(obj,'x'));   
   
    console.log(Object.getOwnPropertyDescriptor(obj,'x'));   
    console.log(Object.isSealed(obj));   
    Object.defineProperty(a,'b',{})   
    console.log(Object.getOwnPropertyDescriptor(a,'b'));    
    Object.defineProperties(a,{
        b:{value: 10},
        c:{value: 20},  
        d:{value: 30},
    })
    console.log(Object.getOwnPropertyDescriptor(a,'d'));  
    console.log(Object.isExtensible(obj));//查看能否被添加  
    console.log(obj);  
    obj.h = 20;  
    console.log(obj);    
    Object.seal(obj);  
    console.log(Object.isSealed(obj));  
    Object.freeze(obj);   
    console.log(Object.isFrozen(obj));  

    let json = {a: 1, b: 2};   
    console.log(JSON.stringify(json));   
    let b = {a: 1, b: 2, c: 3};  
    let o = {t: 3, l: 3};  
    let bo = Object.assign(b,o);   
    console.log(bo);

}