## vue基本使用（日常使用）
### 项目组件使用
- 工程项目中组件使用，import "路由" 引入组件，components中声明，template中使用
### computed和watch
- computed有缓存，data不变则不会重新计算
- watch监听引用类型，拿不到oldVal
#### watch如何深度监听
```js
watch:{
    name(oldVla, val){},
    info:{
        handler(oldVal, val){

        },
        deep:true //深度监听
        //深度监听拿不到oldVal
    }
}
```
### v-if和v-show的区别及使用场景
- 使用v-if节点，不符合条件压根不渲染该节点，v-show不符合条件只是修改style display：none进行隐藏
- v-if适合使用与渲染不频繁的节点，v-show适用于频繁渲染的节点
### 循环渲染
- 对象遍历也可以使用v-for
- key不能乱写（如random或者index）
- v-for/v-if不能一起使用
- v-for的优先级比v-if高（先执行v-for）
- 事件的参数event是原生的event对象
- 事件被挂载到当前元素

## vue组件通讯
### props和$emit
- props父组件向子组件传递属性
- $emit子组件触发父组件自定义事件，并且可以传递参数
### 组件间通讯-自定义事件
- 自定义事件通讯（兄弟组件通讯）
```js
// compsA中
import event from "./event"
event.$on("fnAuto", this.fn);  //自定义事件并绑定
event.$off("fnAuto", this.fn); //组件销毁时解除绑定，防止内存泄漏
fn(param){...};
//compsB中
event.$emit('fnAuto', param); //触发组件A自定义事件

//event.js
import Vue from 'vue'
export default new Vue()
```
## 组件生命周期
- created vue实例已初始化完成，但是页面还没开始渲染
- mounted 页面已经渲染完成
- beforeDestroy 解除绑定销毁子组件以及监听器
### 父子组件生命周期
- 洋葱模型
- 初始化前父组件到子组件  父beforeCreate-->子beforeCreate
- 初始化vue实例从父组件到子组件 父created-->子created
- 页面挂载前 父组件到子组件 父beforeMounte --> 子beforeMounte
- 页面渲染从子组件到父组件 子mounted-->父mounted
- 更新前父组件到子组件 父beforeUpdate-->子beforeUpdate
- 更新完毕子组件到父组件 子updated-->父updated
- 销毁前 父组件到子组件 父beforeDestroy-->子beforeDestroy
- 销毁完毕 子组件到父组件 子destroyed-->父destroyed
### 触发顺序
- 父beforeCreate->父created->父beforeMounte->子beforeCreate->子created->子beforeMounte->子mounted->父mounted->父beforeUpdate->子beforeUpdate->子updated->父updated->父beforeDestroy-->子beforeDestroy->子destroyed-->父destroyed
## vue高级特性
### 自定义v-model
- 父组件在子组件上使用v-model="name"
- 子组件
```js
//<input type="text" :vaule="text" @input="$emit('change', $event.target.value)">
// 1.上面的input使用了:value, 而不是v-model
// 2.上面的change对应下面的model.event,要对应起来
// 3.value属性的text与下面的model.prop和props中的text对应起来
model:{
    prop:"text", //对应props text
    event:"change"
},
props:{
    text:String,
    default:""
}
```
### $nextTick
- vue是异步渲染
- data改变之后，DOM不会立刻渲染
- $nextTick会在DOM渲染之后被触发，以获取最新的DOM
- 一次性无论修改data多少次，会整合修改，一次渲染
### slot
#### 普通插槽
- 子组件children-comp
```js
//<div>
//    <slot> </slot>
//</div>
//父组件内
//<children-comp>
//    <h1>你好</h1>
//</children-comp>
```
#### 具名插槽
- 子组件children-comp
```js
//<div>
//    <slot name="soltName"> </slot>
//</div>
//父组件内
//<children-comp>
//    <template v-slot="soltName"></template>
//</children-comp>
```
#### 作用域插槽
```js
//子组件用slot向父组件传值
//子组件内children-comp
//<slot :slotData="dataValue"></slot>
//dataValue:{title:"标题"}
//dataValue是子组件中定义的值
//父组件内
//<children-comp>
//    <template v-slot="value">
//    {{value.slotData.dataValue.title}}
//    </template>
//</children-comp>
//value随便叫什么名字，后面调用对应起来就行
```
### 动态、异步组件
- 定义组件comp-child
- 父组件引入 import compChild  from 'xx/xx/comp-child.vue'
- 申明components:{compChild}
- 变量 value = "compChild"
- <component :is="value" />
#### 异步组件
- import()函数
- 按需加载，异步加载大组件
- 父组件 components:{childCopm:()=>import('xxx/xxx/child-comp')}
### keep-alive
- 缓存组件
- 频繁切换，不需要重复渲染
- vue常见性能优化

### mixin
- 多个组件有相同逻辑，抽离出来
- mixin 并不是完美的解决方案，会有一些问题
- Vue3提出Composition API旨在解决这些问题
- 缺点
- 变量来源不明确，不利于阅读
- 多个mixin可能会出现命名冲突
- mixin和组件可能会出现多对多的关系，复杂度较高

### vuex
- state的数据结构设计
- state
- getters
- actions 异步
- mutations 同步

### vue-router
- 路由模式（hash, history）
- hash(默认模式)带#
- history不带#，需要server端配合支持
- 路由配置（动态路由、懒加载）
- 动态路由（动态参数）
- 懒加载 import()方法异步加载组件


### vue原理
#### 组件化
- 组件化很早就有
- vue数据驱动视图
- mvvm（以vue为例） model-view-viewModel  model-模型（数据）view-视图（template） viewModel连接视图与数据（click，监听、methods）
#### 响应式
- 数据data的数据一旦发生变化，立刻触发视图更新
- 实现数据驱动视图的第一步
- 核心API-Object.definProperty(3.0以前)
- Proxy（vue3.0）兼容性不好
```js
let data = {}
let name = 'xuhcaoyang'
Object.definProperty(data, 'name', {
    get:function(){
        return name
    },
    set:function(newVal){
        name = newVal
    }
})
console.log(data.name)  //xuchaoyang
data.name ="lisi"
```
- Object.definProperty缺点
- 深度监听，需要递归到底，一次性计算量大
- 无法监听新增属性、删除属性
- 无法原生监听数组，需要特殊处理
#### vdom和diff
- DOM操作比较耗费性能
- js模拟DOM结构
```html
<div id="div1" class="container">
    <p>vdom</p>
    <ul style="font-size:20px">
        <li>a</li>
    </ul>
</div>
```
```js
//  vnode
{
    tag:'div',
    props:{
        className:"container",
        id:"div1"
    },
    children:[
        {
            tag:'p',
            children:'vdom'
        },
        {
            tag:'ul',
            props:{
                style:'font-size:20px'
            },
            children:[
                {
                    tag:'li',
                    children:'a'
                }
            ]
        }
    ]
}
```
- 将计算量集中到js上，通过diff算法对比，尽量减少渲染更新
- 优化diff算法时间复杂度O(n)
- 只比较同一层级，不跨级比较
- tag不相同，则直接删除重建，不在深度比较
- tag和key,两者相同，则认为是相同节点，不在深度比较
- h函数、vnode、patch函数
- pathcVnode函数
- addVnodes函数 removeVnodes函数
- updateChildren(key的重要性)
#### 模板编译
- JS的with语法
```js
const obj = {a:100, b:200};
console.log(obj.a)   //100
console.log(obj.b)   //200
console.log(obj.c)   //undefined

//使用with，能改变{}内自由变量的查找方式
//将{}内自由变量，当做obj的属性来查找
with(obj){
    console.log(a)
    console.log(b)
    console.log(c) // 会报错！！！
}
```
- vue template complier将模板编译为rander函数
- 执行render函数生成vnode
- 模板转换成某种可以运行编译的代码（如JS代码）,这个过程就是编译模板
- 模板编译为rander函数，执行render函数返回vnode
- 基于vnode在执行patch和diff
- 使用webpack vue-loader,会在开发环境下编译模板
- vue组件中使用render代替tamplate
- 模板到render 函数，再到render，再到vnode，再到渲染更新
#### 渲染过程
- 初次渲染过程
- 解析模板为rander函数（或者在开发环境已完成，vue-loader）
- 触发响应式，监听data属性getter setter
- 执行render函数，生成vnode，patch(elem, vnode)
- 执行render函数会触发getter函数
```html
<p>{{message}}</p>
<script>
export default{
    data(){
        return {
            message:'hello',   //会触发get
            city:"北京"    //不会触发get， 因为模板没用到，即和视图没有关系
        }
    }
}
</script>
```
- 更新过程
- 修改data，触发setter（此前在getter中已经被监听）
- 重新执行render函数，生成newVnode
- patch(vnode, newVnode)diff算法更新DOM
- 异步渲染
- 回顾$nextTick
- 汇总data的修改，一次性更新视图
- 减少dom操作次数提高性能
#### 前端路由
- 路由模式 hash、H5 history
- hash的特点
- hash变化会触发页面的跳转，s及浏览器的前进、后退
- hash变化不会刷新页面，SPA必需的特点
- hash不会提交到server端（完全属于前端）
- H5 history 模式
- 用url规范的路由，但跳转时不刷新页面
- history.pushState
- window.onpopstate
- to B的系统推荐使用hash，简单易用，对url规范不敏感
- to C的系统，可以考虑选择H5 history， 但是需要服务端支持