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

{
    function some() {
        let arr = [];
        for(let i = 0; i < arguments.length; i++) {
            if(arr.indexOf(arguments[i]) === -1) {
                arr.push(arguments[i]);
            }
        }
        return arr
    }  
    console.log(some('a','c','b','c','a','d','a'));
}//去重  

{
    //统计某个字符出现的次数   
    function second(str) {
        let index = str.indexOf('a')  
        let num = 0;  
        while(index !== -1) {
            console.log(index);  
            num++;
            index = str.indexOf('a',index + 1);
        }
        return  '次数为：' + num
    }
  console.log(second('aoaratwaoaoat'));
}  

{
    let arr = ['a','c','a','b','d','a'];  
    let index = arr.indexOf('a');  
    let num = 0;  
    while(index !== -1) {
        console.log(index);  
        num++;  
        index = arr.indexOf('a',index + 1)
    } 
    console.log('a出现的次数为:'+ num);
}

{
  let str = 'acdarthfgfdsvopamsdzfmkdvaewdgsazeraag';   
  let obj = {};  
  for(let i = 0; i < str.length; i++) {
      let chars = str[i];  
      if(obj[chars]) {
          obj[chars]++;
      } else {
          obj[chars] = 1;
      }
  }
  let max = 0;
  let sr = '';
  for(k in obj) {
      if(obj[k] > max) {
          max = obj[k];  
          sr = k;
      }
  }    
  console.log(obj);  
  console.log('出现次数最多的为'+ sr,'出现次数为' + max)
}   

{
   let str = 'tjh';  
  let a = str.replace('t','tang').split()
  console.log(a);  
  let string = 'gkmfdjnsjsigdea'  
  for(let i = 0; i <= string.length; i++) {
      if(string.indexOf('j') !== -1) {
          string = string.replace('j','我')
      }
  }
   console.log(string);
}

{
    let str = 'abaasdffggghhjjkkgfddsssss3444343'  
    //字符串长度  
    console.log(str.length);  //长度为33  
    //取出指定位置字符  
    console.log(str.charAt(5)); 
    //查找某个字符是否存在字符串中  
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf('a') !== -1) {
            console.log('存在');
            break;
        } 
    }
    //替换指定字符
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf('g') !== -1) {
            str = str.replace('g','2')
        }
    }
   console.log(str);  
   //截取字符串
   console.log(str.substr(8,3)); 
   //找出以上字符串中出现次数最多的字符和出现的次数  
   let o = {};
   for(let i = 0; i < str.length; i++) {
       let chars = str[i];  
       if(o[chars]) {
           o[chars]++;
       } else {
           o[chars] = 1;
       }
   }
   console.log(o);
   let maxs = 0;
   let key = ''
   for(k in o) {
       if(o[k] > maxs) {
           maxs = o[k];
           key = k;
       }
   }
   console.log('出现字符最多的为:' + key,'出现次数为：'+ maxs);
}  

{
    function fn(x,y) {
        console.log('喝咖啡');  
        console.log(this);  
        console.log(x + y);
    }
    let o = {a:1};  
    fn.call(o,1,2);
}

{
    //通过call实现两个构造的的继承  
    function One(uname,age) {
        this.uname = uname;  
        this.age = age;
    }  
   One.prototype.sing = function() {
       console.log('唱歌');
   }
   Two.prototype = new One();
   Two.prototype.constructor = Two
    function Two(uname,age,x) {
        One.call(this,uname,age);
        this.x = x;
    }  
   Two.prototype.song = function() {
       console.log('小酒窝');
   }
    let tjh = new Two('唐建浩',18,100); 
    tjh.sing();   
    console.log(tjh);  
    tjh.song();
}  

{
    function Father(uname,age) {
        this.uname = uname;  
        this.age = age;
    }   
    Father.prototype.sing = function() {
        console.log('冰雨');
    }
    Son.prototype = new Father(); 
    Son.prototype.constructor = Son
    function Son(uname,age,x) {
        Father.call(this,uname,age)
        this.x = x;
    }
    Son.prototype.song = function() {
        console.log('国歌');
    }
    let ldh = new Son('刘德华',18,100);  
    console.log(ldh);
    ldh.sing();
}









