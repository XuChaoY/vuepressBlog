## 手写深拷贝
``` js
//obj为要拷贝的对象
function deepClone(obj = {}){
    if(typeof obj !== 'object' || obj == null){
        //如果拷贝对象不是引用类型或者为null直接返回
        return obj
    }
    //初始化返回结果
    let result
    if(obj instanceof Array){
        result = []
    }else{
        result = {}
    }

    for(let key in obj){
        //保证key不是原型的属性
        if(obj.hasOwnProperty(key)){
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}
```
## 继承
``` js
 //ES6新属性 class
 class Student{
     constructor(name, number){
         //构造函数
         this.name = name;
         this.number = number;
     }
     sayHi(){
         console.log(`姓名${this.name}, 学号${this.number}`)
     }
 }
 //通过类new实例/对象
 const xiaoluo = new Student("小罗", 100)

 //继承 extends
 //调用父类的方法 super
 //父类
 class People{
     constructor(name){
         this.name = name
     }
     eat(){
         console.log(`${this.name} eat something`)
     }
 }
 //子类
 class Student extends People{
     constructor(name, number){
         super(name)
         this.number = number;
     }
     sayHi(){
         console.log(`姓名${this.name}, 学号${this.number}`)
     }
 }
 //子类
 class Teacher extends People{
     constructor(name, major){
         super(name);
         this.major = major
     }
     teach(){
         console.log(`${this.name} 教授 ${this.major}`)
     }
 }
```
## 原型
::: tip
__proto__隐式原型
每一个实例都有隐式原型
prototype显示原型
每一个class都有显示原型
实例的__proto__指向对应class的prototype
实例执行方法，或者属性，先从自身寻找，再从__proto__中找（相当于就在显示原型中寻找）
:::
## 原型链
::: tip
xiaoluo 是Student的实例 而Student继承于People（可以看做Student是People的实例，当然不是明着new）
所以xiaoluo的__proto__指向了Student的prototype，而Student的prototype中的__proto__指向了People的prototype，以此类推可以推到Object上，People的prototype中的__proto__指向Object的prototype，而Object的prototype中的_proto__指向null，原型链到顶了
:::
:::danger
instanceof的原理（A instanceof B），它顺着隐式原型（即__proto__）顺着寻找，看链式中包不包含B的显示原型
:::
## 简单实现JQuery逻辑
```js
class JQuery{
    constructor(selector){
        const result = document.querySelectorAll(selector)
        const length = result.length;
        for(let i = 0; i < length; i++){
            this[i] = result[i];
        }
        this.length = length;
        this.selector = selector
    }
    get(index){
        return this[index]
    }
    each(fn){
        for(let i = 0; i < this.length; i++){
            const elem = this[i]
            fn(elem)
        }
    }
    on(type, fn){
        return this.each(elem=>{
            elem.addEventListener(type, fn, false)
        })
    }
}
//jQuery插件
JQuery.prototype.dialog = function(info){
    alert(info)
}
```
## 作用域
```js
let a = 0;
function fn1(){
    let a1 = 100
    function f2(){
        let a2 = 200;
        function fn3(){
            let a3 = 300
            return a+a1+a2+a3
        }
        fn3()
    }
    fn2()
}
fn1()
//a 可以在fn1、fn2、fn3中可调用
//fn1中可调用a, a1，不能调用a2、a3
//fn2中可以调用a, a1, a3，不能调用a3,
//fn3中可以调用a, a1, a2, a3
```
### 自由变量
::: tip
一个变量在当前作用域中未被定义，但被使用，向上级作用域，一层一层寻找，直到找到为止，如果到全局作用域还未被找到，则报错xx is not undefined。
:::
### 块级作用域（ES6新增）
```js
//if、for、while等
```
### this不同应用场景的取值
::: danger
this 取什么值是在函数执行的时候决定的不是在定义的时候
:::
```js
//作为普通函数去调用
//使call apply bind
//作为对象方法被调用
//在class方法中被调用
//箭头函数
function fn1(){
    console.log(this)
}
fn1()  //window

fn1.call({x:100}) // {x:100}
const fn2 = fn1.bind({x:200})   //bind返回一个新函数
fn2() //{x:200}

const zhangsan = {
    name:"张三",
    sayHi(){
        //this即当前对象
        console.log(this)
    },
    wait(){
        setTimeout(function(){   //作为全局的普通函数执行， 而非当前对象
            //this === window
            console.log(this)
        })
    }
}

const zhangsan = {
    name:"张三",
    sayHi(){
        //this即当前对象
        console.log(this)
    },
    wait(){
        setTimeout(()=>{
            //this即当前对象
            console.log(this)  
        })
    }
}

class People{
    constructor(name){
        this.name = name;
        this.age = 20
    }
    sayHi(){
        console.log(this)
    }
}
const zhangsan = new People('张三')
zhangsan.sayHi()   //zhangsan对象
```
### 手写bind函数
```js
Function.prototype.bind1 = function(){
     //将参数拆解为数组 arguments是列表
     const args = Array.prototype.slice.call(arguments);
     //获取this（数组第一项）
     const _this = args.shift()
    //fn1.bind(...)中的fn1
     const self = this

     //返回一个函数
     return function(){
         return self.apply(_this, args)
     }
}
```
## 闭包
::: tip
作用域的特殊情况
:::
::: danger
闭包：所有的自由变量的查找，的是在定义的作用域向上级作用域寻找，不是在执行的地方！！！
:::
```js
//场景题  创建10个a标签，点击的时候弹出对应的序号
let a;
for(let i = 0; i < 10; i++){
    a = documnet.createElement('a')
    a.innerHTML = i+'<br>'
    a.addEventListener('click', function(e){
        e.preventDefault();
        alert(i)
    })
    document.body.appendChild(a);
}
```
```js
//闭包应用场景 隐藏数据，只提供api
function createCache(){
    const data = {}  //闭包中的数据，被影藏，不被外界访问
    return{
        set:function(key, val){
            data[key] = val
        },
        get:function(key){
            return data[key]
        }
    }
}
```
### 函数作为参数被传递
```js
//函数作为返回值
function  print(fn){
    let a = 200;
    fn()
}
let a = 100;
function fn(){
    console.log(a)
}
print(fn)   //100
```
### 函数作为返回值被返回
```js
//函数作为返回值
function  create(){
    let a = 100;
    return function(){
        console.log(a)
    }
}
let fn = create();
let a = 200;
fn()  //100
```

## 同步与异步
- 异步基于js是单线程语言
- 异步不会阻塞代码执行
- 同步会阻塞代码执行

## event loop(事件循环/事件轮询)
::: tip
- js是单线程运行
- 异步要基于回调来实现
- event loop就是异步回调的实现原理
:::
## promise
### 三种状态
- pending    在过程中
- resolved   成功
- rejected   失败
::: tip
- pending -> resolved 或者 pending -> rejected
- 过程不可逆
:::
### 状态的表现和变化
- 触发执行resolve函数，pending -> resolved
- 触发执行rejecte函数，pending -> rejected
- pending不会触发任何回调，resolved会触发then的回调，rejected会触发catch的回调
### then和catch对状态的影响
- then正常返回resolved，里边有报错则返回rejected
- catch正常返回resolved，里边有报错则返回rejected
```js
//实例一
Promise.resolve().then(()=>{
    console.log(1)
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})
//输出结果  1 3

//实例2
Promise.resolve().then(()=>{
    console.log(1)
    throw new Error("err")
}).catch(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
})
//输出结果 1 2 3

//实例3
Promise.resolve().then(()=>{
    console.log(1)
    throw new Error("err")
}).catch(()=>{
    console.log(2)
}).catch(()=>{
    console.log(3)
})
//输出结果 1 2
```
## async-await
:::tip
- 执行async函数会返回一个promise对象
- await 相当于Promise then
- try catch 相当于Promise catch
:::
```js
async function async1(){
    console.log("async1 start")   // 2
    await async2();  //undefine
    //await 的后面，都可以看作是callback里的类容，即异步
    console.log("async1 end")   // 5
    await async3();
    console.log("async1 end2")   // 7
}
async function async2(){
    console.log("async2")  // 3
}
async function async3(){
    console.log("async3")  // 6
}
console.log("script start")  // 1
async1()
console.log("script end")  // 4
```
## 宏任务与微任务
```js
console.log(100)
//宏任务
setTimeout(()=>{
    console.log(200)
})
//微任务
Promise.resolve().then(()=>{
    console.log(300)
})
console.log(400)

//打印结果 100 400 300 200
```
::: danger
- 宏任务：setTimeout, setInterval, Ajax, DOM事件
- 微任务：Promise asyc/await
- 微任务执行时机比宏任务要早（重点）
:::
### event loop 和 DOM事件
::: tip
- 异步函数和DOM事件都是通过回调来实现的
- event loop就是回调的原理
:::
### Event loop 与DOM渲染时机
- 1、call stack空闲之后
- 2、尝试DOM渲染
- 3、触发Event loop
### 为什么微任务执行时机比宏任务要早
- 宏任务：DOM渲染后触发， 如setTimeOut
- 微任务：DOM渲染前触发， 如promise
- 微任务是ES6语法规定的
- 宏任务是由浏览器规定的
::: tip
- 1、call stack清空
- 2、执行当前微任务 （mcore task queue）
- 3、尝试Dom渲染
- 4、触发event
:::
```js
async function async1(){
    console.log("fn1 start")   // 2
    await fn2();
    console.log("fn1 end")    // await 后面全部作为回调 -- 微任务   //  6
}
async function async2(){
    console.log("async2")    //  3
}
console.log("script start")   // 1

setTimeout(function(){
    console.log('setTimeout')   // 宏任务 setTime    // 8  (微任务、DOM渲染完毕，执行宏任务)
}, 0) 

async1()

//初始化promise是，出入函数会立刻被执行
new Promise(function(resolve){
    console.log("promise1")   // 4
    resolve()
}).then(function(){
    console.log("promise2")  // 微任务   //   7   (尝试处罚DOM渲染)
})

console.log("script end")   // 5  (event loop  -- call stack被清空， 执行微任务)
```

## DOM操作
### DOM的本质
- 就是结构树
- prototype：修改对象对象属性，不会体现到html在结构中
- attribute：修改html属性，会修改html结构
- 两者都可能引起DOM的重新渲染
### DOM性能
- 对DOM查询的做缓存
- 将频繁操作改一次操作

## BOM操作
- navigator 浏览器信息
- screen 屏幕信息
- location 地址信息
- history 路由历史信息

## 通用事件绑定
::: tip
事件代理就是利用事件冒泡
:::
```js
function bindEvent(elem, type, selector, fn){
    if(fn == null){
        fn = selector;
        selectot = null
    }
    elem.addEventListener(type, event=>{
        if(selector){
            //代理代理
            if(target.matches(selector)){
                fn.call(target, event)
            }
        }else{
            //普通绑定
            fn.call(target, event)
        }
    })
}
```
## ajax
### XMLHttpRequest
```js
//get请求
const xhr = new XMLHttpRequest();
xhr.open('GET', '/api', true)  //false同步 true异步
xhr.onreadystatechange = function(){
    if(xhr.readState === 4){
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
        }else{
            console.log("错误情况")
        }
    }
}
xhr.send(null)
```
```js
//post请求
const xhr = new XMLHttpRequest();
xhr.open('POST', '/login', true)
xhr.onreadystatechange = function(){
    if(xhr.readState === 4){
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.responseText))
        }else{
            console.log("错误情况")
        }
    }
}
const postData = {
    username:'zhangsan',
    password:'xxx' 
}
xhr.send(JSON.stringify(postData))
```
::: tip
- readState
- 0 （未初始化）还没调用send()方法
- 1 （载入）一调用send()方法，正在发送请求
- 2 （载入完成）send()方法执行完成，已经接受到全部相应内容
- 3 （交互）正在解析响应内容
- 4 （完成）响应内容解析完成，可以在客户端调用
:::
::: tip
- status
- 2xx 表示成功处理请求，如200
- 3xx 需要重定向，浏览器直接跳转，如301（永久重定向） 302（临时重定向） 304（资源未改变）
- 4xx 客户端请求错误，如404（资源路径找不到） 403（没权限）
- 5xx 服务器端错误 500 502
- 4 （完成）响应内容解析完成，可以在客户端调用
:::
### 手写ajax
```js
function ajax(url){
    const p = new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api', true)  //false同步 true异步
        xhr.onreadystatechange = function(){
            if(xhr.readState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else if(xhr.status === 404){
                    reject(new Error("404 not found"))
                }
            }
        }
        xhr.snd(null)
    })
    return p;
}
```
### 同源策略
::: danger
- ajax 请求时，浏览器要求当前页面和server必须同源（安全）
- 同源：协议、域名、端口，三者必须一致
:::
::: tip
- 无视同源的几种情况 加载图片、css、js
- img src  
- link href
- script scr
- img -- 可用于统计打点， 可食用第三方统计服务
- link、script -- 可使用cdn, cdn一般都是外域
- script可实现JSONP
:::
## cookie与localStorage与sessionStorage
:::tip
- cookie 最大4kb，每次请求都会附带
- localStorage 每个域名5M, 不会随http发送，以key/value形式存储字符串,setItem ,getItem,永久存储，除非代码或者手动删除
- sessionStorage 只会存在当前会话，浏览器关闭则清空
:::

## hhtp协议
### http状态码
- 状态码分类
- 1xx 服务器收到请求
- 2xx 请求成功， 如200
- 3xx 重定向， 如302
- 4xx 客户端错误， 如404
- 5xx 服务端错误， 如500

- 常用的状态码
- 200 成功
- 301 永久重定向
- 302 临时重定向
- 304 资源未被修改
- 404 资源未找到
- 403 没有权限
- 500 服务端错误
- 504 网关超时

### 传统的http methods
- get 请求服务端数据
- post 向服务端提交数据

### 现在的methods
- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

### Restful API
- 一种新的API设计方法
- 传统API设计：把每个url当做一个功能
- Restful API设计：把每个url当做一个唯一的资源

### http header
#### Resquest Headers
- Accept 浏览器可以接受的数据格式
- Accept-Encoding 浏览器可接收的压缩算法，如gzip
- Accpet-Languange 浏览器可接收的语言，如zh-CN
- Connection：keep-alive 一次TCP连接重复使用
- cookie
- Host -请求域名
- User-Agent（简称UA）浏览器信息
- Content-type发送数据的格式，如appilcation/json
#### Response  Headers
- Content-type返回数据的格式，如appilcation/json
- Content-length返回数据的大小，多少字节
- Content-Encoding返回数据的压缩算法，如gzip
- setCookie
### 缓存相关的Headers
- Cache-Contrl（response header）
- expries（response header）
- Last-Modified（response header）
- If-Modified-Since(request header)
- Etag（response header）
- If-None-Match(request header)

### http缓存
#### 缓存的介绍
- 通过缓存减少网络请求的数量以及体积，加快请求的速度
- 静态资源（js、css、img）可以被缓存
#### http缓存策略（强制缓存和协商缓存）
- 强制缓存（Cache-Control）
::: tip
- Response Headers中，服务端要求缓存
- 控制强制缓存的逻辑
- 逻辑过程是，客户端（浏览器）初次请求，服务端如果认为该资源可以被缓存，就会返回Cache-Control：max-age=time(单位秒)，浏览器会将该资源存到本缓存，浏览器再次请求该资源，会先经过本地缓存，如果在有效期限内，缓存会直接返回资源，请求不会到服务端
- Cache-Control的值max-age、no-cache(不用强制缓存，到服务端处理)、no-store(不用强制缓存，也不同服务端做缓存)、private、public
- expries(控制缓存过期)， 被Cache-Control替代
:::
- 协商缓存（对比缓存）
::: tip
- 服务器端缓存策略
- 服务器端判断客户端资源是否和服务端资源一样
- 一致返回304，否则返回200和最新资源
- 协商缓存的过程：浏览器初次请求，服务端会返回资源以及资源标识，浏览器再次请求时会携带资源标识，而服务端就是通过资源标识来判断客户端资源是否和服务端资源一样，一致返回304，否则返回200，最新资源和新的资源标识
- 资源标识：response Header中，Last-Modified(资源的最后被修改时间)、Etag（资源的唯一标识）两个可以共存
- Last-Modified:浏览器初次请求，服务端会返回资源和Last-Modified， 浏览器再次请求时request Header会携带If-Modified-Since，一致返回304，否则返回200，最新资源和新的Last-Modified
- Etag：浏览器初次请求，服务端会返回资源和Etag， 浏览器再次请求时request Header会携带If-None-Match，一致返回304，否则返回200，最新资源和新的Etag
- 两个同时存在会优先使用Etag,因为Last-Modified只能精确到秒级，对计算机来说还是太宽泛，如果资源被重复生成，而内容不变，则Etag更加精确
:::
#### 刷新操作方式， 对缓存的影响
- 正常操作：地址栏输入Url，跳转链接，前进后退（强制缓存有效、协商缓存有效）
- 手动刷新：F5，点击刷新按钮，点击菜单刷新（强制缓存失效、协商缓存有效）
- 强制刷新：ctrl+F5（强制缓存失效、协商缓存失效）

## webpack和babel
- ES6模块化，浏览器暂不支持
- ES6语法，浏览器并不完全支持
```js
//webpack.config.js
// babel要下载的包  @babel/core @babel/preset-env babel-loader
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.wxports = {
    mode:"development", //production
    entry:path.join(__dirname, "src", 'index.js'),
    output:{
        filename:"bundle.[contenthash].js",
        path:path.join(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:['babel-loader'],
                include:path.join(__dirname, 'src'),
                exclude:/node_modules/

            }
        ]
    }
    plugins:[
        new HtmlWebpackPlugin({
            template:path.join(__dirname, "src", "index.html"),
            filename:"index.html"
        })
    ],
    devServer:{
        port:3000,
        contentBase:path.join(__dirname, "dist")
    }
}
```
## linux命令
- 服务端以及测试端都是linux系统
- 本地的登录线上地址 ssh work(用户名)@192.168.10.21
- ls 查看文件夹 /ls -a 查看所有文件
- mkdir abc 创建abc文件夹
- rm abc   删除abc文件夹  rm -rf abc删除文件夹所有文件
- cd 进入文件夹
- mv a b 将文件夹a改为b，也能移动文件
- cp a a1 将a文件拷贝为a1
- vim a/vi a 编辑a文件
- head a 打印a文件头部几行
- tail a 打印a文件尾部几行
- grep "babel" a 在a文件中查找“babel”关键字

## 从输入url到渲染出页面的整个过程
### 资源的形式
- html代码
- 媒体文件，无图片、视频等
- javascript css
### 加载过程
- DNS解析(域名解析服务)：域名->IP地址（ip地址分区，不同的区ip不同）
- 浏览器根据ip地址向服务器发起http请求
- 服务器处理http请求，并返回给浏览器
### 渲染过程
- 根据HTML代码生成DOM Tree
- 根据CSS代码生成CSSO
- 将DOM Tree 和 CSSOM 整合形成Render Tree
- 根据Render Tree渲染页面
- 遇到script变迁吗则暂定渲染，有限加载并执行js代码，完成再继续，直到完成
## window.onload和DOMContentLoaded的区别
```js
window.addEventListener("load", function(){
    //页面全部资源加载完毕才会执行，包括图片、视频等
})
document.addEventListener("DOMContentLoaded", function(){
    //DOM渲染完成即可执行，此时图片、视频还可能没有加载完成
})
```

## 性能优化
- 原则：空间换时间 
- 让加载更快
- 让渲染更快
- 减少资源体积：压缩代码
- 减少访问次数：合并代码，ssr服务器端渲染，缓存
- 使用更快的网络：CDN
- 尽早加载js
- 图片懒加载
- 对DOM查询进行缓存
- 频繁DOM操作，合并到一期插入DOM结构
- 节流throttle 防抖debounce