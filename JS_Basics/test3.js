//求1-100之间的和于平均值；   
{
    let num = 0;  
    let sum = 0;  
    for(let i = 0; i <= 100; i++) {
        sum += i;  

    }
    let re = sum;  
    num = sum/100  

}  

{
    //求1-100之间所有偶数的和   
    let oushu = 0;   
    for(let i = 1; i <= 100; i++) {
        if(i % 2 == 0) {
            oushu += i
        }
    }  
    console.log(oushu);
}  

{
    //求1-100以内7的倍数的和  
    let num = 0;
    for(let i = 0; i <= 100; i++) {
        if(i % 7 == 0) {
            num += i;
        }
    }   
    console.log(num);
}  

{
    let str = '';  
    for(let i = 1; i <= 5; i++) {
        for(let j = i; j <= 5; j++) {
            str += '☆'
        }
        str += '\n'
    }  
    console.log(str);
}  

{
    let str = '';   
    for(let i = 1; i <= 9; i++) {
        for(let j = 1; j <= i; j++) {
            str += j + '×' + i + '＝' + j * i + '\t';
        }
        str += '\n'
    }  
    console.log(str);
}  

{
    let arr = [1,2,3,4,5];  
    let num = 0; 
    let a = 0; 
    arr.forEach(item => {
        num += item;  
        
    })  
     a = num / arr.length;  
    console.log(a);
}  

{  
    //求最大值；
    let arr = [2,5,13,67,34,21];   
    let max = arr[0];   
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}  

{
    let arr = [2,5,13,67,34,21];  
    let max = arr[0];
    arr.forEach(item => {
        if(item > max) {
            max = item;
        }
    })  
    console.log(max);
}  

{
    let arr = [2,5,13,67,34,21];      
    let max = arr[0];
    arr.filter(item => {
        if(item > max) {
            max = item
        }
        
    })
    console.log(max);
}  

{
    let arr = [1,2,3,4];   
    let str = '';   
    for(let i = 0; i < arr.length; i++) {
        str += arr[i] + '-'
    }  
    console.log(str);
}   

{
    let arr = [1,2,3,4];   
    let str = arr.join('-');  
    console.log(str);
}  

{
    let arr = [];  
    for(let i = 0; i < 10; i++) {
        arr[i] = i + 1;
    }  
    console.log(arr);
}  

{
    let arr = []
    for(let i = 0; i <= 3;i++) {
        arr[i] = new Array(1,2,3);
    }
    console.log(arr);
}    

{
    let arr = [];  
    for(let i = 0; i < 5; i++) {
        arr[i] = new Array();
        for(let j = 0; j < 5; j++) {
            arr[i][j] = 0;
        }
    }   
   arr[1][0] = 2;  
   arr[1][1] = 3;  
   arr[4][4] = 4;
   console.log(arr);
}  

{
    let arr = [2,0,6,78,77,89,90,5];  
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 10) {
            newArr.push(arr[i])
        }
    }  
    console.log(newArr);
}  

{
    let arr = [2,0,6,78,77,89,90,5];  
    let re = arr.filter(item => {
       return item > 10;
    })
    console.log(re);
}  

{
    let arr = [2,0,6,78,77,89,90,5];   
    let re = [];
    arr.forEach(item => {
        if(item > 10) {
            re.push(item);
        }
    }) 
    console.log(re);
}  

{
    let arr = [1,2,3,4,5,6];  
    let re = arr.filter(item => {
      return  item > 3;
    })
    console.log(re);
}

{
    let arr = [1,2,3,4,5,6];  
    let re = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        re.push(arr[i]);
    }  
    console.log(re);
}

{
    let arr = [1,2,3,4,5,6];   
    arr.reverse();  
    console.log(arr);
}

{
    let a = 1; b = 2;  
    let c = a;  
    a = b;  
    b = c;  
    console.log(a,b);   

}  

{
    let arr = [5,0,8,2,1];   
    for(let i = 0; i <= arr.length - 1; i++) {
        for(let j = 0; j <= arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let tm = arr[j];   
                arr[j] = arr[j + 1];  
                arr[j + 1] = tm;
            }
        }
    }  
    console.log(arr);
}

{
    let arr = [5,0,8,2,1];   
    arr.sort((a,b) => { return b - a});  
    console.log(arr);
}  

{
    let arr = [2,6,1,8,5,9];   
    let max = arr[0];  
    for(let i = 0; i <= arr.length;i++) {
        if(arr[i] > max) {
            max = arr[i]
        }
    }  
    console.log(max);
}  

{
    let arr = [2,6,1,8,5,9];  
    let max = arr[0];
    arr.filter(item => {
        item > max;  
        max = item;  
        return max
    })
    console.log('f',max);
}  

{
    let arr = [1,2,3,4,5,6];  
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    console.log(newArr);
}  

{
    let arr = [25,4,100,21,1];  
    for(let i = 0; i <= arr.length - 1;i++) {
        for(let j = 0; j <= arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let tm = arr[j];  
                arr[j] = arr[j + 1];  
                arr[j + 1] = tm;
            }
        }
    }  
    console.log(arr);
}  

{
    let arr = [1,2,3,4,5]; 
    let str = '';  
    for(let i = 0; i < arr.length; i++) {
        str = str + arr[i] + '*'
    }
    console.log(str);
}  

{
    let arr = [1,2,3,4,5];   
     arr.reverse().join('-');  //reverse原数组会被修改
    console.log(arr);
}  

{
   let arr = [4,6,1,3,2,8,9];  
   arr.sort((a,b) => a - b);  
   console.log(arr); //sort原数组会被修改
}  

{
    let a = [1,2,3,4,5];    
    let ab = a.concat([6,7,8],9,10);  
    console.log(ab);
}  

{
    let arr = [1,2,3,4,5,6];   
    let a = arr.slice(-3,-1);  
    console.log(a);
}  

{
    let arr = [1,2,3,4,5];  
    let obj = {a: 100, b: 200}
    arr.splice(-2,0,'a',obj);  
    console.log(arr);//splice会修改原数组
}  

{
    let arr = [1,2,3,4,5];  
    let re = arr.map(item => 
         item * 5
    );  
    console.log(re);
}

{
    let arr = [1,2,4,3,4,3,2,5];   
    let re = arr.some(item => 
        item > 3
    )
    console.log(re);

    let res = arr.every(item => {
        return item > 3
    })  
    console.log(res);  
    
   console.log(arr.indexOf(3,-3));  
   let str = 'abecdef';   
   console.log(str.indexOf('e',-2));  
   console.log(arr.hasOwnProperty([0]));  
   console.log([0] in arr);   
   console.log(arr.propertyIsEnumerable([0]));   
   console.log(Object.getOwnPropertyDescriptor(arr,[0]));   
   Object.preventExtensions(arr);
   console.log(Object.isExtensible(arr));   
   Object.seal(arr);   
   console.log(Object.isSealed(arr));   
   console.log(Object.isFrozen(arr));  
   Object.freeze(arr);
   console.log(Object.isFrozen(arr));   
   console.log(Object.getOwnPropertyDescriptor(arr,[0]));    
   Object.defineProperty(arr,[0],{
       enumerable: true,  
       
   })  
   console.log(Object.getOwnPropertyDescriptor(arr,[0]));  
    Object.defineProperties(arr,{
       [1] : {enumerable: true},  
       [2] : {enumerable: true},
       [3] : {enumerable: true},   
      

   }) 
 
}  


