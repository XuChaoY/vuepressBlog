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
        if(obj.hasOwnproperty(key)){
            //递归调用
            result[key] = deepClone(obj[key])
        }
    }
    return result;
}
```
## 继承
``` js
```
## 原型

## 原型链