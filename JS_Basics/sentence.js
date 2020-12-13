//block块语句，块语句常用于0-多个语句。块语句用一对花括号定义。   
//实际开发中很少单独使用，大多都结合if语句这些使用，使用let，const  
//在块语句声明变量在外面是访问不到的
{
    var a = 0;
}
console.log(a);
//从功能上看js语句可分为1.声明语句，2.表达式语句，3.选择语句，4.循环语句，5.控制语句。  
//表达式语句式最简单的语句，从上到下执行   
//程序的基本逻辑分三种：顺序，选择，循环，大部分控制语句属于顺序结构，而条件语句属于选择结构；    
//条件语句有if语句和switch语句两种  
//switch选择语句switch switch  switch  switch switch switch  switch  switch switch switch switch选择语句    
//if分支语句：
{
    let a = 5, b = 6;
    if (5) {//当小括号里的表达式的值为false或者能转换为false时，则不执行，判断标准是不为false就执行,反之就为true
        //
        console.log('a<b条件成立');
    } else {
        console.log('条件不成立执行代码');
    }
    //这样就能证明true能转换成numbel 2，3，4，5，。。。。了吗？答案是否定的  
    console.log(true == 2);//为false  
    console.log(true == 1);//为true  
    console.log(false == 0);//为true   
    console.log(false > 2); //false
}

{
    for (let i = 0; i <= 30; i++) {
        if (i >= 20) {
            console.log('大于等于20执行的码10次');
        } else if (i >= 10) {
            console.log('执行10-20十次');
        } else {
            console.log('执行1-10十次');
        }
    }
}

//条件分支语句switch更适合多条件判断，更为简洁；语法格式    
{
    let b = "2";
    switch (b) {
        case "1":
            console.log('您今年一岁');
            break;
        case "2":
            console.log('您今年两岁了');

        case "3":
            console.log('您今年三岁了');
            break;
    }
}
//不熟悉就多写，写到吐   
{
    let fruit = '飞洒发';
    switch (fruit) {
        case '苹果':
            console.log('就是苹果');
            break;
        case '梨子':
            console.log('就是梨子');
            break;
        case '香蕉':
            console.log('就是香蕉');
            break;
        //default default default  default default default  
        default:
            console.log('没有这种水果');

    }
};

{
    let book = '英语书';
    switch (book) {
        case '英语书':
            console.log('就是英语书');
        case '数学书':
            console.log('就是数学书');
        case '语文书':
            console.log('就是语文书');
        //default default default default default default default default default default  
        default:
            console.log('没有这书籍');
    }//从匹配到的分支开始顺序执行，遇到break退出循环，break后面的不执行，
}

{
    let num = 2;
    switch (num) {
        case 1:
            console.log('执行了1');
            break;
        case 2:
            console.log('执行了2');
        case 3:
            console.log('执行了3');
        case 4:
            console.log('执行了4');
            break;
        default:
            console.log('都不满足');
    }//使用switch语句后面切记加break关键字，
}

//循环语句就是能重复执行相同操作的语句，与if语句一样，循环语句也分while语句和for语句    
{
    let a = 0;
    while (a <= 5) {
        console.log('执行' + a + '次');
        a++;
    }
}

{
    let b = 0;
    while (b <= 5) {
        console.log('执' + b + '行');
        b++;
    }
}

{
    let num = 0;
    do {
        console.log('执行' + num + '次');
        num++;
    } while (num <= 5);
}

{
    let num2 = 0;
    do {
        console.log('执行le' + num2 + '次');
        num2++
    } while (num2 <= 5)
}

{
    let a = 5;
    switch (a) {
        case 1:
            console.log('执行一');
            break;
        case 2:
            console.log('执行二');
            break;
        case 3:
            console.log('执行三');
            break;
        //default  default  default default default default default default  default  
        default:
            console.log('错误');
    }
}

{
    let a = 0;
    while (a < 5) {
        console.log(a);
        a++;
    }
}

{
    let a = 0;
    do {
        console.log(a);
        a++;
    } while (a < 5);
}
let wec = 5;
{
    let q = 1;
    {
        let o = 2;
        console.log('q', q);
    }
    {
        let v = 3;
        console.log('wec', wec);
        {
            console.log('v', v);
            {
                console.log(v);
                var arr = 100;
                console.log();
            }
        }
    }
    console.log('arr', arr);

}

{
    for (let a = 1, b = 1, c = 1; a + b + c < 200; a++, b += 3, c *= 2) {
        console.log('a=' + a + ',b =' + b + ',c=' + c);
    }
}

{
    let obj = new Object();
    obj.x = '张三';
    obj.y = '李四';
    obj.z = '王二';
    obj.c = '麻子';
    obj.del = '不存在';
    Object.defineProperty(obj, 'del', {
        configurable: true,
        value: '再见'
    });
    delete obj.del;
    console.log(obj);
    for (let k in obj) {
        console.log(obj.k);
    }
}

{
    let age = 20;
    if (age <= 10) {
        console.log('86');
    } else if (age <= 20) {
        console.log('60');
    } else if (age <= 20) {
        console.log('20');
    } else {
        console.log('都不是');
    }
}

{
    for (let i = 0; i < 31; i++) {
        if (i == 10) {
            console.log('今年第' + i + '年');
        } else if (i == 20) {
            console.log('20今年第' + i + '年');
        } else if (i <= 21) {
            console.log('今年第' + i + '年');
        } else {
            console.log(i);
        }
    }
}

{
    var obj = {
        name: '张三',
        age: 18,
        like: '跑步'
    }
    for (var k in obj) {
        console.log(k);
    }
}

{
    try {
        try {
            
            throw 'text';
        }
        finally {
            console.log('finally');
        }
    }
    catch (ex) {
        console.log(ex);
    }
} 

{
    try {
        throw 'one'
    } catch(a) {
        console.log('a');
    } finally {
        console.log('必须执行');
    }
}  

{
    try {
        throw 'two';
    }
    catch(a) {
        console.log(a);
    }
    finally {
        console.log('不管有没有异常都执行');
    }
} 

{
    try {
        try {
            throw '123'
        }
        catch(a) {
            console.log(a);  
            throw a
        }
        finally {
            console.log('执行');
        }
    } catch(a) {
        console.log('外',a);
    } finally {
        console.log('最后执行');
    }
}  

{
    try {
        throw 123 //抛出异常
    } catch(a) {
        console.log(a);//接收异常
    } finally {
        console.log('有没有异常都执行的码');
    }
}   

{
    let a = 25;  
    if(a < 10) {
        console.log('执行一');
    } else if(a < 20) {
        console.log('执行2');
    } else if(a < 30) {
        console.log('执行3');
    } else if(a < 40) {
        console.log('执行4');
    } else {
        console.log('以上都没有');
    }
}   

{
    let a = 2;  
    switch(a) {
        case 1:  
        console.log('1');  
       
        case 2:  
        console.log('2');  
        
        case 3:  
        console.log('3'); 
        break; 
        case 4:  
        console.log('4');   
        break;   
        default:
            console.log('都没有');
    
    }
}    

{
    let b = 1;  
    while(b < 5) {
        console.log(b);  
        b++;
    }
}  

{
    let a = 1;   
    do {
        console.log(a);
        a++;
    } while(a < 5)
}  

{
    try{
        throw 'one'  //抛出问题
    } catch(e) {  //catch //捕获异常并接受
        console.log(e);
    } finally { //不管有没有异常都会执行的代码块
        console.log('都会执行');
    }
}  

{
   try {
       try {
           throw 'one'
       } finally {
           console.log('执行1');
       }
   } catch(e) {
       console.log('执行2',e);
   } finally {
       console.log('执行3');
   }
}    

{
  x:  for(let i = 0; i < 5; i++) {
        console.log(i);  
        for(let j = 10; j < 14; j++) {
           if(i == 3) {
               break x;
           }
           console.log(j);
        }
    }
    //给break加标记可以跳转到指定的行
}

