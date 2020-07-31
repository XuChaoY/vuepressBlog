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
//子组件children-comp
```html
<div>
    <slot> </slot>
</div>
//父组件内
<children-comp>
    <h1>你好</h1>
</children-comp>
```
#### 具名插槽
//子组件children-comp
```html
<div>
    <slot name="soltName"> </slot>
</div>
//父组件内
<children-comp>
    <template v-slot="soltName"></template>
</children-comp>
```
#### 作用域插槽
```html
//子组件用slot向父组件传值
/子组件内children-comp
<slot :slotData="dataValue"></slot>
dataValue:{title:"标题"}
//dataValue是子组件中定义的值
//父组件内
<children-comp>
    <template v-slot="value">
    {{value.slotData.dataValue.title}}
    </template>
</children-comp>
//value随便叫什么名字，后面调用对应起来就行
```
### 动态、异步组件
//定义组件comp-child
//父组件引入 import compChild  from 'xx/xx/comp-child.vue'
//申明components:{compChild}
//变量 value = "compChild"
// <component :is="value" />
### keep-alive
### mixin