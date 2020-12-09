function test(num) {
    if(num > 10) {
        return num + 1
    }
    return 2 * test(num + 2);  
}  
let arr = test(4);  
console.log(arr);    
// 2 * test(5 + 2);    
//   2 * test(2(7 + 2);    
//   2 * test(2(2(12));    
//      
function Me(num) { 
    if(num < 3) {
        return 1
    }
    return num * Me(num - 1);
};  
let re = Me(6);  
console.log(re);
//执行顺序  
// 6*Me(5);    
//6*(5* Me(4))；   
// 6*(5(4*Me(3)))；  
//6*(5(4(3Me(满足条件返回1)))  
//打印结果应该是360      

//使用for循环计算1-5累加和    
function num(sum) {  
    for(let i = 0; i <= 5; i++) {
        sum = sum + i;
    };
    return sum
} 
let newNUM = num(0);    
console.log(newNUM);
//使用递归实现   
function add(n) {
    if(n == 1) {
        return 1
    }
    return add(n - 1) + n
}  
console.log(add(5));  
// return add(5 - 1) + 5  
//return  add(4 - 1) + 5 + 4  
//return add(3 - 1) + 5 + 4 + 3
//retrun add(2 - 1) + 5 + 4 + 3 + 2  
//当执行分支语句 n = 1时 则return 1  
//此时add(1)就是一个具体数值，便不再调用自身，  
//return就起了作用 1 + 5 + 4 + 3 + 2  
//所以打印结果为15；   
function newArr(str) { 
    let st = ''
   for(let i = 1; i <= 5; i++) { //外层打印5行
       for(let j = 1; j <= 10; j++) {//里层打印10颗
           st = st + str;  //追加
       };
       //打印十颗换行
       st = st + '\n'
   }  
   return st;
}  
let Str = newArr('☆');  
console.log(Str)