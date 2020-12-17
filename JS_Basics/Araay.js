{
    function add(list, index, item) {
        list.push(item);
        return list
    };
    let a = [1, 2, 4];
    let b = add(a, 1, 5);
    console.log(b);

    console.log(a);
    let re = a.join('-');
    console.log(re);
    console.log(a);
    function joinn(str, n) {
        return new Array(n + 1).join(str)
    }
    let c = joinn('我', 3);
    console.log(joinn('林俊杰', 5));

}

{    //severse逆转数组
    let arr = [1, 2, 3];
    console.log(arr.reverse());
}

{
    let arr = [13, 56, 2, 78];
    console.log(arr.sort((a, b) => a - b));
    console.log(arr.sort((a, b) => b - a));

}

{
    let arr = [{ age: 11 }, { age: 15 }, { age: 13 }, { age: 50 }];
    arr.sort((a, b) => b.age - a.age)
    console.log(arr);
    arr.forEach(item => console.log(item.age))
    console.log(arr);
}

{
    let arr = [1, 2, 3]
    let re = arr.concat(4, 5);
    console.log(re);
    console.log(arr.concat([11, 12], 20));
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(arr.slice(1, 3));
    console.log(arr.slice(1, -1));
    console.log(arr.slice(-4, -3));
}

{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    console.log(arr.splice(2));
    console.log(arr);

}

{
    let a = {name: 'tang'};   
    let b = [67,45,'jian']
    let arr = [1, 2, 3, 4, 5];
    arr.splice(4, 0, a,b);
    console.log(arr);
}  

{
    let a = [1,3,4,5,6];  
    let b = [8,4,2,5,0];   
    let c = a.concat(b);  
    let obj = {name: 'df'}
    c.splice(3,0,obj)  
    console.log(c);  
    let d = c.join('-');  
    console.log(d);
}  

{
    let arr = [1,2,3,4,5];  
    let re = arr.map(item => item * 3);  
    console.log(re);
}   

{
    let arr = [1,2,3,4,5,6,7,8,9];  
    let re = arr.filter(item =>{return item > 5 && item % 2 == 0});  
     console.log(re);
}   

{
    let arr = [1,2,3,4,5,6,7];   
    let re = arr.every(item => item > 6);  
    console.log(re);  

    let res = arr.some(item => item > 6);  
    console.log(res);  

}  

{
    let arr = [1,3,2,1,8,6,8,3];  
    console.log(arr.indexOf(8,5));
    console.log(arr.indexOf(1,-8));
}

{    
    let o = [1,2,3]
    let a = 'qwert';  
    console.log(a.indexOf('e'));  
    console.log(Object.getOwnPropertyDescriptor(o, [1]));   
    console.log(o.propertyIsEnumerable([1]));  
    o[3] = 4;  
    console.log(o);  
   // Object.freeze(o);  
    console.log(Object.getOwnPropertyDescriptor(o,[2]));  
    o[4] = 5;    
    o[5] = 6;  
    o[6] = 7;
    console.log(o);  
    let c = o.filter(item =>item > 2 );  
    console.log(c);  
    let d = o.map(item => item * 3);  
    console.log(d);   
    Object.defineProperties(o,{
        [0]:{enumerable:false, writable:false,configurable:false},   
        [1]:{enumerable:false,writable:false,configurable: false},
        [2]:{enumerable:false,writable:false,configurable: false}
    })   
    console.log(o);   
    let q = o.forEach(item => console.log(item));   
    o[0] = 23;   
    delete o[2];
    console.log(o);  
    for(let i = 0; i < o.length; i++) {
        console.log(o[i]);
    }  
    console.log(o.propertyIsEnumerable([0]));  
    for(key in o) {
        console.log(key);
    }
}

{
    var str = '';  
    for(var i = 1; i <= 8; i++) {
        for(var j = i; j <= 8; j++) {
            str = str + '☆';
        }
        str = str + '\n';
    }
}  
console.log(str);

{
   var st = '';   
   for(var i = 1; i <= 9; i++) {
       for(var j = 1; j <= i; j++) {
           st += j + '×' + i + '＝' + j*i + '\t';
       }
       st += '\n'
   }
   console.log(st);
}  


