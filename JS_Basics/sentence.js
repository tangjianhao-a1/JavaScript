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







