class str {
    constructor(names, ages) {
        this.name = names;
        this.age = ages;
    }
    sing() {
        console.log('唱歌');
    }
}

let ldh = new str('刘德华', 50);
ldh.sing();
console.log(ldh);

{
    class Father {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
        sum() {
            console.log(this.x + this.y);
        }
    }
    class son extends Father {
        constructor(x, y) {
            super(x, y)
        }
        jian() {
            console.log(this.x - this.y);
        }

    }
    let one = new son(5, 3);
    let two = new son(54, 46);
    two.sum();
    two.jian();
}

{
    function Foo(uname, age) {
        this.uname = uname;
        this.age = age;
    };
    Foo.prototype = {
        constructor: Foo,
        sing: function () {
            console.log('会唱歌');
        },
        movie: function () {
            console.log('会看电影');
        }
    }
    let tjh = new Foo('唐剑豪', 18);
    console.log(Foo.prototype);
    console.log(tjh);

}

{//扩展内置对象：数组累加和,面向对象编程继承，封装，拓展，
    Array.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }
        return sum
    }
    let arr = [1, 2, 3]
    console.log(arr.sum());
}

{
    //继承  
    function Father(uname, age) {
        this.uname = uname;
        this.age = age;

    }
    Father.prototype.sum = function () {
        let sum = 0;
        for (let i = 0; i < arguments.length; i++) {
            sum += arguments[i]
        }
        return sum
    }
    Son.prototype = new Father;
    Son.prototype.constructor = Son;

    function Son(uname, age, likes) {
        this.uname = uname;
        this.age = age;
        this.likes = likes;
    }
    Son.prototype.max = function () {
        let max = 0;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] > max) {
                max = arguments[i]
            }
        }
        return max
    }
    let ldh = new Father('刘德华', 18);
    let myf = new Son('没严防', 65, '唱歌')
    console.log(myf.sum(1, 2, 3));
    console.log(myf.max(1, 2, 65, 23));
    //console.log(ldh.max(4,2,5,1));

    //对象实例原型指向他构造器的原型对象prototype
    console.log(ldh.__proto__ === Father.prototype);
    console.log(Father.prototype.__proto__ === Object.prototype);
    console.log(Father.prototype.constructor === Father);
    console.log(ldh.__proto__.constructor === Father);
}

{
    function Father(a, b) {
        this.a = a;
        this.b = b
    }
    /*  Father.prototype.sum = function () {
         return this.a + this.b
     } */
    Father.prototype = {
        constructor: Father,
        max: function (arr) {
            let max = 0;
            arr.filter(item => {
                item > max;
                max = item;
            })
            return max
        },
        min: function (arr) {
            let min = 0;
            arr.forEach(item => {
                if (item < min) {
                    min = item;
                }
            })
            return min
        },
        reverse: function () {
            let arr = [];
            for (let i = arguments.length - 1; i >= 0; i--) {
                arr.push(arguments[i])
            }
            return arr
        },
        sort: function (arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr.length - i; j++) {
                    if (arr[j] > arr[j + 1]) {
                        let tem = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tem
                    }
                }
            }
            return arr
        },
        nine: function (num) {
            let str = '';
            for (let i = 1; i <= num; i++) {
                for (let j = 1; j <= i; j++) {
                    str += j + '×' + i + '＝' + j * i + '\t'
                }
                str += '\n';
            }
            return str
        },
        xhs: function () {
            let arr = [];
            for (let i = 100; i < 1000; i++) {
                let a = parseInt(i / 100) //百位  
                let b = parseInt(i / 10 % 10)//十位  
                let c = parseInt(i % 10)//个位  
                if (a * a * a + b * b * b + c * c * c === i) {
                    arr.push(i)
                }
            }
            return arr
        },
        heavy: function () {
            let arr = [];
            for (let i = 0; i < arguments.length; i++) {
                if (arr.indexOf(arguments[i]) === -1) {
                    arr.push(arguments[i])
                }
            }
            return arr
        },
        cha: function (str) {
            let index = str.indexOf('a');
            let num = 0;
            while (index !== -1) {
                num++;
                index = str.indexOf('a', index + 1)
            }
            return num
        },
        sta: function (str) {
            let obj = {};
            for (let i = 0; i < str.length; i++) {
                let char = str[i];
                if (obj[char]) {
                    obj[char]++;
                } else {
                    obj[char] = 1;
                }
            }
            let max = 0;
            let strs = '';
            for (k in obj) {
                if (obj[k] > max) {
                    max = obj[k];
                    strs = k;
                }
            }
            return console.log('出现次数最多是字符:' + strs, '出现次数为:' + max);
        }


    }
    let tjh = new Father(1, 2);
    console.log(tjh.max([3, 2, 1, 6, 100]));
    console.log(tjh.min([1, 5, 3, 2, 0, 5]));
    console.log(tjh.reverse(1, 2, 3, 4, 5));
    console.log(tjh.sort([1, 5, 3, 2, 7]));
    console.log(tjh.nine(9));
    console.log(tjh.xhs());
    console.log(tjh.heavy(1, 4, 3, 2, 1, 5, 6, 6, 6));
    console.log(tjh.heavy('a', 'a', 'c', 'd', 'c', 'b'));
    console.log(tjh.cha('aadsaddsdfsaad'));//a出现的次数  
    console.log(tjh.sta('afsafssdaaafsajuiaawasfasewaeadsaqaawfszf'));
}

{
    let data = [{
        id: 1,

        name: '家电',
        goods: [{
            id: 11,
            gname: '冰箱'
        }, {
            id: 12,
            gname: '洗衣机',
            goods: [{
                id: 102,
                gname: '海尔'
            }, {
                id: 103,
                gname: '美的',
                goods: [{
                    id: 1003,
                    gname: '贵阳',
                }, {
                    id: 1004,
                    gname: '织金',
                }]
            }]
        }]
    }, {
        id: 2,
        name: '服饰'
    }];
    //利用递归取值
    function getId(arr, id) {
        let o = {};
        arr.forEach(item => {
            if (item.id === id) {
                o = item
                return item
            } else if (item.goods && item.goods.length > 0) {
                o = getId(item.goods, id)
            }
        })
        return o
    }
    console.log(getId(data, 1004));

}

{
    let a = 'asdfgasdfgsadasdsjhfisuhfjshaudssskhrh';
    let o = {}
    for (let i = 0; i < a.length; i++) {
        let char = a[i]
        if (o[char]) {
            o[char]++;
        } else {
            o[char] = 1
        }
    }
    console.log(o);
    let max = 0;
    let strs = '';
    for (k in o) {

        if (max < o[k]) {
            max = o[k];
            strs = k;
        }
    }
    console.log('出现次数最多的为：' + strs + '\t' + '次数为：' + max);
}  

{
    let arr = [];
    for(let i = 0; i <= 5; i++) {
         arr[i] = new Array;  
        for(let j = 0; j <= 5; j++) {
            arr[i][j] = j
        }
    }  
    arr[1][4] = 100;
    console.log(arr);
}








