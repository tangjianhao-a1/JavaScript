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