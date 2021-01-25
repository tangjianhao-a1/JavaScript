 {   //同步api
    function test(a, b) {
        return a + b
    }
    console.log(test(5, 6));
}

{//异步api
    setTimeout(function () {
        console.log('好烦');
    }, 0)
}

{//test里没有return直接返回undefined,两秒后调用已经执行完了默认就是undefined
    function test() {
        setTimeout(function () {
            return { a: '你好' }
        }, 0)
    }
    console.log(test());
}

{
    //回调函数  
    function test(callback) {//callback相当于下面实参的名字
        callback('123')//实参
    };
    test(function (n) {
        console.log('callback被调用了');
        console.log(n);
    })
}

{//不将test返回结果作为值了,将异步API里内容以回调传参的方式传递出来
    function test(callback) {
        setTimeout(function () {
            callback({ a: '你好' })
        }, 0)
    }
    test(function (data) {
        console.log(data);
    });

}

{
    function test(c) {
        setTimeout(function () {
            c({ a: 'b' })
        }, 0)
    }
}
test(function (data) {
    console.log(data);
})

{
    //promise将异步API执行和结果进行分离，解决回调地域的问题  
    //promise是个构造函数，new一个实例对象，构造函数里需要一个匿名函数作为参数  
    //匿名函数里有两个参数resolve和reject,这两个参数都是函数，当异步API有返回结果时  
    //调用两个函数，并且将返回结果以参数的形式传递出去，使用promise里的then方法去接收他们，  
    //then方法里要传递一个函数，而这个函数就是resolve调用的执行函数，以传参的方式传递出来    
    let promise = new Promise(a => {
        console.log('執行一');
        //将异步里的内容作为实参传递出去，使用promise上的的then方法接收
        //而定时器里面的就是then方法里的调用表达式
        setTimeout(() => a('传参'))
    })
    promise.then(item => {
        console.log(item);
        return `一+${item}`
    })
    //then方法继承于promise.prototype;它的返回值是一个新的Promise实例，而不是原来的对象实例
    .then(item => {
        console.log(item);  
        return `二+${item}`
    }).then(item => console.log(item))

} 

{
    console.log('执行1');

    function fn() {
        let a = new Promise(x => {
            console.log('执行2');
            x('执行7')
        }).then(v => {
            console.log(v);
            return v
        }).then(v => {
            console.log('执行9',); v;
            return '执行11'
        });
        return a
    }
    fn().then(v => console.log(v));

    console.log('执行3');

    function test(k) {
        console.log('执行4');
        setTimeout(() => k('执行12'), 0)
    }
    test(v => console.log(v))

    console.log('执行5');

    let p = new Promise(a => {
        a('执行8');
        return a
    })
    p.then(v => {
        console.log(v);
        return '执行10'
    }).then(v =>{
        console.log(v);
        return '执行11'
    }).then(v => console.log(v))  
    console.log('执行6');

//验证JS执行顺序，同步 异步 回调函数  
//先执行同步队列,回调，异步 
}


