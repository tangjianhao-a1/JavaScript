function getMax() {
    let max = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max
}

let maxs = getMax(2, 5, 9, 12, 54, 23, 78, 45, 67);
let maxs_a = getMax(31, 54, 56, 15, 89, 21);
let maxs_b = getMax(3, 10000, 4, 6,)
console.log(maxs_a);
console.log(maxs);
console.log(maxs_b);

function severse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
let severse_num = severse([1, 2, 3, 4, 5, 6]);
console.log(severse_num);

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let tem = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tem;
            }
        }
    }
    return arr
}
let re = sort([4, 2, 3, 7, 9, 3, 5,]);
console.log(re);

function num(row) {
    if (row > 9) {
        console.log('打印错误');
    } else {
        let str = '';
        for (let i = 1; i <= row; i++) {
            for (let j = 1; j <= i; j++) {
                str += j + '×' + i + '＝' + j * i + '\t';
            }
            str += '\n';
        }
        return str
    }

}

function Foo(name, age, sex) {
    this.names = name;
    this.ages = age;
    this.sexs = sex;
    this.max = function(arr) {
        if(arr instanceof Array) {
            let max_num = arr[0]
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] > max_num) {
                    max_num = arr[i];
                }
            }
            return max_num
        } else {
            console.log('请输入数组：如[1,2,3,4,5,6]');  
            return
        }
    }
}

let zhangsan = new Foo('张三', 28, '男');
let lisi = new Foo('李四', 17, '男');
let lxq = new Foo('李小琴', 30, '女');
lisi.aihao = '打球';
console.log(zhangsan);
console.log(lisi);
console.log(lxq);
let lisi_child = Object.create(lisi);
lisi_child.a = 10;
console.log(lisi_child.ages);
console.log('sexs' in lisi_child);
console.log(lisi_child.hasOwnProperty('a'));  

let tjh = new Foo();  
console.log(tjh.max([1,2,3,4,100,56]));  
console.log(typeof Object);  

{
   let myMath = {
    PI: 3.14,  
    max: function(num) {
        let str = '';
        for(let i = 1; i <= num; i++) {
            for(let j = 1; j <= i; j++) {
                str += j + '×' + i + '＝' + j * i + '\t'
            }
            str += '\n'
        }
        return str
    }
   }
   console.log(myMath.PI);
   console.log(myMath.max(8));
}  







