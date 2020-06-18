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
:::danger
instanceof的原理（A instanceof B），它顺着隐式原型（即__proto__）顺着寻找，看链式中包不包含B的显示原型
:::