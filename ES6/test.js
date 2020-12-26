{
  let arr = [12,[43,45],[67,32,[4,5]]];  //获取43,32,5
  let arr1 = arr[2][2][1];  
  console.log(arr1);    
  //结构赋值  
  let [,[a,],[,b,[,c]]] = arr;  
  console.log(a,b,c);    
  let [,[],x] = arr;  
  console.log(x);  

  let [one] = arr;  
  console.log(one);  
  let [two,n] = arr;  
  console.log(two,n);  
}  

{
   // let {name,...o} = {name: '张三', age: 18, fsfv: '打架',score: [1,2,3,4,5]};  
   // console.log(name,o);//对象也支持拓展运算符  
    let obj = {name: '张三', age: 18, fsfv: '打架',score: [1,2,3,4,5]};   
    let {...objs} = obj;  //这只是个浅克隆
    console.log(obj,objs);  
    let {name,age,fsfv,score:[,,,,A]} = obj;  
    let sum = age + A;  
    console.log(sum);
}  

{ //快速交换变量值，
    let a = 1;  
    let b = 2;  
    [a,b] = [b,a];  
    console.log(a,b);  
    let arr = [5,6,3,7,9,2,1,10];  
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
               [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }  
    console.log(arr);
}  

{  //接收函数返回多个值
    let fn = function() {
        let a = 12;  
        let b = 13;  
        let c = 14;  
        return [a,b,c]
    }   
   let [c,b,a] = fn();  
   console.log(a,b,c);  
}  

{
    let fn = function(...arr) {
        console.log(arr);
    };
    fn(1,2,3)
}  

{
    let fn = function ([a,b,c]) {
        console.log(a,b,c);
    }  
    fn([1,2,3]) 

    let fun = function ({a,b}) {
        console.log(a,b);
    };
    fun({a:1,b:1})
}  

{
   let obj = new Map();  
   obj.set('x',10);  
   obj.set('y',20)  
   for([key,value] of obj) {
       console.log(key,value);
   }
}