class str{
    constructor(names,ages) {
        this.name = names;
        this.age = ages;
     }
     sing() {
         console.log('唱歌');
     }
}

let ldh = new str('刘德华',50);  
ldh.sing();
console.log(ldh);  

{
    class Father{
        constructor(x,y) {
            this.x = x;
            this.y = y;
        }
        sum() {
            console.log(this.x + this.y);
        }
    }
    class son extends Father{
        constructor(x,y) {
          super(x,y)
        }
        jian() {
            console.log(this.x - this.y);
        }
        
    }
    let one = new son(5,3);  
    let two = new son(54,46);  
    two.sum();
    two.jian();    
}   

{
    function Foo(uname,age) {
        this.uname = uname;
        this.age = age;
    };  
    Foo.prototype = {
        constructor: Foo,
        sing: function() {
            console.log('会唱歌');
        },
        movie: function() {
            console.log('会看电影');
        }
    }
    let tjh = new Foo('唐剑豪',18);  
    console.log(Foo.prototype);  
    console.log(tjh);

}   

{//扩展内置对象：数组累加和,面向对象编程继承，封装，拓展，
   Array.prototype.sum = function() {
       let sum = 0;  
       for(let i = 0; i < this.length; i++) {
           sum += this[i];
       }
       return sum
   }  
   let arr = [1,2,3]  
   console.log(arr.sum());
}  

{
    //继承  
    function Father(uname,age) {
        this.uname = uname;  
        this.age = age;  

    }
    Father.prototype.sum = function() {
        let sum = 0;  
        for(let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }
    Son.prototype = new Father;
    Son.prototype.constructor = Son;  

    function Son(uname,age,likes) {
        this.uname = uname;  
        this.age = age;
        this.likes = likes;
    }
    Son.prototype.max = function() {
        let max = 0;  
        for(let i = 0; i < arguments.length; i++) {
            if(arguments[i] > max) {
                max = arguments[i]
            }
        }
        return max
    }
    let ldh = new Father('刘德华',18);   
    let myf = new Son('没严防',65,'唱歌')  
   console.log(myf.sum(1,2,3));
    console.log(myf.max(1,2,65,23));  
    //console.log(ldh.max(4,2,5,1));

    //对象实例原型指向他构造器的原型对象prototype
    console.log(ldh.__proto__=== Father.prototype);  
    console.log(Father.prototype.__proto__ === Object.prototype);  
    console.log(Father.prototype.constructor === Father);
    console.log(ldh.__proto__.constructor === Father);
}





