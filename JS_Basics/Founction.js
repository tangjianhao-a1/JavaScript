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
    this.max = function (arr) {
        if (arr instanceof Array) {
            let max_num = arr[0]
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > max_num) {
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
console.log(tjh.max([1, 2, 3, 4, 100, 56]));
console.log(typeof Object);

{
    let myMath = {
        PI: 3.14,
        max: function (num) {
            let str = '';
            for (let i = 1; i <= num; i++) {
                for (let j = 1; j <= i; j++) {
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

{
    let People = function (names, types, bloods) {
        this.name = names;
        this.type = types;
        this.blood = bloods;
        this.severse = function (arr) {
            if (Array.isArray(arr)) {
                let newArr = [];
                for (let i = arr.length - 1; i >= 0; i--) {
                    newArr.push(arr[i])
                }
                return newArr
            } else {
                console.log('请输入数组：如[1,2,3,4]');
                return
            }
        }
    }
    let houyi = new People('后羿', '射手型', '500血量');
    let lianpo = new People('廉颇', '射手型', '100血量');
    let attack = houyi.severse([1, 2, 3, 4, 5]);
    console.log(attack);

}

{
    let people = {
        name: '后羿',
        type: '射手型',
        blood: '100血量',
        attack: function () {
            let arr = [];
            for (let i = 100; i < 1000; i++) {
                let individual = i % 10;
                let ten = parseInt(i / 10 % 10)
                let hundred = parseInt(i / 100)
                if (hundred * hundred * hundred + ten * ten * ten
                    + individual * individual * individual === i) {
                    arr.push(i)
                }
            }
            return arr
        },
        arguments_min: function () {
            let min = arguments[0];
            for (let i = 0; i < arguments.length; i++) {
                if (min > arguments[i]) {
                    min = arguments[i]
                }
            }
            return min
        },
        arguments_sum: function () {
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += Number(arguments[i])
            }

            return sum
        },
        sort: function (arr) {
            if (Array.isArray(arr)) {
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr.length - i; j++) {
                        if (arr[j] > arr[j + 1]) {
                            let vm = arr[j];
                            arr[j] = arr[j + 1];
                            arr[j + 1] = vm
                        }
                    }
                }
                return arr
            } else {
                console.log('请输入数组');
            }

        },
        dates: function (time) {
            let newTime = +new Date()
            let inputTime = +new Date(time);
            let times = (inputTime - newTime) / 1000;
            let d = parseInt(times / 60 / 60 / 24);
            d = d < 10 ? '0' + d : d;
            let h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            let m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            let s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            let str = d + '天' + h + '时' + m + '分' + s + '秒';
            return str
        }

    }
    console.log(people.attack());
    console.log(people.arguments_min(5, 3, 7, 3, 9, 20));
    console.log(people.arguments_sum('3', 3, 3));
    console.log(people.sort([1, 4, 3, 2, 45, 12, 32, 56]));
    console.log(people.dates('2021-1-1 0:0:0'));


}

{
    function mun(arr) {
        let newArr = [];  
        for(let i = 0; i < arr.length; i++) {
            if(newArr.indexOf(arr[i])=== -1) {
                newArr.push(arr[i]);
            }
        }
        return newArr
    }
   console.log( mun(['a','c','a','c','b']));
} 









