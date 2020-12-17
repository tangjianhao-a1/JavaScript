function getMax() {
    let max = arguments[0];   
    for(let i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];  
        }
    }  
    return  max
}  

let maxs = getMax(2,5,9,12,54,23,78,45,67);    
let maxs_a = getMax(31,54,56,15,89,21);    
let maxs_b = getMax(3,10000,4,6,)
console.log(maxs_a);
console.log(maxs);  
console.log(maxs_b);  

function severse(arr) {
    let newArr = [];
    for(let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }  
    return newArr
}  
let severse_num = severse([1,2,3,4,5,6]);  
console.log(severse_num);  

 function sort(arr) {
    for(let i = 0; i < arr.length;i++) {
        for(let j = 0; j < arr.length - i; j++) {
            if(arr[j] > arr[j + 1]) {
                let tem = arr[j];   
                arr[j] = arr[j + 1];  
                arr[j + 1] = tem;
            }
        }
    }
    return arr
}   
let re = sort([4,2,3,7,9,3,5,]);  
console.log(re);  

function num(row) {  
   if(row > 9) {
        console.log('打印错误');
   } else {
    let str = '';   
    for(let i = 1; i <= row;i++) {
        for(let j = 1; j <= i; j++) {
            str += j + '×' + i + '＝' + j * i + '\t';
        }
        str += '\n';  
    }
   return str
   } 
  
}  
console.log(num(8));
