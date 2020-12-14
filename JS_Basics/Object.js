//对象是由new运算符生成，生成对象的函数被称类（或构造函数，对象类型）。    
//生成的对象被称为类的实例，简称为对象。     
{
    function foo() { }
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
    function fun() { };
    fun.prototype.a = 3;
    fun.prototype.b = 4;
    fun.prototype.c = 5;
    console.log('fun', fun.prototype);
    let obj = new fun();
    obj.z = 1;
    console.log(obj.z);
    console.log(obj.a);
    console.log(obj.b);
    console.log(obj['c']);
    console.log(typeof obj.toString);//对象上和原型上都没有toString方法，toString方法来自于Object.prototype上;  
    //所以JS默认的对象都会有toString方法，
    console.log('a' in obj); //in运算符也是以访问的方式逐级查找，为true;  
    console.log(obj.hasOwnProperty('z'));
    console.log(obj.hasOwnProperty('a'));//使用obj.hasOwnProperty方法可以查看当前对象里有没有这个属性
    //对象里有个原型标签proto,fun函数使用new运算符生成obj对象，fun函数可被称为类，构造函数或对象类型；   
    //而obj被称为fun类的实例对象，obj原型指向fun函数的prototype对象属性，obj对象里是没有这些属性的，   
    //访问获取对象属性它会按照原型链的方式逐级查找，实例对象=>它的构造器=>Object.prototype=>null,逐级查找   
    //做赋值，删除，修改等操作的时候，是不会影响到原型链上的内容的，只会修改当前对象。

}

{
    let a = { x: 1, y: 2 };
    let obj = Object.create(a);  //obj原型指向a这个对象原型，Object.create方法里的参数为一个对象；
    obj.z = 3;
    console.log(obj.x);
    console.log(obj.hasOwnProperty('x')); //使用hasOwnProperty方法查找当前对象是否有这个属性 
    console.log('x' in obj); //in 运算符按作用域查找； 
    let v = obj.x;
    console.log(v);
    let del = Object.getOwnPropertyDescriptor(obj, 'z')
    let descriptor = Object.getOwnPropertyDescriptor(Object, 'prototype');
    console.log(descriptor);
    console.log(del);

}

{
    let obj = new Object;
    obj.x = 1;
    obj.y = 2;
    console.log('x' in obj);  //原型链查找  
    console.log(obj.hasOwnProperty('y')); //当前对象查找   
    obj.propertyIsEnumerable('x'); //可否被枚举  
    console.log(Object.getOwnPropertyDescriptor(obj, 'x'));//可以查到对象的属性访问标签状态   
    Object.defineProperty(obj, 'y', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: 300
    })
    console.log(obj);
}

{
    let obj = { x: 1, y: 2, z: 3 };
    console.log(obj.hasOwnProperty('y'));
    console.log(obj.propertyIsEnumerable('z'));
    console.log(Object.getOwnPropertyDescriptor(obj, 'y'));
    Object.defineProperty(obj, 'y', {
        enumerable: false,
        writable: true,
        configurable: true,
        value: 200,
    })
    console.log(obj);//y通过obj打印不出来；  
    console.log(obj.y);
    delete obj.y;
    console.log(obj.y); //不可枚举但是能修改或删除，当writable和configurable为false时不能删除和修改

}

{
    let a = { x: 10, y: 20, z: 30 };
    let obj = Object.create(a);
    obj.a = 1; obj.b = 2; obj.c = 3;
    console.log(obj.hasOwnProperty('x'));
    console.log('x' in obj);
    console.log(Object.getOwnPropertyDescriptor(a, 'x'));
    Object.defineProperty(a, 'x', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: 30
    })
    console.log(a);
    console.log(obj.x);
    console.log(obj);//不可枚举只是说不能遍历，不能通过对象a查看到x属性，但是不影响它的对象实例向原型链上查找属性  
    a.x = 100;  //不可改写  
    delete a.x;  //但是可以删除，configurable为fasle则可以删除
    console.log(a);
    console.log(obj.hasOwnProperty('x'));
    console.log(obj.a);
    for (let v in obj) {
        console.log(v);
    }//当对象a属性设置为可枚举的时候，遍历它的实例对象就能把它的属性也遍历出去  
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log('key', key);
        }
    }

}

{
    let man = {
        name: 'tom',
        like: '跑步',
        get die() {
            return 5 * 5
        },
        set die(val) {
            console.log(val + 5);
        }
    }
    console.log(man.die);
    man.die = 5;
}

{
    let a = Object.prototype
    console.log(a);
}

{
    function foo() { };
    foo.prototype.a = 1;
    let obj = new foo();
    obj.z = 10; obj.y = 20;
    console.log(obj.a);
    console.log(obj.hasOwnProperty('a'));
    console.log('a' in obj);
    console.log(foo.prototype.propertyIsEnumerable('a'));
    console.log(obj.propertyIsEnumerable('y'));
    console.log(obj.propertyIsEnumerable('z'));
    console.log(Object.getOwnPropertyDescriptor(obj, 'y'));
    console.log(obj.z);   
    delete obj.z;  
    console.log(obj.z);   
    obj['z'] = 20;  
    console.log(obj.z);  
    for(key in obj) {
        console.log(key);
    }
    for(key in obj) {
        if(obj.hasOwnProperty(key)) {
            console.log('obj',key);
        } else {
            console.log(key);
        }
    }
    Object.defineProperty(obj,'z',{
        enumerable: false,  
        writable: false,  
        configurable: false
    })
    console.log(Object.getOwnPropertyDescriptor(obj,'z'));
    console.log(obj);

} 

{
    let a = {a: 1, b: 2, c: 3};   
    let obj = Object.create(a);  
    obj.z = 5; 
    obj.x = 6;  
    obj.y = 7;  
    obj.a = 2;  
    console.log(obj.a);   
    delete a.a   
    console.log(a);   
    a.a = 1;  
    console.log(a);  
    console.log(obj.hasOwnProperty('b'));  
    console.log('c' in obj);  
    console.log(obj.propertyIsEnumerable('a'));   
    Object.defineProperty(a,'b',{
        enumerable: false,  
        writable: false,  
        configurable: false,
    })  
    console.log(a);  
    console.log(a.b);  
    console.log(obj);  
    delete obj.a;  
    console.log(obj);  
    obj.n = 8;  
    console.log(obj);  
    obj.n = 9;  
    console.log(obj);  
    obj.b = 7;  
    console.log(obj);
}

{
    function foo() {};  
    Object.defineProperty(foo.prototype,'x',{
        get:function () {
            return 4 + 1
        },
        set:function (value) {
            console.log(value*2)
        }
    })

    console.log(foo.prototype.x);  
    foo.prototype.x = 100;  
    let obj = new foo();  
    obj.x = 1;  
    console.log(obj.x);  
    Object.defineProperty(obj,'x',{
        value: 100,
        configurable: true,  
        writable: true,  
      
    });  
    obj.x = 3
    console.log(obj.x);
}  

{
    let o = {a: 1, b: 2};   
    Object.defineProperty(o,'x',{
        value : 5,
    })
    let obj = Object.create(o);  
    obj.x = 200;  
    console.log(obj.x);//  
   console.log(Object.getOwnPropertyDescriptor(o,'x'));  
   Object.defineProperty(obj,'x',{
       enumerable: true,  
       writable: true,  
       configurable: true,
   })  
   console.log(Object.getOwnPropertyDescriptor(obj,'x'));  
   obj.x = 90;  
   console.log(obj);  
   delete obj.x;  
   console.log(obj);
}  
