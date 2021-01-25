/* 按所给的时间格式输出指定的时间
格式说明
对于 2014.09.05 13:14:20
yyyy: 年份，2014
yy: 年份，14
MM: 月份，补满两位，09
M: 月份, 9
dd: 日期，补满两位，05
d: 日期, 5
HH: 24制小时，补满两位，13
H: 24制小时，13
hh: 12制小时，补满两位，01
h: 12制小时，1
mm: 分钟，补满两位，14
m: 分钟，14
ss: 秒，补满两位，20
s: 秒，20
w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个，本 demo 结果为 五
示例1
输入
复制 */
//formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
/* 输出
复制
2014-09-05 13:14:20 星期五 */
{
  function formatDate(Date, time) {
    let obj = {
      yyyy: Date.getFullYear(),
      yy: Date.getFullYear().toString().slice(-2),
      MM: '0' + (Date.getMonth() + 1),
      M: Date.getMonth() + 1,
      dd: '0' + Date.getDate(),
      d: Date.getDate(),
      HH: Date.getHours(),
      H: Date.getHours(),
      h: Date.getHours() % 12,
      hh: '0' + (Date.getHours() % 12),
      mm: Date.getMinutes(),
      m: Date.getMinutes(),
      ss: Date.getSeconds(),
      s: Date.getSeconds(),
      w: ['日', '一', '二', '三', '四', '五', '六'][Date.getDay()]
    }
    let y = time.replace(/yyyy/g, obj.yyyy);
    let g = y.replace(/MM/g, obj.MM);
    let d = g.replace(/dd/g, obj.dd);
    let H = d.replace(/HH/g, obj.HH);
    let m = H.replace(/mm/g, obj.mm);
    let s = m.replace(/ss/g, obj.ss);
    let w = s.replace(/w/g, obj.w);
    return console.log(w);
  }

  formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
  let a = '1234';
  let b = a.slice(2);
  console.log(b);
  console.log(23 % 12);
  let q = 'qwertq';
  let o = q.replace(/q/g, 'z')
  console.log(o);
}

{
  function test(a) {
    let arr = a.split('')
    for (let i = 0; i < arr.length; i++) {
      if ('-' == arr[i]) {
        arr.splice(i, 1)
        arr[i] = arr[i].toUpperCase();
      }
    }
    return console.log(arr.join(''));
  }
  test('font-size')
  let a = [1, 2, 3, 4];
  a.splice(2, 1);
  console.log(a);
}

{
  function test(arr, item) {
    return arr.indexOf(item)
  };
  console.log(test([1, 2, 3, 4], 3));
}

{
  function test(arr) {
    let a = 0
    for (let i = 0; i < arr.length; i++) {
      a += arr[i]
    }
    return a
  }
  console.log(test([1, 2, 3, 4]));
}

{
  function test(arr) {
    let a = 0;
    arr.forEach(item => {
      a += item
    })
    return a
  }
  console.log(test([1, 2, 3, 4]));
}

{
  function remove(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr
  }
  console.log(remove([1, 2, 3, 4, 2, 2], 2));
}

{
  let arr = [1, 2, 3];
  let a = arr.slice(1);
  console.log(a);
}

{
  function count(arr, item) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == item) {
        num++
      }
    }
    return num
  }
  console.log(count([1, 2, 4, 4, 3, 4, 3], 4));
}

{
  function cssStyle2DomStyle(sName) {
    let arr = sName.split('');
    console.log(arr);
    if (arr.indexOf('-') == 0) {
      arr.splice(0, 1)
    } if (arr.indexOf('-') == arr.length - 1) {
      arr.splice(arr.length - 1, 1)
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr.indexOf('-') == arr.length - 1) {
        arr.splice(arr.length - 1, 1)
      }
      if (arr[i] == '-') {
        arr.splice(i, 1);
        arr[i] = arr[i].toUpperCase()
      }

    }
    return arr.join('')
  }
  console.log(cssStyle2DomStyle('-jiji-sa-'));
}