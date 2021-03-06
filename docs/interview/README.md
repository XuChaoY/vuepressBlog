# 前端面试笔记 by 严辉
## HTML

#### 行内元素有哪些，块级元素有哪些，空（void）元素有哪些

- 行内元素：a span i img input select b strong等
- 块级元素：div ul ol lo h1~h6 p table等
- 空元素：br hr link等（area base col command embed）



#### 可以闭合的元素？

表单元素input

img、br、hr、meta、link



#### 常见的浏览器内核有哪些，介绍一下你对浏览器内核的理解

- Trident内核：IE/360/搜狗
- Gecko内核：NETSCAPE6及以上，火狐
- Presto内核：Opera7及以上
- Webkit内核：Safari，chrome

浏览器内核又可以分为两部分：渲染引擎和js引擎。

渲染引擎主要负责取得网页的内容、整理讯息、计算网页的显示方式等；

js引擎则是解析JavaScript语言，执行JavaScript语言来实现逻辑和控制DOM进行交互。



#### html5有哪些新特性

- 结构标签：header footer nav section article aside hgroup figure dialog
- 增强型表单：date(从一个日期选择器选择一个日期)、email(包含e-mail地址的输入域)、number(数值的输入域)、range(一定范围内数字值得输入域)、search(用于搜索域)、tel(定义输入电话号字段)、url(必须输入url地址)
- 视频和音频：audio、video、source
- Canvas绘图 SVG绘图
- 地理定位：Geolocation
- 拖放API：drag
- web worker：是运行在后台的JavaScript，独立于其他脚本，不会影响页面的性能。
- web storage：localStorage sessionStorage
- WebSocket：HTML5开始提供一种在单个TCP连接上进行全双工通讯的协议

兼容：ie低版本不支持，可使用shiv html5.js复制到header部分就可以在低版本ie中使用H5标签了



#### 简述以下HTML语义化的理解？

- 用正确的标签做正确的事情；
- html语义化让页面的内容结构化，结构更加清晰，便于浏览器、搜索引擎解析；
- 即使在没有样式css的情况下也以一种文档格式显示，并且更容易阅读；
- 搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO；



#### Canvas和svg的区别

canvas是h5提供的新元素\<canvas>，而svg并不是h5专有的标签；

从功能上看，canvas可以看作是一块画布，其绘制的图形为标量图，因此可以在canvas上引用png、jpg的格式的图片；而svg所绘制的是矢量图，所以svg不能引入普通的图片。



#### 表单提交中的Get与Post的区别

1. Get一般用于服务器上获取数据，Post向服务器传送数据
2. Get传输的数据是拼接在Url之后的，对用户是可见的，Post的传输数据对用户是不可见的
3. Get传送的数据量较小，不能大于2KB。Post传送的数据量较大，一般被默认为不受限制
4. Get安全性非常低，Post安全性较高
5. 在FORM提交的时候，如果不指定method，则默认为Get请求



#### em和i的区别

- 效果都是斜体
- em是语义化标签，表示强调
- i是样式标签，表示斜体



#### 说一下HTML5 drag api

dragstart：事件主体是被拖放的元素，在开始拖放元素是触发。

drag：事件主体是被拖放元素，在正在拖放被拖放元素时触发。

dragenter：事件主体是目标元素，在拖放元素进入某元素时触发。

dragover：事件主体是目标元素，在被拖拽元素在目标元素中移动时触发。

dragleave：事件主体是目标元素，在被拖拽元素移出目标元素时触发。

drop：事件主体是目标元素，在目标元素完全接收被拖放元素时触发。

dropend：事件主体时被拖放元素，在整个拖放操作结束时触发。



#### doctype的作用？

doctype(document type:文档类型)：是一种标准通用标记语言的文档类型声明。作用：告诉标准通用标记语言解析器，它应该使用什么样的文档类型定义来解析文档。

Doctype类型：过渡的 严格的 框架的

H5不基于SGML(标准通用内置语言)，因此不需要对DTD进行引用，但需要doctype来规范浏览器的行为。



#### alt和title属性的作用

alt：为了给那些不能看到图像的浏览者提供文字提示，只能用在img area input元素中；

title：为设置该属性提供建议性信息。大部分通过鼠标悬浮在元素上显示title文字为提示信息。



#### data-*属性的作用

用于存储页面或者应用程序的私有自定义数据，赋予在所有HTML元素上嵌入自定义data属性的能力，存储的数据可以被js利用，创建更好的用户体验



#### HTML的全局属性

accesskey class id data-* dir hidden draggable style title ...



#### 前端需要注意那些SEO？

SEO:Search Engine Optimization(搜索引擎优化)，具体是指通过网站结构调整、网站内容建设、网站代码优化以及站外优化，使网站满足搜索引擎的收录排名的需求，提高网站在搜索引擎中关键字的排名，从而吸引精准用户进入网站。

- 合理的title、description、keywords。
- 不同页面的title要有所不同
- 语义化html代码
- 重要的内容不要用js输出，爬虫不会执行js获取内容。
- 尽量少用iframe ，搜索引擎不会抓取iframe中的内容。
- 非装饰的图片必须加alt 。
- 提高网站速度：网站速度是搜索引擎排序的一个重要指标。



#### input中name有什么用

- 做一个标记，可通过getElementsByName()获取

- 作为与服务端交互数据的标识，比如input、select、textarea，服务端可以根据name获取params中提交的值

- name可以为type='radio'分组

- 建立页面中的锚点



#### 移动端项目需要注意的问题

##### meta中设置viewport

阻止用户用手去放大和缩小页面，需要在meta中设置viewport

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
```

##### css样式统一问题

需要重置页面样式，因为在不同手机浏览器上，默认的css样式不一致，使用reset.css重置所有元素的默认样式

##### 300毫秒点击延时问题

某些机型使用click时间会延迟300ms，可以使用fastclick.js。



#### head元素

head子元素分为三类：

描述网页基本类型：标题title、编码格式、视窗设置等

其他链接文件：css文件、js文件

厂商定制：同样分享页面到qq的聊天窗口，有些显示的不是链接而是页面的标题图片介绍，主要是因为设置了一下内容：

```html
<meta itemprop="name" content="这是分享的标题"/>
<meta itemprop="image" content="http://imgcache.qq.com/qqshow/ac/v4/global/logo.png" />
<meta name="description" itemprop="description" content="这是要分享的内容" />
```




## CSS

#### css盒子模型，box-sizing属性的理解

css的盒模型由content(内容)、padding(内边距)、border(边框)、margin(外边距)组成。但盒子的大小由content+padding+border这几部分决定。

box-sizing(有三个值)：border-box,inherit,content-box

IE盒子宽度=左右border+左右padding+width

标准盒子模型宽度：width

box-sizing：border-box表示IE盒子模型

![img](https://img2018.cnblogs.com/blog/1748092/201908/1748092-20190809145641572-714793117.jpg)

![img](https://img2018.cnblogs.com/blog/1748092/201908/1748092-20190809145529154-1986045519.jpg)

js获取盒模型对应的宽和高

- dom.style.width/height
- dom.currentStyle.width/height(只有IE支持)
- window.getComputedStyle(dom).width/height
- dom.getBoundingClientRect().width/height



#### px、em以及rem

- px：像素，相对长度单位，像素px是相对于显示器屏幕分辨率而言的
- em的值不是固定的，会继承父级元素的字体大小，代表倍数；
- rem是相对于html元素的font-size的一个单位，如果html上定义了font-size：20px; 那么无论在任何地方1rem=20px；这个大小不受父元素影响。




#### div垂直居中

```css
div{
    position:absolute;
    top:50%;
    left:50%;
    height:100px;
    width:100px;
    margin-top:-50%;
    margin-left:-50%;
}

div{
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    width:50%;
    height:50%;
    margin:auto;/**/
}

ParentDiv{
    align-items:center;
    display:flex;
}
```



#### 清除浮动，什么时候需要清除浮动以及清除浮动的方法？

浮动的元素是脱离文档标准流的，如果不清除浮动，那么就会造成父元素高度塌陷，影响页面的布局。

清除浮动的方法：

- 为父元素设置高度；
- 为父元素增加overflow:hidden
- 伪元素

```css
.fix::after{
    content:"";
    display:block;
    clear:both;
}
```

使用伪元素的好处：不增加冗余的DOM节点，符合语义化



#### position的值有哪些？

- static：默认值，没有定位，元素出现在正常的流中；
- relative(相对定位)：生成相对定位的元素，相对于其正常位置进行定位
- absolute(绝对定位)：生成绝对定位的元素，相对与static定位以外的第一个父元素进行定位
- fixed(固定定位)：生成绝对定位的元素，相对与浏览器窗口进行定位

- sticky(粘性定位)：当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了top: 50px，那么在sticky元素到达距离相对定位的元素顶部50px的位置时固定，不再向上移动（相当于此时fixed定位）



#### 什么响应式布局

响应式网站设计是一个网站能够兼容多个终端，而不会为了某一个终端做一个特定的版本。基本原理就是通过媒体查询检测不同的设备屏幕尺寸做处理。



#### css3的新特性

实现圆角border-radius，阴影box-shadow，边框图片box-image；

对文字加特效text-shadow，强制文本换行word-wrap，线性渐变linear-gradient；

实现旋转transform:rotate(90deg)，缩放scale(0.85,0.9)，translate(0px,-30px)定位，倾斜skew(-9deg,0deg)；

增加了更多的css选择器、多背景、rgba()；

唯一引入的伪类元素是::selection；

实现媒体查询@media，多栏布局flex；

过渡transition,动画animation；

补充：

- box-shadow参数：h-shadow(水平阴影) v-shadow(垂直阴影) blur(模糊距离) spread(阴影大小) color(颜色) inset(内阴影)
- animation: ani-name duration function delay times direction fill-mode
- transition: property duration function delay

#### ::before和:after中双冒号和但冒号有什么区别？

单冒号用于css3伪类，双冒号用于css3伪元素。

伪元素：在元素的前后插入额外的元素或样式，但是这些元素实际上并不在文档中生成。他们只在外部显示可见，但不会在文档的源代码中找到它们。

伪类：将特殊的效果添加到特定选择器上，它是已有元素上添加类别的，不会产生新的元素。



#### CSS3新增的伪类

- :nth-child(n)
- :nth-last-child
- :last-child
- :only-child
- .test li:nth-of-type(n)  //选择父元素下第n个li元素 
- :first-of-type  :last-of-type
- :only-of-type
- elem:empty   //选择不包含子元素和内容的elem标签



#### 如何画一个三角形

利用border

```css
div{
    width:0px;
    height:0px;
    border-top:10px solid red;
    border-left:10px solid transparent;
    border-right:10px solid transparent;
    border-bottom:10px solid transparent;
}
```



#### 画一条0.5px的线

采用meta viewport标签

```html
<meta name="viewport" content="initial-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
```

采用border-image的方式

采用transform:scale()的方式



#### 解释CSS sprites以及如何实现

- CSS Sprites其实就是把网页中的一些背景图整合到一张图片中，再利用css的background-image，background-repeat，background-position的组合进行背景定位
- CSS Sprites为一些大型网站节约了带宽，提高了用户的加载速度和用户体验，不需要加载更多图片



#### base64的使用

- 写入css，减少HTTP请求
- 使用于小图片
- base64的体积约为原图的4/3



#### transition和animation的区别

animation和transition大部分属性是相同的，他们都是随时间改变元素的属性值，他们的主要区别是transition需要触发一个事件才能改变属性，而animation不需要触发任何事件的情况下才会随时间改变属性值，并且transition为2帧，从from到to，而animation是一帧一帧的。



#### Flex布局

全程为flexible box（弹性布局）
flex-direction：row|row-reverse|column|column-reverse //row是横向的，column是纵向的

flex-wrap：nowrap|wrap|wrap-reverse

flex-flow：\<flex-direction>|\<flex-wrap>

justify-content：对齐方式(水平) flex-start|flex-end|center|space-between|space-around

align-items：对齐方式(竖直)

order：排序

flex-grow：定义项目的放大比例

flex-shrink：定义项目的缩小比例



#### margin塌陷和重叠现象

两个同级div，上下的margin只会取最大的那一个

两个嵌套的div，内部的margin会导致父div往下偏，而子元素父元素之间没有margin，可以通过设置BFC解决。

如果一个元素是空元素，这种情况外边距的顶边距和底边距碰在一起会发生重叠。

在上面那种空元素的情况，如果该空元素与另一个元素的外边距碰在一起，也会发生重叠。



#### BFC（块级格式化上下文，用于清除浮动，防止margin重叠等）

BFC区域不会与float box重叠

BFC是页面上的一个独立容器，子元素不会影响外面

计算BFC的高度时，浮动元素也会参加计算

哪些元素会产生BFC：

- 根元素 float不为none的元素 （元素浮动后，display值自动变成block）
- display为inline-block table-cell table-caption flex inline-flex的元素
- overflow不为visable的元素
- position不为static或者relative；

IFC（行内格式化上下文）：内部的盒子会在水平方向一个一个放置；IFC的高度由最高的盒子高度决定，一行不够会换行；

- IFC的line box一般左右都贴紧整个IFC，但是会因为float元素而扰乱。float元素会位于IFC与line box之间，使得line box宽度缩短；
- 水平居中：当一个块要在环境中水平居中时，设置为inline-block则会在外层产生IFC，通过text-align可以水平居中；
- 垂直居中：创建一个IFC，用其中一个元素撑开父元素的高度，然后设置vertical-align:middle，其他行内元素页可以垂直居中。



#### 关于js动画和css3动画的差异性

渲染线程分为main thread和compositor thread（合成线程），如果css动画只改变transform和opacity，这时整个css动画得以在compositor thread完成（而js动画则会在main thread执行，然后compositor进行下一步操作），特别注意的是transform和opacity是不会layout和paint的。

功能涵盖面：js比css大

实现/重构难度不一：css3更加简单

对于帧速表现不好的浏览器，css3可以自然降级

css3有兼容性问题



#### css选择器有哪些，并说说优先级

id选择器，class选择器，标签选择器，伪元素选择器，伪类选择器、属性选择器

!important>行内>id>class>tag

带有!important的优先级最高；

样式表的优先级为：内联>内部样式>外部样式>浏览器用户自定义样式>浏览器默认样式

属性选择器的优先级和伪类选择器的优先级相同

![img](https://img-blog.csdn.net/20180527004805952)



#### 怎样让一个元素消失

```css
display:none;
transform:scale(0);
opacity:0;
position:absolute;left:-1000px;//会让元素定位在可视区外
height:0;
filter:blur(0);
visibility:hidden;
```

```html
<div hidden="hidden"></div>
```



#### rgba()与opacity设置透明效果有什么不同？

- opacity作用于元素以及元素内的所有元素（包括文字）的透明度
- rgba()只作用于元素自身的颜色或其背景色，子元素不会继承透明效果



#### CSS属性的content有什么作用？

content属性专门应用在before/after伪元素上，用于插入额外的内容或者样式；



#### CSS中哪些属性不能从父元素继承

例如margin、padding、border以及背景



#### 如何实现元素的垂直居中？

父元素  display:flex;align-items:center;

元素绝对定位：top:50%;margin-top:-(高度/2)px;

高度不确定的情况使用 transform:translateY(-50%)

父元素table布局，子元素设置vertical-align:center



#### calc属性

calc用于动态计算长度值，任何长度值都可以使用calc()函数计算，需要注意的是，运算符前后都要保留一个空格，例如：width:calc(100% - 10px)



#### 设置一个元素的背景颜色，背景颜色会填充哪些区域

background-color设置的背景颜色会填充元素的content padding 以及border



#### 重绘和重排，怎么减少重绘和重排，让文档脱离文档流的方法？

DOM变化影响到了预算内宿的几何属性比如宽高，浏览器重新计算元素的几何属性，其他元素的几何属性也会受到影响，浏览器需要重新构造渲染树，这个过程叫重排，浏览器将收到影响的部分重新绘制在屏幕上成为重绘。

添加删除可见的DOM元素，元素的尺寸位置发生变化，浏览器页面的初始化，浏览器窗口大小发生变化，重排一定会导致重绘，重绘不一定会重排。

对于多次重排的元素，比如说动画，可以使用绝对定位，让其脱离文档流，使其不影响其他元素。



#### block inline以及inline-block的区别

block元素会独占一行，多个block元素会各自新起一行，默认情况下，block元素宽度会自动填充父元素的宽度。block元素可以设置width height，块级元素即使设置了宽度，依旧占一行。可以设置margin和padding属性。

inline元素不会独占一行，多个相邻的行内元素会排列在同一行，直到一行排列不下，其宽度会随元素的内容变化而变化。inline元素设置width以及height无效，inline元素的margin以及padding只在水平方向上起作用，竖直方向不会产生效果。

inline-block:简单的说就是将对象呈现为inline对象，但是对象的内容作为block对象呈现。之后的内联对象会排列在同一行。比如我们可以给一个link（a元素）inline-block属性值，使其既具有block的宽度高度特性有具有inline的同行特性。

此外，img、input等内联元素可以设置宽和高，因为对于元素本身来讲，可以分为替换元素和非替换元素，所谓替换元素就是浏览器根据元素的标签和属性，来决定元素具体显示内容。浏览器会根据img标签的src属性的值来读取图片的信息并显示出来。



#### 获取class为abc的div

```
document.querySelector('div.abc')
```



#### 页面布局实现左中右（左右300px，中间自适应）

- 浮动布局

  ```css
  .outDiv{
      width:100%;
      height:100px;
  }
  .left{
      width:300px;
      height:100px;
      float:left;
      background:red;
  }
  .right{
      width:300px;
      height:100px;
      float:right;
      background:blue
  }
  .center{
      background:yellow;
      height:100px;
  }
  ```

- flex布局解决

  ```css
  .outDiv{
      display:flex;
      width:100%;
  }
  .left{
      width:300px;
      background:red;
  }
  .center{
      flex:1;
      background:yellow;
  }
  .right{
      width:300px;
      background:blue;
  }
  ```

- 绝对定位

  ```css
  .outDiv{
      width:100%;
      height:100px;
      position:relative;
  }
  .left{
      position:absolute;
      left:0;
      background:red;
      height:100px;
      width:300px;
  }
  .center{
      position:absolute;
      left:300px;
      right:300px;
      background:yellow;
      height:100px;
  }
  .right{
      height:100px;
      position:absolute;
      right:0;
      width:300px;
      background:blue;
  }
  ```

- table

  ```css
  .outDiv{
      width:100%;
      height:100px;
      display:table;
  }
  .left{
      height：100px;
      display:table-cell;
      width:300px;
      background:red;
  }
  .center{
      display:table-cell;
      height:100px;
      background:yellow;
  }
  .right{
      display:table-cell;
      height:100px;
      background:blue;
      width:300px;
  }
  ```

- 网格布局

  ```css
  .outDiv{
      display:grid;
      width:100%;
      grid-template-rows:100px;
      grid-template-columns:300px auto 300px;
  }
  
  /*.container {
    grid-row-gap: 20px;
    grid-column-gap: 20px;
  }  网格布局设置间隙*/
  ```



#### 页面导入样式时，使用link和@import有什么区别？

来源：link属于XHTML标签，import时css提供的方式，link可以加载rss，而import只能加载css；

顺序：link是页面加载同时执行的，而import是在页面加载完成之后才会执行（所以容易导致样式闪烁）；

js控制的差别：当页面需要使用js控制dom改变样式值得时候，只能使用link标签，因为import不是js操作dom可以控制的，也不支持js操作dom控制。

link使html的标签，而@import是css提供的

页面被加载时，link会同时被加载，而@import引用的css会等到页面加载结束后加载

link是html的标签，因此没有兼容性，而@import只有IE5以上才能识别

link方式样式的权重高于@import的。



#### SCSS

SASS是一个css预处理器，有助于减少css的重复，节省时间。 它是更稳定和强大的CSS扩展语言，描述文档的样式干净和结构。



##### 为什么要使用sass？

- 为css提供了缩进语法。
- 允许更有效地编写代码和易于维护。
- 包含css的所有功能的css超集。
- 提供比平面css更好的结构格式和文档样式。

SCSS是CSS语法的扩展，更容易地维护大型样式库



#### 用一个div模拟textarea

```css
div{
    -webkit-user-modify: read-write-plaintext-only;
    word-break:break-all;
}
```



#### 移动设备中页面忽略将数字识别为电话号的方法

```html
<meta name = "format-detection" content = "telephone=no"
```



## JavaScript

#### BOM（Browser Object Model）

window：js层级中的顶层对象，表示浏览器窗口；

Navigator：包含客户端浏览器的信息

History：包含浏览器窗口访问过的url

Location：包含当前url的信息

Screen：包含客户端显示屏的信息



#### DOM

创建新结点 createElement() createTextNode() createDocumentFragment()

添加、移除、替换、插入：appendChild() removeChild() replaceChild() insertBefore()

查找：getElementsByTagName() getElementsByName() getElementById()



#### 全局内置对象

数据封装类对象

- String、Array、Object、Boolean、Number

其他对象

- Math、Date、RegExp、Error、Function、Arguments

ES6新增对象

- Promise、Map、Set、Symbol、Proxy、Reflect



#### var、let以及const的区别？

- 全局声明的var变量会挂载到window上，而let和const不会；
- var声明的变量存在变量提升，let和const不会；
- let、const的作用范围是块级作用域，而var的作用范围是函数作用域；
- 同一作用域一下let和const声明前使用会存在暂时性死区；
- const：一旦申明必须赋值，不能使用null占位；声明后不能再修改，如果是复合类型的数据，可以修改其属性；可以使用Object.freeze(obj)是obj无法被修改。



#### ==与===

===就是判断两个值是否完全相等，类型不同就不等，三等就是严格相等；其中NaN!==NaN

==按照一定的规则进行转换：

如果一个是null，一个是undefined，那么相等；

如果一个是字符串，一个是数值，把字符串转换成数值再进行比较；

如果任一值为true，把它转成1再比较；任一值为false，把它转成0再比较；

如果一个是对象，另一个是数值或者字符串，把对象转换成基础类型再比较，调用valueOf或toString



#### call与apply的区别是什么？哪一个性能更好一点？

两者的参数有区别，call会将参数逐个传入，而apply将参数以数组的形式传入，其中第一个参数均为上下文context；

call的性能要比apply稍微好一些，尤其是参数大于三个的时候。

补充：bind：为一个函数绑定this，这一点与call和apply类似，



#### 实现(5).add(3).minus(2)

```js
~ function(){
    function check(num){
        num=Number(num);
        return isNaN(num)?0:num
    }
    function add(num){
        num=check(num)
        return this+num
    }
    function minus(num){
        num=check(num)
        return this-num
    }
    ['add','minus'].forEach(item=>{
        Number.prototype.item=eval(item)
    })
}();//立即运行 可以使用var x=function(){}()代替
(5).add(3).minus(2)
```



#### 箭头函数与普通函数的区别是什么？构造函数可以使用new生成实例，那么箭头函数可以吗？为什么？

箭头和普通函数的区别

1.箭头函数语法上比普通函数上更加简明(ES6中每一种函数都可以使用形参和剩余运算符)

```js
function fn(x){
    return function(y){
        return x+y
    }
}
let fn=x=>y=>x+y;
```

2.箭头函数没有自己的this，它里面出现的this是继承于函数所属上下文的this(使用call或者apply等任何方法也无法改变this的指向)。此外，回调函数中的this一般都是window。

回调函数：把一个函数B作为参数传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次）

```js
function each(arr,callBack){
    for(let i=0;i<arr.length;i++){
        let flag=callBack.call(arr,arr[i],i)
        if(flag===false){
            break;
        }
    }
}
each([10,20,30,40],function(item,index){
    //=>this:原始操作数组
    if(index>1){
        return false
    }
})
```

3.箭头函数中没有arguments（类数组），只能基于...arg获取传递的参数集合（数组）

```js
let fn=(...arg)=>{
    //console.log(arguments) Uncaught ReferenceError:arguments is not defined
    console.log(arg)
}
fn(10,20,30);
```

4.箭头函数不能被new执行，箭头函数没有prototype也没有this，所以没法创建实例



#### 什么是函数节流？什么是函数防抖？

函数节流：一个函数执行一次后，只有大于设定的执行周期后才能执行第二次

有一个需要频繁触发函数，处于优化性能，在规定时间内，只让函数触发的第一次生效，后面不生效。

```js
function throttle(fn,delay){
    var lastTime=0;
    return function(){
        var nowTime=Date.now();
        if(nowTime-lastTime>delay){
            fn.call(this);
            lastTime=nowTime;
        }
    }
}
```

函数防抖：一个需要频繁触发的函数，在规定的时间内，只让最后一次生效，前面的不生效

```js
function debounce(fn,delay){
    var timer=null;
    return function(){
        clearTimeout(timer);
        timer=setTimeout(function(){
            fn.apply(this)
        },delay)
    }
}
```



#### 什么是跨域？解决跨域的办法有哪些？

1.同源策略：浏览器的安全策略，限制从一个源加载的文档和另一个源的资源进行交互，协议名、域名以及端口号必须完全一致 

2.跨域：违背同源策略就会产生跨域

3.解决跨域：jsonp cors服务器代理

##### JSONP

```js
var script=document.createELement('script');//创建script标签
function getData(data){
    console.log(data)//数据请求回来会触发的函数
}
script.src='http://localhost:3000?callback=getData';//设置script的src属性
document.body.appendChild(script);//让script生效
```

jsonp的缺点：

- 只支持get，不支持post以及其他类型
- 调用失败时，不会返回各种http状态码
- 安全性不好，如果jsonp的服务存在页面注入漏洞，所以在使用jsonp时必须保证jsonp服务的安全可信。


##### CORS

整个CORS通信过程是浏览器自动完成，不需要用户参与，浏览器发现ajax请求跨域，就会自动添加头部信息；

两种请求：浏览器将cors请求分成两类，简单请求和非简单请求

满足以下两大条件，就是简单请求：

1）请求方法是以下三种之一：HEAD GET POST

2）HTTP的头信息不超出以下几种字段：

Accept Accept-Language Content-Language Last-Event-ID

Content-Type：只限三种值application/x-www-form-urlencoded、multipart/form-data、text-plain

凡是不满足以上两个条件，就属于非简单请求，浏览器对这两种请求是不一样的

简单请求：

对于简单请求，浏览器直接发出CORS请求，具体地说就是在头信息中增加一个Origin字段，Origin字段说明本次请求来自于哪个源，服务器根据这个值，决定是否同意此次请求。

非简单请求：

预检请求：非简单请求是对服务器有要求的请求，比如PUT或DELETE，或者Content-Type字段的类型为application/json

非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为预检请求

浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些http动词和头信息字段，只有得到肯定答复才会正式发出XMLHttpRequest请求，否则就报错。

补充：CORS涉及的请求头：Origin Access-Control-Request-Method Access-Control-Request-Headers(后两个在使用Option方法时使用)；Access-Control-Allow-Origin Access-Control-Allow-Method()

##### Hash 

场景是当前页面A 通用iframe或者frame嵌入了跨域页面B

```js
let B=document.getElementsByTagName('iframe');
B.src=B.src+'#'+'data';
window.onhashchange=function(){
    let data=window.location.hash
}
```

##### postMessage 

场景与Hash一样

```js
Bwindow.postMessage('data','http://B.com')
window.addEventListener('message',function(event){
    console.log(event.origin,event.source,event.data)
},false)
```

##### webSocket

```js
let ws=new WebSocket('wss://echo.websocket.org');
ws.onopen=function(evt){
    console.log('Connect open...')
    ws.send('Hello, WebSocket!')
}
ws.onMessage=function(evt){
    console.log('Received Message'+evt.data);
    ws.close();
}
ws.onclose=function(evt){
    console.log('Connection closed')
}

```

##### document.domain

该方式只能用于二级域名相同的情况下，比如a.test.com和b.test.com；只要给页面添加document.domain='test.com'标识二级域名就可以实现跨域。



#### 前后端如何通信

- ajax

ajax的创建：

```js
let xhr=XMLHttpRequest?new XMLHttpRequest():new window.ActiveObject('Microsoft.XMLHTTP');
xhr.open('请求方式','url');
xhr.setRequestHeader('Content-Type',"application/x-www-form-urlencoded");
//get方法直接在url中拼接，post的参数在send中设置
xhr.send('username='+name);
xhr.onreadystatechange=function(){
    if(xhr.status==200&&xhr.readyState==4){
        console.log(xhr.responseText);
    }
}
//readyState取值
//0.未初始化 1.已调用send，正在发送请求 2.载入完成 3.正在解析 4.解析完成
```

- websocket
- CORS(Cross Origin Resource Sharing)



#### ajax、fecth、axios的区别与优缺点

ajax：原生支持，不需要插件，可以局部更新；但可能会破坏浏览器回退功能，嵌套调用，难以处理；写法见上；

fetch：兼容性并不好

```js
fetch("url").then(res=>{
    console.log(res)
})

fetch("url",{
    method:'post',
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    body:new URLSearchParams([["username":"Lan"],["password","123456"]]).toString()
}).then(res=>{
    console.log(res)
})
```

fetch发送请求时，与xhr不同的是，fetch默认是不带cookie的，credentials:'include'，可将cookie带上；fetch可以解决回调地狱的问题，使用起来更加简洁，但是api偏底层，需要封装且浏览器兼容状况不好。

axios是对原生xhr的一种封装

```js
axios({
    method:'post',
    url:'/abc/login',
    data:{
        username:'Lan',
        password:'123456'
    }
}).then(res=>{
    console.log(res);
}).catch(err=>{
    console.log(err);
})
```



#### 什么是闭包？

1. 闭包就是能够读取其他函数内部变量的函数，就是将函数内部和外部连接起来的一座桥梁；闭包还可以让函数内部的值始终保持在内存中；

3. 闭包形成的条件：

函数嵌套，内部函数引用外部函数的局部变量

```js
function fun(){
    var count=1;
    return function(){
        count++;
        console.log(count)
    }
}
var f=fun();
f(); 
```

闭包的优点：延长了外部函数局部变量的生命周期，避免了全局变量的污染；

闭包的缺点：容易造成内存泄漏，常驻内存、增加内存的使用量；

注意点：合理的使用闭包，用完闭包要及时清除

闭包就是能够读取其他函数内部变量的函数，或者子函数在外调用，子函数所在的父函数的作用域不会被释放。



#### 创建对象的方法

```js
let o1={name:'o1'}
let o11=new Object({name:'o11'})

let M=function(){this.name="o2"}
let o2=new M();

let P={name:'o3'};
let o3=Object.create(P);
```



#### 作用域链

作用域就是变量与函数的可访问范围，即作用域控制着变量和函数的可见性和生命周期；

当声明一个函数时，局部作用域一级一级的包起来，就是作用域链；

当代码在一个环境中执行时，就会创建变量对象的一个作用域链，这个作用域链保证了执行环境对有权访问的变量和函数的有序访问

作用域链是向上访问的，它的最前端是当前执行环境的变量对象，接着向上访问，是其包含环境（外部环境）的变量对象，以此访问下去，最后是全局环境的变量对象。

实际上，作用域链本质上是一个指向变量对象的指针列表，它只引用而不包含实际变量对象。



#### 原型链

![img](http://oscimg.oschina.net/oscnet/b357bf9d484f85ac0bb9c006963ca42400d.jpg)

注意：Function自身也是function，它的__proto__指向Function.prototype

#### 变量提升（预处理）

```js
console.log(username)//undefined
var username;
fun();//正常执行函数
function(){
    console.log('fun()');
}
```

js引擎在代码正式执行之前会做一个预处理工作；收集变量和函数



#### 执行上下文（execute context）

也就是代码执行的环境，代码在正式执行之前会进入到执行的环境；

工作流程：1.创建变量对象：1）变量 2）函数以及函数的参数

​					2.确认this的指向，全局：this->window    2）局部：this->调用的对象

​					3.创建作用域链，父级作用域链+当前的变量对象

函数加括号调用，则this指向window

```js
function fun1(fn){
    //this 此处的this指向global|window
    arguments[0](3,4);
}
function fun2(){
    //this 此处this指向fun1中的arguments，因为在fun1中调用arguments[0]
    alert(this.length)
}
fun1(fun2,5,6,7,8);//5
```

规则1：函数直接用圆括号运行，上下文是window对象。fn() 上下文是window

规则2：对象打点调用函数，上下文是这个对象。obj.fn() 上下文是这个obj

规则3：数组中枚举出函数，上下文是这个数组。

规则4：定时器调用函数，上下文是window。

规则5：被当做了事件处理函数，上下文是触发事件的DOM元素。

规则6：用new调用函数，上下文是函数体内秘密创建的空白对象。

用new创建函数会经过四步：1)秘密创建空对象  2）将this绑定到这个空对象中 3）执行语句  4）返回这个对象

规则7：用apply、call绑定执行上下文

```js
function Foo(){
    function getName(){
        alert(1)
    }
    return this;
}
Foo.prototype.getName=function(){
    alert(3)
}
function getName(){
    alert(2)
}
Foo().getName()//2
new Foo().getName()// 3
```

函数的length是形参的length，arguments的length是实参的length。

arguments.callee表示函数本身。



#### 基础点

只要协议、域名、端口有任何一个不同，就会被当作是不同的域

hasOwnProperty只能判断一个对象是否有指定名称的属性，不能判断出原型链上是否有；

检测一个js对象是否是Array,arr为要判断的对象，Object.prototype.toString.call(arr)|Array.isArray(arr)

js检测一个object是否为{}的方法，JSON.stringify(obj)=="{}"

new Array(10).forEach(()=>{});forEach不会被执行，因为Array中元素为空时会跳过执行回调函数。

Promise有三个状态，pending、fulfilled、rejected。

typeof可以判断出string,number,boolean,undefined,symbol,object,function,bigint; 8种

instanceof原理是构造函数的prototype属性是否出现在对象的原型链中的任何位置；

JSON.parse(JSON.stringify())可以实现深拷贝

数组去重的方法：

1.使用Set:let arr2=[...new Set(arr)];

2.使用forEach或者reduce进行遍历；

3.使用filter进行过滤，利用indexOf返回的位置与index进行对比；

4.利用Object进行去重，时间复杂度为O(n)

JSON.stringify()会将undefined值丢弃

typeof Object //function

变量>函数>参数>提升



#### DOM事件

##### DOM事件类：

DOM0 element.onclick=function(){}

DOM2 element.addEventListener('click',function(){},false)//true表示捕获过程触发，false表示冒泡过程触发。

DOM3 element.addEventListener('keyup',function(){},false)

DOM3在DOM2的基础上添加了：load scroll blur focus mousewheel textinput keydown keypress等

##### 事件模型

捕获：从上往下

冒泡：从下往上

##### 事件流

事件通过捕获到达目标，目标向上冒泡

三个阶段：捕获阶段、目标阶段以及冒泡阶段

##### 描述DOM事件捕获的具体流程

window->document->html->body->...->目标元素

##### event对象常见应用

event.preventDefault();//阻止默认行为

event.stopPropagation();//阻止冒泡行为

event.cancelBubble();//IE 阻止冒泡行为

event.stopImmediatePropagation();//作用在当前节点，停止当前节点的事件以及冒泡

event.currentTarget;//事件绑定的元素

event.target;//触发事件的元素

target和currentTarget在没有冒泡的情况下是一样的，但是用了事件委托的情况下就不一样了。

```html
<ul id="ulT">
    <li class='item1'></li>
    <li class='item2'></li>
    <li class='item3'></li>
</ul>
<script>
	document.getElementById('ulT').onclick=function(e){
        console.log(e.target);//<li class='item3'></li>
        console.log(e.currentTargte);//<ul id='ulT'></ul>
    }
</script>
```

##### 自定义事件

```js
let eve=new Event('custome');
el.addEventListener('custome',function(){
    console.log('custome')
})
el.dispatchEvent(eve);
```



#### 事件委托

我们可以将监听器添加到父元素上，来避免监听每个子元素。利用事件冒泡，当事件冒泡到父元素上，我们可以使用event.target来检测是那个元素出发了响应事件。

event.target||event.srcElement		



#### 网页图片的懒加载

1.图片懒加载是前端性能优化的重要方法，通过图片或者数据的延时加载，我们可以加快页面渲染的速度，让第一次打开页面的速度边框；只有滑动到某个区域，我们才加载真实的图片，这样可以节省加载的流量。

2.处理方案：把所有需要延迟加载的图片用一个盒子包起来，设置宽高和默认占位图；开始让所有的src为空，把真实的图片地址放到img的自定义属性上，让img隐藏，等到其他所有资源加载完成后，我们再加载图片，对于很多图片，需要当页面滚动的时候，当前图片区域完全显示出来后再加载真实图片。



#### if语句求值使用eval函数

```js
let y=1;
if(function f(){}){
    y+=typeof f;	
}
console.log(y); //1undefined
```

JavaScript中if求值语句使用eval函数，eval(function f(){})返回function(){}，也就是true。

delete操作符只能将对象中的属性删除，如何删除的不是对象的属性，那么delete操作符就不会生效。如过属性是通过原型链继承的也是无法delete的。

Boolean+Number->加法

Boolean+Boolean->加法

Number+String->连接

String+Boolean->连接



#### js为什么是单线程

这与js的用途有关，作为浏览器脚本语言，js主要用途就是与用户交互以及操作DOM，这决定它只能是单线程，如果是多线程，一个线程在DOM节点上添加内容，另一个线程删除这个节点，这是浏览器应该以哪个线程为准。为了利用多核CPU的计算能力，H5允许js创建多个线程，但是子线程受主线程控制，且不得操作DOM。所以，这个新特性并没有改变js单线程的本质。



#### 函数返回值问题

每个函数都有返回值，使用了return的话，则返回return后面跟的值，如果没有使用return，则默认返回undefined。特别的，如果这个函数是构造函数，则默认返回this对象，如果构造函数内使用了return语句，并且return后面跟的是一个对象，则这个构造函数的返回值是这个对象，否则返回的是this。



#### Promise

Promise解决了回调地狱，对异步任务写法更标准化与简洁化

但无法取消Promise，一旦新建就会立即执行，无法中途取消；Promise内部抛出错误，不会反应到外部，在pending状态时，无法得知目前进展到哪一阶段。

```js
function MyPromise(exactor){
    let self=this;
    this.status="pending";
    let value=undefined;
    let reason=undefined;
    this.onFulfilledCallbacks=[];
    this.onRejectedCallbacks=[];
    function resolve(value){
        if(self.status==='pending'){
            self.value=value;
            self.status="resolved";
            self.onFulfilledCallbacks.map(fn=>fn())
        }
    }
    function reject(reason){
        if(self.status==="pending"){
            self.reason=reason;
            self.status="rejected";
            self.onRejectedCallbacks.map(fn=>fn())
        }
    }
    function then(onFullfilled,onRejected){
        if(!onFullfilled){
            onFullfilled=y=>y;
        }
        if(!onRejected){
            onRejected=function(){}
        }
        if(self.status==="pending"){
            self.onFulfilledCallbacks.push(()=>{
                onFullfilled(self.value)
            })
            self.onRejectedCallbacks.push(()=>{
                onRejected(self.reason)
            })
        }
        if(this.status==="resolved"){
            onFullfilled(self.value)
        }
        if(this.status==="rejected"){
            onRejected(self.reason)
        }
    }
    try{
        exactor(resolve,reject)
    }catch(e){
        reject(e)
    }
}
//并行max个
MyPromise.myAll=function(promiseArr,max){
    max=max>promiseArr.length?promiseArr.length:max;
    let index=0;
    let complete=0;
    let result=[];
    return new Promise((resolve,reject)=>{
        function run(i) {
            promiseArr[i].then(value => {
                result[i]=value;
                complete++;
                // console.log(complete)
                if(complete===promiseArr.length){
                    resolve(result)
                }
                if(index<promiseArr.length){
                    run(index++);
                }
            }).catch((err)=>{
                reject(err);
            })
        }
        for(let i=0;i<max;i++){
            run(index++)
        }
    })
}
promise=new MyPromise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5){
            resolve("成功")
        }else {
            reject("失败")
        }
    },1000)
}).then((val)=>{
    console.log(val)
},(reason)=>{
    console.log(reason)
})

MyPromise.all=function(promiseArr){
    let flag=0;
    return new MyPromise((resolve,reject)=>{
        let result=[];
        promiseArr.forEach((promise,index)=>{
            promise.then((val)=>{
                flag++;
                result[index]=val;
                if(flag===promiseArr.length){
                    resolve(result)
                }
            },reject)
        })
    })
}
MyPromise.race(promiseArr){
    return new MyPromise((resolve,reject)=>{
        promiseArr.forEach(promise=>{
            promise.then(value)=>{
                resolve(value)
            },reject);
        })
    })
}
```

#### Promise/async/await的执行顺序

```js
console.log('script start');

async function async1(){
    await async2();
    console.log('async1 end');
}

async function async2(){
    console.log('async2 end');
}

async1();

setTimeout(function(){
    console.log('Promise')
},0);

new Promise(resolve=>{
    console.log('Promise');
    resolve();
}).then(function(){
    console.log('promise1')
}).then(function(){
    console.log('promise2');
})

console.log('script end');

/**
 * sctipt start
 * async2 end
 * Promise
 * script end
 * async1 end
 * promise1
 * promise2
 * setTimeout
 */
```

遇到setTimeout，将输出放入下一轮宏任务队列；

遇到Promise对象，立即执行其函数，输出Promise，其后的resolve被放到了微任务队列；

宏任务执行完之后，执行微任务	



#### generator-async

async=generator+自动执行器

```js
function sleep(a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(a);
            resolve(a)
        },2000)
    })
}
function *foo(){
    console.log('a');
    let result=yield sleep('b');
    console.log('c')
}
function run(g){
    let res=g.next();
    if(!res.done){
        if(res.value.then){
            res.value.then(()=>{
                run(g)
            })
        }else{
            run(g);
        }
    }
}
run(foo());
```

补充：一个函数如果加上async就会返回一个Promise



#### Proxy

Proxy可以理解成在目标对象前设置一层拦截，外界对该对象的访问，都必须先通过这层拦截，可以对外界的访问进行过滤和改写，Proxy这个词的原意就是代理，用在这里表示它来代理某些操作，可译为代理器

Proxy支持的拦截有十三种：

get(target,propKey,receiver):拦截对象读取属性

set(target,propKey,value,receiver):拦截对象属性的设置

has(target,propKey):拦截propKey in proxy的操作，返回一个布尔值

deleteProperty(target,propKey):拦截delete proxy[propKey]操作，返回布尔值等等；



#### Set、Map、WeakSet和WeakMap的区别

Set:

方法：add(value) delete(value) has(value) clear(value) keys() values() entries() forEach()

成员的值唯一，没有重复；

可以接受一个数组（迭代的数据结构）作为参数；

而WeakSet与Set类似，但成员只能是对象，WeakSet中对象是弱引用（其他对象都不再引用该引用，垃圾回收机制将会清除该内存块）；WeakSet不可以遍历，它的成员是还取决于垃圾回收机制有没有运行，所以成员数不定；没有clear方法。

Map:

类似于对象，也是键值对的集合，但键值不限于字符串，各种类型均可，包括字符串。

方法：keys() values() entries() forEach()

WeakMap是在你想往对象上添加数据，又不想干扰垃圾回收机制，就可以使用。



#### 手写实现bind

```js
Function.prototype.bind=function(){
    let self=this;
    let context=Array.prototype.shift.call(arguments);
    let arg=Array.prototype.slice.call(arguments);
    return function(){
        self.apply(context,
                  Array.prototype.concat.call(arg,Array.prototype.slice.call(arguments)))
    }
}
```



#### 手写实现apply

```js
Function.prototype.apply=function(context){
    context=context||window;
    context.fn=this;
    let result;
    if(arguments[1]){
        result=context.fn(...arguments[1])
    }else{
        result=context.fn();
    }
    delete context.fn;
    return result;
}
//call函数仅仅在参数处理上有一点不同
```



#### 手写一个new

```js
let New=function(P){
    let o={};
    let arg=Array.prototype.slice(arguments,1);
    o.__proto__=P.prototype;
    P.prototype.constructor=P;
    P.apply(o,arg);
    return o;
}
```



#### 手动实现map、filter

```js
Array.prototype.myMap=function(){
    let arr=this;
    let fn=arguments[0];
    for(let i=0;i<arr.length;i++){
        arr[i]=fn(arr[i],i,arr)
    }
    return arr;
}//filter every reduce等类似

Array.prototype.myMap=function(callback){
    this.reduce((pre,cur,index)=>{
        pre.push(callback(cur));
        return pre;
    },[])
}

Array.prototype.MyFilter=function(callback){
   return this.reduce((pre,cur,index)=>{
       if(callback(cur)){
           pre.push(cur)
       }
       return pre;
   },[])
}
```



#### 数组的方法

pop() push() shift() unshift() splice() reverse() sort() fill() copyWithin()(在数组内部，将一段元素拷贝到另一段元素上，参数为target start end)

join() slice() concat() includes() indexOf() lastIndexOf() toString() toLocaleString()

forEach() map() reduce() filter() every() some() find() findIndex() keys()



#### 字符串常用的方法

split() slice() substr(start,len) substring(start,end) trim() concat() match() replace() search()



#### 实现一个sleep函数

```js
//使用promise
function sleep(time){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },time)
    });
}
async function test(){
    console.log(111);
    await sleep(2000);
    console.log(222)
}
//阻塞2秒
function sleep(time){
    let start=new Date().getTime();
    while(new Date().getTime()-start<time){
        continue;
    }
}

```



#### 几个很实用的BOM属性对象方法

BOM是浏览器对象

location对象

- location.href——返回或设置当前文档的url
- location.search——返回url中的查询字符串部分（返回?后面的内容）
- location.hash——返回url#后面的内容，没有#则返回空
- location.host——返回www.dreamdu.com
- 此外还有hostname pathname port protocol assign 等

history对象

- history.go()——前进或后退指定的页面数 history.go(num)
- history.back()——后退一页
- history.forward()——前进一页

Navigator对象

navigator.userAgent——返回用户代理头的字符串表示(就是包括浏览器版本信息等的字符串)

navigator.cookieEnabled——返回浏览器是否支持cookie



#### 面向对象的继承方法

```js
/*借助构造函数实现继承，这是一种不完全继承，不能继承Parent的prototype中的属性*/
function Parent(){
    this.name='parent'
}
function Child(){
    Parent.call(this);
    this.type='child'
};

/*借助原型链实现继承*/
//缺点：因为子类只进行了一次原型更改，所以子类的所有实例保存的是同一个父类的值
function Parent(){
    this.name="parent"
}
function Child(){
    this.type='child'
}
Child.prototype=new Parent();

/*组合继承*/
function Parent(){
    this.name='parent';
    this.play=[1,2,3];
}
function Child(){
    Parent.call(this);
    this.type='child';
}
Child.prototype=Object.create(Parent.prototype);
Child.prototype.constructor=Child;

```



#### 私有方法私有属性

一种做法是在命名上加以区别，在函数名和属性名之前加_，这是不安全的，只是一种团队规范；

另一种将私有方法移出类，放到模块里

```js
class Widget{
    foo(baz){
        bar.call(this,baz);
    }
    //...
}
function bar(baz){
    return this.snaf=baz;
}
```

上述代码中，foo是公开方法，内部调用了bar.call(this,baz)，这使得bar实际上成为了当前模块的私有方法。

还有一种就是将类定义在另一个文件中，私有属性通过Symbol来定义，在别的文件中永远无法创建一个相同的Symbol，所以也就无法调用这个属性了。



#### ES5/ES6的继承除了写法以外还有什么区别？

class声明会提升，但不会初始化赋值。

class的所有方法都是不可枚举的。

class的所有方法都没有原型对象，不能用new调用；

必须使用new调用class。



#### typeof返回的类型

boolean undefined string number symbol object bigint function

```js
var a=1,b=2,c=3;
var val=typeof a+b||c>0;
console.log(val)//number2  typeof a先执行

typeof typeof 4+4//string4
```



#### for in与for of

for in适合遍历对象，for in有可能不是按照实际数组的内部顺序，for in会遍历数组上所有的可枚举属性，包括原型，所以for in更适合遍历对象

for of遍历的只是数组内的元素，不包括数组的原型属性和索引



#### 遍历对象的方法

for...in...//可便利原型链上的属性

Object.keys(obj)

Object.getOwnPropertyNames(obj)

Object.getOwnPropertySymbols(obj)

Reflect.ownKeys(obj)

Reflect.enumerate(obj)



#### js垃圾回收机制

垃圾回收器会按照固定的时间间隔周期性执行。

JS最常见的垃圾回收方式是标记清除。

工作原理：当变量进入环境时，将这个变量标记为“进入环境”，当变量离开环境时，则将其标记为“离开环境”

引用计数方式

工作原理：跟踪记录每个值被引用的次数。

什么情况会引起内存泄漏：虽然有垃圾回收机制但是我们编写的代码操作不当还是会造成内存泄露；意外的全局变量会造成内存泄露，全局变量不会被回收；闭包会引起内存泄露，闭包可以维持函数内局部变量；没有清理的DOM元素引用；被遗忘的定时器；



#### 后端传送给前端一个特别大的值怎么解决？

让后端传送给前端一个String

使用fastjson提供的注解，@JSONField(serializeUsing=ToStringSerializer.class)



#### 事件订阅发布EventEmitter

EventEmitter是对事件触发和事件监听功能的封装，在node中的event模块中，event模块只有一个对象EventEmitter，下面是一个最基本的使用方法：

```js
let EventEmitter=require('events').EventEmitter;
let event=new EventEmitter();
event.on('some_event',function(){
    console.log('some_event事件触发')
})
setTimeout(()=>{
    event.emit('some_event')
},1000)
```

EventEmitter支持的方法

emitter.on(name,f) //对事件name指定监听事件f

emitter.once(name,f)  //与on类似，但是监听函数f是一次性的，使用后自动移除

emitter.listeners(name) //返回一个数组，成员是事件name所有监听函数

emitter.remove(name,f) //移除事件name的监听函数f

emitter.removeAll(name) //移除事件name的多有监听事件

自定义EventEmitter

```js
function EventEmitter(){
    this._events={}
}
EventEmitter.prototype.on=EventEmitter.prototype.addListener=function(type,listener){
    if(this._events[type]){
        this._events[type].push(listener)
    }else{
        this._events[type]=[listener];
    }
};
EventEmitter.prototype.once=function(type,listener){
    function callOnce(){
        listener.apply(this,arguments);
        this.removeListener(type,callOnce);
    }
    this.on(type,callOnce);
}
EventEmitter.prototype.emit=function(type){
    let callbacks=this._events[type];
    let args=Array.prototype.slice.call(arguments,1);
    let self=this;
    callbacks.forEach((callback)=>{
        callback.apply(self,args)
    })
}
EventEmitter.prototype.removeListener=function(type,listener){
    if(this._events[type]){
        let listeners=this._events[type];
        for(let i=0;i<listeners.length;i++){
            if(listeners[i]===listener){
                listeners.splice(i,1);
                return;
            }
        }
    }
}
```



#### 页面性能优化的方法

客户端：减少http请求次数，减少DNS查询次数，延迟加载，提前加载，减少DOM元素数量

CDN：内容分发网络；

资源合并并压缩；

样式表置顶，js脚本置底；

图片：优化图像、图片懒加载；

非核心代码异步加载：async defer异步加载js

DOM操作优化：避免在document上进行频繁的DOM操作，可以用className代替大量的内联样式，对于复杂的UI元素，设置position位absolute或者fixed，尽量使用css动画。



#### defer和async的区别

- 前者要等到整个页面正常渲染结束才会执行，而后者一旦下载完，渲染引擎就会中断渲染去执行下载完的脚本，然后再继续去渲染。总之，就是defer是渲染完了再去执行脚本，而async是下载完就会去执行。
- 如果有多个defer脚本，他会按照顺序去加载，而多个async脚本是不能保证顺序加载的。



#### hash模式和history模式

hash模式的原理是onhashchange事件，可以通过window对象监听事件，在hash模式下，当url发生变化时，浏览器会记录下来，因此前进后退按钮都可以使用

history.go(-2);history.back();history.forward()

在该模式下，浏览器并没有请求服务器，页面也会和url一一对应，故被称为前端路由

history模式：hash只能改变#后面的内容，而history是完全自由的，history api可分为两大部分，切换历史状态的back、forward、go；还有就是修改历史状态，包括pushState和replaceState，参数为stateObj,title,url，pushState把页面的状态保存在State对象中，当页面url再变回这个url时，可以通过event.state获取这个state。

通过window.addEventListener('popstate',function(){})去监听		

比较：

Hash模式只可以更改#后面的内容，History模式可以通过API设置任意的同源URL；

History模式可以痛过api添加任意类型的数据到历史记录中，Hash只能更改hash值，也就是字符串；

Hash模式无需后端配置，并且兼容性好，History模式在用户手动输入地址或者刷新页面的时候会发送url请求，后端需要配置index.html页面用于匹配不到静态资源的时候。



#### 页面监控，错误处理和性能信息，onerror用法

页面监控：web端数据监控，包括页面打开速度、页面稳定性和外部服务调用成功率三个方面监测web页面的健康度；

页面稳定性：js代码异常捕获；

单点捕获：在可能发生异常的地方，写上try catch；

全局捕获：window.onerror；

chrome提供了一个大而全的性能测试工具Audits，会对性能、体验、SEO都给出相应的分数；此外还有一个performance工具可以使用，可以看到每个时间段中浏览器在处理什么事情，哪个过程最消耗时间。

![1582014450155](C:\Users\23876\AppData\Roaming\Typora\typora-user-images\1582014450155.png)



#### 浏览器渲染过程

1. 解析HTML，得到一个DOM tree；
2. 解析CSS，得到一个CSSOM tree；
3. 将DOM tree与CSS tree整合成渲染树render tree；
4. 布局，根据render tree计算每个节点的位置大小等信息；
5. 绘制，根据计算好的信息绘制整个页面

1、2、3非常快，但是4、5比较慢；

”重排“和”回流“指的是重新执行步骤4，”重绘“指的是执行步骤5

![img](https://upload-images.jianshu.io/upload_images/3534846-00ef9f3d405462ef.png?imageMogr2/auto-orient/strip|imageView2/2/w/624/format/webp)





#### CommonJS和ES6模块化

- CommonJS模块输出的是一个值的拷贝，而ES6输出的是值的引用；
- CommonJS模块是运行时加载，ES6模块是编译时输出的接口；



#### 代码执行结果

```js
//1
(function(){
    var a=b=100;
})();
console.log(a);//undefined
console.log(b);//100

//2
null instanceof Object//false
{}=={}//false
[]==[]//false

//3
function Foo(){
    getName=function(){alert(1)}
    return this;
}
Foo.getName=function(){
    alert(2);
}
Foo.prototype.getName=function(){alert(3)}
var getName=function(){alert(4)}
function getName(){alert(5)}

Foo.getName(); //2
getName();  //4
Foo().getName(); //1
getName(); //1
new Foo().getName() //3

//4
var name = 'tom';
function getMethod() {
    var result = function () {
        return name;
    };
    var name = 'jerry';
    return result;
}
var getName = getMethod();
var name1 = getName();//jerry

//5
function Person() {};
var person1 = new Person();
var person2 = new Person();
Person.prototype.getName = function () {
    return this.name;
};
Person.prototype.name = 'tom';
person1.name = 'jerry';
console.log(Person.prototype)
var name = person2.getName();
console.log(name);//tom

//6
function A(name) {
  this.name = name || 'Tom'
  this.msg = "use 'this.' set in function"
}
function B() {};
B.prototype = A;
var b = new B();
console.log(b.name);//A
console.log(b.msg);//undefined
//若将B.prototype=new A(); b.name='Tom'

//7
function func() {
  function a () {
    console.log(b)
  }
  a();
  const b = 'bbb'
}
func()//ReferenceError: Cannot access 'b' before initialization

//8
function wait() {
  return new Promise(resolve =>
  	setTimeout(resolve,  1000)
  )
}

async function main() {
  console.time();
  const x = wait();
  const y = wait();
  const z = wait();
  await x;
  await y;
  await z;
  console.timeEnd();
}
main();
//执行时间为一秒多一点点，三个wait函数在赋值时已经开始执行了，如果在wait前加上await，则需要三秒多一点点

//9
var b = 10;
var c = function b() {
  b = 20;
  console.log(b)
}
c();
/*
ƒ b() {
  b = 20;
  console.log(b)
}*/
```



## webpack

#### webpack的打包流程，webpack中treeshaking原理，多页打包配置

#### TreeShaking

treeShaking可以实现删除项目中未被引用的代码；减少无用的代码，从而优化前端等待的时间。

原理：找到代码中真正使用的代码，打包进去，剔除没有用的代码。



#### devServer

```js
devServer:{
    contentBasr:pathlib.resolve('static'),
    port:8090,
    hot:true,
}
```



#### 有哪些常见的Loader？

file-loader：把文件输出到一个文件夹中，在代码中通过相对url去引用输出的文件

url-loader：和file-loader类似；

source-map-loader：加载额外的Source Map文件

image-loader：加载并压缩图片文件

babel-loader：把ES6转成ES5

css-loader：加载css，支持模块化、压缩、文件导入等特性

style-loader：把css代码注入到JS中，通过DOM操作加载CSS



#### 常见的plugin？

define-plugin：定义环境变量

commons-chunk-plugin：提取公共代码

uglifyjs-webpack-plugin：通过UglifyES压缩ES6代码



#### Loader与Plugin的不同？

Loader：Webpack将一切文件视为模块，但是webpack原生是只能解析js文件，如果想将其他文件打包的话，就需要用到loader。所以Loader的作用就是让webpack拥有了加载和解析非javaScript文件的能力。

Plugin：可以扩展webpack的功能，让webpack具有更多的灵活性，在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的实际通过webpack提供的api改变输出结果。



## NodeJS

#### Nodejs特点

1.单线程：单线程的好处就是减少了内存开销、操作系统的内存换页。如果一个事件进入了，但是被I/O阻塞了，则这个线程就阻塞了。

2.非阻塞I/O，不会等I/O语句结束，而会直接执行后面等待的语句。

3.事件驱动

事件机制：不管是新用户的请求，还是老用户的I/O，都将以事件的形式加入时间环，等待调度。

Nodejs中所有的I/O都是异步的，回调函数套回调函数。



#### nodejs的使用场景

nodejs处理异步I/O的能力比较强，处理计算以及逻辑的能力比较弱，所以可以把复杂的逻辑运算在前端处理，而nodejs只需要提供异步IO，这样就可以实现高性能处理。

擅长I/O，不善于计算，因为Nodejs最擅长的就是任务调度。



#### Nodejs的缺点

- nodejs更新很快，可能出现版本兼容问题
- nodejs还不成熟
- nodejs对于不同的链接，不支持进程和线程操作



#### 什么是错误优先的回调函数？

错误优先的回调函数用于同时返回错误和数据，第一个参数是错误，并且验证它是否出错，如：

```js
fs.readFile(filePath,function(err,data){
    if(err){
        console.log(err);
    }else{
        cnsole.log(data);
    }
})
```



#### 如何避免回调地狱？

模块化：将回调函数转换为独立的函数

使用流程控制库

使用promise

使用async/await



#### 保证代码风格的工具

团队协作时，保证一致的代码风格是非常重要的，这样团队成员才能更快的修改代码，而不需要去适应新的风格：

ESLint  Starndard JSLint JSCS



#### Express和koa的区别？

Express主要基于Connect中间件框架，功能丰富，随取随用，并且框架自身封装了大量便利的功能，比如路由视图处理等等，而Koa主要基于co中间件框架，框架自身并没有集成太多功能，大部分功能需要用户自行require中间件去解决，但是由于其基于ES6 generator特性的中间件机制，解决了callback hell



#### Redis

使用场景：支持String list set zset以及hash类型数据

配合关系型数据库做高速缓存

缓存高频次访问的数据，降低数据库io

分布式架构，做session共享

可以持久化特定数据



#### mysql和mongodb的区别

mysql时关系型数据库而mongodb时非关系型数据库



#### Nodejs事件轮询

![img](https://images2015.cnblogs.com/blog/104032/201509/104032-20150917141055570-1948801510.png)

事件轮询是nodejs虽然是单线程，但是可以进行处理高并发，高吞吐量的核心，一个事件轮询拥有以下三个部分：

事件队列：这是一个FIFO模型的队列，一方面推入事件，另一方面推出事件

队列的读取轮询线程组件，也就是Event Loop

单独的线程池：用来执行长任务



#### 浏览器的Event-Loop

JS分为同步任务和异步任务；同步任务在主线程上执行，主线程外有一个事件触发线程管理一个任务队列，包括宏任务队列和微任务队列，只要异步任务有了结果，就会在任务队列放置一个事件。

事件循环中的异步队列有两种：macro（宏任务）队列和micro（微任务）队列。

常见的宏任务：script setTimeout setInterval setImmediate script I/O操作以及UI渲染

常见的微任务：process.nextTick new Promise().then()

js遇到一个异步事件会交给webapi（异步线程）进行处理任务，继续执行，异步事件处理完成后，javascript引擎将异步回调放入消息队列中。

![img](https://upload-images.jianshu.io/upload_images/15586502-25e3b2d71281a70b.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



## React

#### React的工作原理

React会创建一个虚拟DOM（Virtual DOM）。当一个组件中的状态改变时，React首先会通过diff算法来标记虚拟DOM的改变，第二部是调节，会用diff的结果来更新DOM



#### React怎样控制异步和同步

在React的setState函数实现中，会根据一个变量isBatchingUpdates判断是直接更新this.state还是放到队列中延时更新，而isBatchingUpdates默认是false，表示setState会同步更新this.state；
但是，有一个batchedUpdates，该函数会把isBatchingUpdates修改为true，而当React在调用事件处理函数之前就会调用这个batchedUpdates将isBatchingUpdates修改为true，这样由React控制的事件处理过程setState不会同步更新this.state。



#### React中keys的作用是什么？

keys是react中用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。

在开发过程中，需要保证某个元素的key在同级元素中具有唯一性。
在React Diff算法中react会借助元素的key来判断该元素是新近创建还是被移动而来的元素，从而减少不必要的元素重渲染。



#### 调用setState之后发生了什么？

调用setState之后，react会将传入的参数对象与组件当前的状态合并，然后触发调和过程。
根据新的状态构建react元素树并着手重新渲染UI界面。
得到新的元素树再与之前的树进行对比，根据差异进行最小化重渲染。

补充：setState是一个"异步"的过程，
所以说执行完setState之后不能立刻更改state里面的值，
如果需要对state数据更改监听，则需要使用setState的第二个参数，
就是用来监听state里买呢数据的更改，当更改完成则调用回调函数。
setState在setTimeout()以及addEventListener中是同步的，
因为脱离了React某些生命钩子的束缚。



#### react生命周期函数

初始化阶段：

getDefaultProps:获取实例的默认属性

getInitialState:获取每个实例的初始化过程

componentWillMount:组件即将被装载、渲染到页面上

render:组件再这里生成虚拟的DOM节点

componentDidMount:组件真正被装载之后

运行中状态:

componentWillReceiveProps:组件将要接收到属性时候调用

shouldComponentUpdate:组件接收到新属性或者新状态的时候（可以返回false，接收数据后不再更新，阻止render的调用，后面的函数不会被继续执行了）

componentWillUpdate:组件即将更新不能修改属性和状态

render:组件重新描绘

componentDidUpdate:组件已经更新

销毁阶段：

componentWillUnmount:组件即将销毁

![img](https://upload-images.jianshu.io/upload_images/11259201-dd8853db2e92505c.png?imageMogr2/auto-orient/strip|imageView2/2/w/740/format/webp)



#### React组件传值

父传子：父组件定义一个属性，子组件通过this.props接收；

子传父：父组件定义一个属性，并将一个回调函数赋值给定义的属性，
然后自组件进行调用传过来的函数，并将参数传进去，
在父组件的回调函数中即可获得自组件传过来的值。



#### 为什么虚拟dom会提高性能？

虚拟dom相当于再js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。

用js对象结构表示dom树的结构；然后用这个树构建一个真正的DOM树，插到文档中，当状态变更的时候，重新构造一棵新的对象树。然后用新的树与旧树进行对比，记录两者差异，然后对其中的差异进行更新。



#### render diff原理

把树形结构按照层级分解，只比较同级元素；如果出现跨层级的操作，就会重新创建节点和删除节点。

把列表结构的每个单元添加唯一的key属性，方便比较。

react只会匹配相同class的component（这里面的class指的是组件的名字）

合并操作，调用component的setState方法的时候，react将其标记为dirty，到每一个事件循环结束，react检查所有标记为dirty的component重新绘制。

选择性渲染，开发人员可以重写。shouldComponentUpdate提高diff的性能。

![å¨è¿éæå¥å¾çæè¿°](https://img-blog.csdnimg.cn/20190318153333528.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L01pY2hlbGxlWmhhaQ==,size_16,color_FFFFFF,t_70)



#### shouldComponentUpdate是做什么的（React性能优化是哪个周期函数）？

shouldComponentUpdate这个方法用来判断是否需要调用render方法重新描绘dom，因为dom的描绘是非常消耗性能的，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能。



#### React中refs的作用是什么？

refs是react提供给我们安全访问DOM元素或者某个组件实例的句柄，我们可以为元素添加ref属性，然后在回调函数中接收该元素在dom树中的句柄，该值作为回调函数的第一个参数返回：

```jsx
class CustomForm extends Component{
    handleSubmit=()=>{
        console.log("input value",this.input.value)
    }
    render(){
        return (
       		<View>
            	<Input type='text' ref={(input)=>this.input=input}/>
            </View> 
        )
    }
}
```

上述代码中的input中包含了ref属性，该属性声明的回调函数会接收input对应的DOM元素，我们将其绑定到this指针以便在其他的类函数中使用。另外值得一提的是，refs并不是类组件的专属，函数实组件同样可以利用闭包暂存其值。



#### 使用PureComponent

PureComponent内部帮我们实现了shouldComponentUpdate的比较，其他的和Component一样，但是shouldComponentUpdate进行的是一个浅比较；浅比较只是比较第一层的基本类型和引用类型值是否相同，如果数据结构复杂，那么可能会导致一些问题。



#### React函数组件和类组件的区别

- 函数组件没有this，而类组件有this
- 函数组件没有生命周期，而类组件有声生命周期
- 函数组件没有状态state



#### 高阶组件

高阶组件就是一个以组件为参数并返回一个新组件的函数。



#### Vue和React的区别？各自的优势？

React与Vue的不同在于模板编写：Vue鼓励编写近似常规的html的模板，只是多了一些属性；React则使用jsx，就是JavaScript混合着XML语法；vue数据绑定为双向的，而react是单向的。

其次就是react中的state与vue中的data属性

React的优点：

- 引入Virtual DOM，性能好，极大限度减少了DOM操作；
- 跨浏览器兼容性好；
- 一切都是component：代码更加模块化，重用代码更容易，可维护性好；

Vue优点：

- 性能高效；
- 双向数据绑定；



#### Hook

```jsx
import React,{useState,useEffect,createContext,useContext,useRef} from 'react';

const Text=createContext();
export default function Example(){
    const [count,setCount]=useState(0);
    const inputRef=useRef();
    useEffect(()=>{
        console.log('componentDidMound');
        inputRef.current.focus()
    },[])
    useEffect(()=>{
        console.log('count Update')
    },[count])
    useEffect(()=>{
        return ()=>{
            console.log("componentWillUnmount")
        }
    },[]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
            <input ref={inputRef}/>
            <hr/>
            <Text.Provider value={{count,setCount}}>
                <Item/>
            </Text.Provider>
        </div>
    )
}
function Item(){
    const {count,setCount}=useContext(Text);
    return <div>Item.count:{count}
    <hr/>
    <button onClick={()=>setCount(count-1)}>-1</button>
    </div>
}

```



#### redux

```js
//store.js
import {createStore} from 'redux';
import reducer from './reducer';
const store=createStore(reducer);
export default store;

//reducer.js
const defaultState={
    initValue:"初始值",
    list:[1,2,3]
}
export default (state=defaultState,action)=>{
    let newState=JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'add'://do something
            return newState
        case 'del'://do something
            return newState
        default:
            return state;
    }
}

//Component
import store from './store/index.js'
constructor(){
    this.state={
        data:store.getStore();
    }
    this.storeChange=this.storeChange.bind(this);
    store.subscribe(this.storeChange);
}

const action={
    type:'add',
    value:value,
}
store.dispatch(action);
```



## 简单算法

#### 数组的相关算法

##### 数组的去重

最简单的方法就是使用ES6的set

```js
let arr=[1,2,3,4,3,2,4,5,6,7];
console.log([...new Set(arr)])
```

遍历数组，若不在新建的数组中，就将元素push进去

```js
function uniq(arr){
    let res=[];
   	arr.forEach(item=>{
        if(res.indexOf(item)===-1){//也可以使用includes  res.includes(item)
            res.push(item)
        }
    })
    return res;
}  

//利用对象属性不重复，比较高效的算法
function distinct(arr){
    let result=[];
    let obj={};
    arr.forEach(item=>{
        if(!obj[item]){
            result.push(item);
            obj[item]=1;
        }
    })
    return result;
}
```

##### 数组扁平化

```js
let arr=[0,[1,2,3],[4,[[[5,6]]]9,],10];
function flattenArray(arr){
    let _arr=[];
    arr.forEach(item=>{
        if(!Array.isArray(item)){
            _arr.push(item)
        }else{
            _arr=_arr.concat(flattenArray(arr[i]));
        }
    })
    return _arr;
}

arr.flat(Infinity);

Array.from(new Set(arr.toString().split(',').map(item=>Number(item))))

JSON.stringify(arr).replace(/(\[|\])/g,'').split(',').map(item=>Number(item))
```



#### 函数柯里化

 Ramda   Lodash(fp)库

```js
function add() {
        // 第一次执行时，定义一个数组专门用来存储所有的参数
        let _args = Array.prototype.slice.call(arguments);

        // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
        let _adder = function() {
            _args.push(...arguments);
            return _adder;
        };

        // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            },0);
        }
        return _adder;
    }
```



#### 深浅拷贝

可以使用JSON.parse(JSON.stringify(obj))进行深拷贝，但如果有时间对象就会被转成字符串形式而不是时间对象；RegExp和Error对象则会被序列化为空对象；函数和undefined则会被丢失。

基本类型（number、string、boolean、undefined），传值的时候，内存会复制一份。

引用类型（function、object、array、regexp、null），传值的时候，内存不会复制。

```js
function deepClone(o){
    let type=[Date,RegExp,Set,Map,WeakMap];
    if(typeof o=="string"||typeof o=="number"||typeof o=="boolean"||typeof o=="undefined"){
        return o;
    }else if(Array.isArray(o)){
        let _arr=[];
        o.forEach(item=>{
            _arr.deepClone(item)
        })
        return _arr;
    }else if(type.includes(obj.constructor))
        return obj.constructor(obj)
    else if(typeof o=="object"){
        let _o={};//let _o=Object.create(o.getPrototypeof(obj))
        for(let k in o)
            _o[k]=deepClone(o[k])
        }
        return _o;
    }
}
```



#### 链表反序输出，不再申请内存空间

```js
//创建node节点
function node(data){
    this.next=null;
    this.data=data;
}
let pre,p;
pre=new node(-1);
let head=pre;//head为头结点
[1,2,3,4,5,6].forEach(item=>{
    p=new node(item);
    pre.next=p;
    pre=p;
})//创建链表
function output(p){
    if(p.next){
        output(p.next)
    }
    console.log(p.data)
}
output(head.next);//递归输出
```



#### 全排列

```js
//根据输入，输出所有的选择结果
let list=[['大份','中份','小份'],['不辣','微辣','重辣'],['微麻','中麻']];
function compose(i,typ){
    if(i===list.length){
        console.log(typ)
    }else{
        let cur=list[i];
        cur.forEach(item=>{
            typ.push(item);
            compose(i+1,typ);
            typ.pop();
        })
    }
}
compose(0,[])
```



#### 字典排序

```js
//[1,2,156,123,24,23]->[1,123,156,2,23,24]
let arr=[1,2,156,123,24,23];
arr=arr.map(item=>{
    return item.toString()
})
arr.sort((a,b)=>{
    let len=Math.min(a.length,b.length);
    for(let i=0;i<len;i++){
        if(a.charAt(i)<b.charAt(i)){
            return -1;
        }else if(a.charAt(i)>b.charAt(i)){
            return 1;
        }else{
            continue;
        }
    }
    if(a.length>b.length)
        return 1;
    else return -1;
})
```

#### 



## 网络

### HTTP

#### HTTP有什么特点

简单快速：客户向服务器请求服务时，只需传送请求方法和路径；

灵活：HTTP允许传输任意类型的数据对象。只在传输的类型由Content-Type加以标记；

无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接（深入-持久连接、管线化）

无状态：HTTP协议是无状态协议，是指协议对于交互性场景没有记忆能力。



#### HTTP报文的组成部分

请求报文：请求行(http方法，页面地址，http协议以及版本） 请求头(告诉服务端需要的内容个类型) 空行(告诉服务端以下是请求体) 请求体

响应报文：状态行 响应头 空行 响应体



#### HTTP方法

GET POST PUT(更新资源) DELETE HEAD(获得报文头部)

head：类似于get请求，只不过返回的响应中没有具体的内容，用户报头。

options：允许客户端查看服务器的性能，比如服务器支持的请求方式等。



#### GET和POST的区别

GET在浏览器回退时是无害的，而POST会再次提交请求

GET产生的URL地址可以被收藏，而POST不可以

GET请求会被浏览器主动缓存，而POST不会，除非手动设置

GET请求只能进行url编码，而POST支持多种编码方式

GET请求参数会被完整保留在浏览器历史记录中，而POST的参数不会被保留

GET请求在url中传送的参数是有长度限制的，而POST没有限制

对参数的数据类型，GET只接受ASCII字符，而POST没有限制

POST更安全，GET的参数直接暴露在URL上

GET的参数通过url传递，POST放在Request body中

补充：PUT操作是幂等的，所谓幂等就是不管进行多少次操作结果都是一样，通常是向服务器发送请求，如果url不存在，则要求服务器根据请求创建资源，如果存在，则接受请求内容，并修改。



#### http与https协议有什么区别

http是互联网上应用最为广泛的一种网络协议，是一个客户端和服务器端请求和应答的标准（TCP），用于从www服务器传输超文本到本地浏览器的传输协议，它可以使浏览器更加高效，是网络传输减少。

https是以安全为目标的HTTP通道，简单的讲就是HTTP的安全版，即HTTP下加入SSL层，HTTPS的安全基础就是SSL，因此加密的详细内容就需要SSL（Secure Sockets Layer 安全套接字）

http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议

http与https使用的是完全不同的连接方式，用的默认端口也不同，http是80，https是443



#### 对称加密和非对称加密

对称加密算法的加密和解密使用的密钥是相同的，也就是通讯双方如果使用对称加密算法来加密通信数据，那么通讯双方就需要都知道这个密钥；

非对称加密算法用到了两个密钥，分别是公钥和私钥，双方都有自己的公钥和私钥，自己公钥加密的数据只有自己的私钥才能解开。




#### HTTPS通信

- 客户端请求服务器获取证书公钥
- 客户端（SSL/TLS）解析证书（无效会弹出警告）
- 生成随机值
- 用公钥加密随机值生成密钥
- 客户端将密钥发送给服务器
- 服务端用私钥解密密钥得到随机值
- 将信息和随机值混合在一起进行加密
- 将加密的内容发送给客户端
- 客户端用密钥解密信息



#### HTTP缓存机制

![img](https://github.com/huyaocode/webKnowledge/raw/master/img/http-cache.png)

WEB缓存大致分为：数据库缓存、服务器缓存、浏览器缓存

浏览器缓存包括：Http缓存，indexDB、cookie、localStorage等

Catch-Control-请求：

private：客户端可以缓存；

public：客户端和代理服务器均可缓存；

max-age=xxx：缓存的资源将在xxx秒后过期；

no-cache：需要使用协商缓存来验证是否过期；

no-store：不可缓存

HTTP协议中主要设计缓存的Header的就是Catch-Control和Expires。

强制缓存：只有首次请求才会和服务器通信，读取缓存资源时不会发出任何请求，资源的状态码为200；（Pragma，Catch-Control，Expires）

协商缓存：每次请求都会与服务器进行交互，第一次是拿数据和标识的过程，第二次开始，就是浏览器询问服务器资源是否有更新的过程，如果命中缓存，则资源的状态码是304而不是200。（If-Modified-Since ETag）

![img](https://upload-images.jianshu.io/upload_images/4845448-ab0e961921da5694?imageMogr2/auto-orient/strip|imageView2/2/format/webp)



#### HTTP协议头部字段

Accept：告诉web服务器自己接收什么介质类型

Accept-Charset：浏览器申明自己接收的字符集

Accept-Encoding：浏览器申明自己接收编码方法

Accept-Language：浏览器申明自己接收的语言

Age：当代理服务器用自己缓存的实体去请求时，该头部表明实体从产生到现在经过多长时间了

Authorization：当客户端收到来自web的www-authenticate响应时，用该头部来回应自己的身份验证信息给web服务器

Catch-Control

Connection：keepalive（保持连接，等待后续请求）等



#### 用什么解析IP

从网址到IP的转换，成为DNS解析，DNS解析是一个递归查询的过程，以www.google.com为例：

1）在本地域名服务器中查询IP地址

2）如果没有找到，本地域名服务器会向根域名服务器发送一次请求

3）如果根域名服务器中不存在该域名，但判定这个域名属于"com"域，则向com顶级域名服务器发送一次请求；

4）如果com顶级服务器没有找到该域名，则判定这个域名属于google.com域，则本地域名服务器会向google.com域服务器发送一个请求，以此类推。

5）直到本地域名服务器得到域名对应域名的IP地址，并将其缓存到本地，以便下次使用



#### TCP三次握手？四次挥手？

三次握手的必要性：为了保证服务器能接收到客户端的信息并作出正确的应答而进行前两次握手，为了保证客户端能够接收到服务端的信息并能做出正确的应答而进行了后两次（第二次和第三次）握手；三次握手的目的是为了防止已失效的连接请求报文段突然又传到了服务器。

![img](https://img-blog.csdn.net/20180306090528688)



#### 常见的HTTP状态码

1**——信息，服务器收到请求，需要请求者继续完成操作

200——OK，请求成功

204——no-content

206——partical Content

3**——重定向，需要进一步的操作以完成请求

301——永久重定向

302——暂时重定向

304——客户端发送了GET请求并且该请求被允许，但文档的内容并没有改变

400——请求无效，产生原因：前端提交数据的字段名称或者类型与后端未保持一致。或者提交的不是json。

401——请求要求用户的身份认证

403——禁止，服务器理解客户端请求，但是拒绝处理此请求，通常是权限设置所致

404——Not Found，请求的资源不存在

500——内部服务器错误

502——充当网关或代理的服务器从远端服务器接收到一个无效的请求

504——充当网关或代理的服务器，未及时从远端服务器获取请求



#### TCP和UDP的区别

- TCP是面向连接的，UDP是无连接的即发送数据前不需要先建立连接
- TCP提供可靠的服务，也就是说，通过TCP连接传送的数据无差错不丢失，不重复，且按顺序到达；UDP尽最大努力交付，即不保证可靠交付。由于TCP更加可靠，面向连接，不会丢失数据，因此适合大数据量的交换。所以，TCP是面向连接的可靠性传输，而UDP是不可靠的
- TCP是面向字节流，UDP是面向报文的，并且网络出现拥塞不会使得发送速率降低，因此会出现丢包。
- TCP只能一对一，UDP支持一对一，也支持一对多。
- TCP的首部较大为20字节，而UDP只有8字节。

TCP应用场景：效率要求相对低，但对准确性要求相对较高的场景。比如：文件传输、邮件传输、远程登录；

UDP应用场景：效率要求相对较高，对准确性要求相对较低。例如：在线视频、网络语音电话（即使通信）



#### WebSocket的实现和应用

##### 什么是WebSocket？

WebSocket是H5中的协议，支持持久连接，http协议不支持持久性连接。Http1.0和Http1.1都不支持持久性连接，Http1.1中的keep-alive将多个http请求合并为1个。

##### WebSocket是什么样的协议，具有什么优点？

Http的生命周期通过request来界定，也就是request一个response，那么在http1.0协议中，这次http请求就结束了，在1.1中进行了改进，有一个connection:Keep-alive，也就是说在一个http连接中，可以发送多个request，接收多个response。但是必须记住，在http中的一个request只能对应一个response，而且这个response是被动的，不能主动发起。

WebSocket是基于http协议的，或者说借用了http协议来完成一部分握手，在握手阶段与http是相同的。websocket支持长连接且可以让服务端主动发送数据给客户端。



#### 管线化

在使用持久连接的情况下，某个连接上的传递类似于

请求1->响应1->请求2->响应2->请求3->响应3

某个连接上的消息变成了类似这样

请求1->请求2->请求3->响应1->响应2->响应3



#### 一个url访问后直接下载怎样实现？

请求的返回头里面，用于浏览器解析的重要参数就是OSS的API文档里面的返回http头，决定用户下载行为的参数。

设置response header为disposition-type为attachment



#### fetch发送两次请求的原因

fetch发送post请求的时候，总是发送两次，第一次状态码是204，第二次才成功？

因为用fetch的post请求的时候，导致fetch第一次发送了一个Options请求，询问服务器是否支持修改的请求头，如果服务器支持，则在第二个中发送真正的请求。

204状态码表示No-content



#### Cookie、sessionStorage、localStorage的区别

共同点：都是保存在浏览器端，并且是同源的

- cookie是网站为了标示用户身份而存储在用户终端的数据（通常经过加密）；
- cookie数据始终在同源的http请求中携带（即使不需要），即会在浏览器和服务器之间来回传递；
- sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存；
- 存储大小：cookie数据大小不超过4k，sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M；
- 有效期：localStorage存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage的数据在当前浏览器窗口关闭之后自动删除；cookie在设置的过期时间是一直有效的，即使窗口或者浏览器关闭；
- 共享：sessionStorage不能共享，localStorage在同源文档之间共享，cookie在同源且符合path规则的文档之间共享。

补充：indexDB(索引数据库)：本地非关系型数据库，遵守同源协议。容量超大，存储形式为键值对；

在cookie中设置了httpOnly属性，那么通过js脚本将无法获取到cookie的信息，可以有效的防止xss的攻击。



#### Cookie与Session的区别

cookie数据存放在客户的浏览器上，session数据存储在服务器上；

cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session。

session会在一定时间内保存在服务器上，当访问增多，会比较占用服务器的性能，考虑到减轻服务器性能，应当使用cookie；

单个cookie保存的数据不能超过4k，很多浏览器都限制一个站点最多保存20个cookie。

![img](https://iknow-pic.cdn.bcebos.com/30adcbef76094b36a84d4a56aecc7cd98c109da9?x-bce-process=image/resize,m_lfit,w_600,h_800,limit_1)

补充：服务器通过设置set-cookie，将cookie信息返回给浏览器，浏览器将响应头中的cookie信息保存在本地，在下次向服务器发送http请求时，浏览器会自动将保存的cookie信息添加到响应头中。



#### web worker

在HTML页面中，如果在执行脚本时，页面的状态是不可响应的，直到脚本执行完成后，页面才变成可响应。web worker是运行在后台的js，独立于其他的脚本，不会影响页面的性能。并且通过postMessage将结果回传到主线程。这样进行复杂操作的时候，就不会阻塞主线程了。

创建web worker的过程：

检测浏览器对于web worker的支持性；

创建web worker文件；

创建web worker对象；

```js
let worker=new Worker('work.js');
work.postMessage(data);
worker.onmessage=function(event){
    let result=event.data;
}
```



#### 在地址栏中输入了一个url，到这个页面呈现出来，中间发生了什么？

输入url后，首先需要找到这个url域名的服务器ip，为了寻找这个ip，浏览器首先会寻找缓存，查看缓存中是否有记录，缓存查找记录为：浏览器缓存>系统缓存>路由器缓存，缓存中没有则查找系统的hosts文件中是否有记录，如果没有则查询DNS服务器，得到服务器的ip地址后，浏览器会根据这个ip以及响应的端口号，构造一个http请求，这个请求报文会包括这次请求的信息，主要是请求方法，请求说明和请求附带的数据，并将这个http请求封装一个tcp包中，这个tcp包会一次穿过传输层，网络层，数据链路层，物理层到达服务器，服务器解析这个请求来做出响应，返回响应的html给浏览器，因为html是一个树形结构，浏览器会根据这个html来构建dom树，在dom树的构建过程中如果遇到js脚本个外部js链接，则会停止构建DOM来执行和下载响应的代码，这会造成阻塞，这就是为什么推荐js代码应该放在html之后，之后根据外部样式、内联样式构建一个css对象的模型是cssom树，构建完成后和dom树合并为渲染树，这里做的主要是排除非视觉节点。之后进行布局，布局只要是确定每个节点的尺寸以及位置，之后就是渲染页面。

简单的说就是：

1. DNS域名解析
2. 发起TCP的三次握手
3. 建立TCP连接后发起HTTP请求
4. 服务器响应http请求后，浏览器得到HTML代码
5. 浏览器解析HTML，并请求HTML代码中的资源
6. 浏览器对页面进行渲染并呈现给用户
7. 连接结束



#### 常见的HTTP的头部

可以将http首部分为通用首部，请求首部，响应首部，实体首部

通用首部表示一些通用信息，比如date表示报文创建时间

请求首部就是请求报文中独有的，如cookie和缓存相关的如 if-Modified-Since（协商缓存）

响应首部就是响应报文中独有的，如set-cookie和重定向相关的location

实体首部用来描述实体部分，如allow用来描述可执行的请求方法，content-type描述主体类型，content-Encoding描述主体的编码方式



#### 描述XSS和CRSF攻击？防御方法？

XSS，即为（Cross Site Scripting)，中文名为跨站脚本，是发生在目标用户的浏览器层面上的，当渲染DOM树的过程中发生了不在预期内执行的js脚本时，就发生了XSS攻击，大多数XSS攻击的主要方式是嵌入一段远程或者第三方域上的js代码，实际上是在目标网站的作用域下执行这段js代码。

XSS防御的思路：对输入进行过滤，对输出	进行编码，也就是对提交的所有内容进行过滤，对url中的参数进行过滤，过滤掉会导致脚本执行的相关内容，然后对动态输出到页面的内容进行html编码，使脚本无法在浏览器中执行。

CSRF(Cross Site Request Forgery)，跨站请求伪造，就是在别的站点伪造了一个请求，就是在受害者访问一个网站时，其Cookie还没有过期的情况下，攻击者伪造一个链接地址发送给受害者并欺骗其点击，从而形成CSRF攻击。

防御CSRF：验证http referer字段；在请求地址中添加token验证；在HTTP头中自定义属性并验证。



#### HTTP2特点

多项请求与响应：解决了HTTP1.x中存在的队首阻塞

请求优先级

请求都建立在一个TCP请求上，实现多路复用，即每一个request都是用作连接共享机制，一个request对应一个id，这样在一个连接上有多个request；

服务器推送(server push)：服务端可以在发送页面HTML时主动推送其他的资源，而不用等到浏览器解析到相应位置在发起请求再响应。

首部压缩

补充：

Http1：建立连接，发送请求，收到响应，然后就断开连接。

Http1.1：支持持续连接，发送a请求，收到a响应，发送b请求，收到b响应，最后由客户端确认是否要关闭连接。（keep-alive）

#### OSI七层协议

![å¨è¿éæå¥å¾çæè¿°](https://img-blog.csdnimg.cn/20190105164025264.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxOTIzNjIy,size_16,color_FFFFFF,t_70)

路由器工作在网络层



## 正则

#### 特殊字符

- ^ 匹配输入的开始
- $ 匹配输入的结束
- \* 0次或者多次{0，}
- \+ 1次或者多次{1，}
- ？ 
  - 0次或者1次
  - 用于先行断言
  - 如果紧跟在任何两次*、+、？或者{}的后面，将会使量词变为非贪婪，如"123abc"用/\d+/将会返回”123“，用/\d+?/就只会返回1.
- .匹配除换行符以外的任何单个字符
- (x)匹配'x'并且记住匹配项
- (?:x)匹配'x'但是不记住匹配项
- x(?=y)匹配'x'仅仅当x后面是'y'，这叫正向肯定查找
- x(?!y)匹配x仅仅当'x'后面不跟着'y'，这叫正向否定查找
- x|y匹配'x'或者'y'
- {n}重复n次
- {n,m}匹配至少n次，最多m次
- [xyz]表示x或y或z
- [^xyz]不是x或y或z
- \d数字
- \D非数字
- \s空白字符，包括空格、制表符、换页符和换行符
- \S非空白字符
- \w单词字符（字母、数字或下划线）[a-zA-Z0-9]
- \W非单词字符
- \3表示第三个分组
- \b词的边界
  - /\bm/匹配”moon“中的’m'
- \B非单词边界

#### 使用正则表达式的方法

- exec一个在字符串中执行查找匹配RegExp方法，返回数组，为匹配到返回null
- test一个在字符串中测试是否匹配到RegExp方法，返回true或false
- match一个在字符串中测试匹配到的String方法，他返回匹配到的位置索引，失败是返回-1
- replace一个在字符串中执行查找匹配的String方法，并且使用替换元素替换掉匹配到的字符串
- split一个使用正则表达式或者一个固定字符串分割一个字符串，并将分割后的子字符串存储到String中

```js
//给数字加,
let reg=/\B(?=(\d{3})+(?!\d))/g
//匹配8-16位密码，包含数字、小写字母和带大写字母
let reg2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/
```



## 其他

#### 进程和线程

进程是一个具有一定独立能力的程序在一个数据集上的一次动态执行的过程，是操作系统进行资源分配和调度的独立单位。

- 线程是程序执行的最小单位，进程是操作系统分配资源的最小单位；
- 一个进程由一个或者多个线程组成，线程是一个进程中代码的不同执行路线；
- 进程之间相互独立，但同一个进程下的各个线程之间共享程序的内存空间以及一些进程级的资源
- 调度和切换，线程上下文切换比进程上下文切换快得多



#### LRU（Least recently used 最近最少使用）

![img](https://upload-images.jianshu.io/upload_images/1420632-b778715940c08434?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp)

```js
let Arr=[];
let s='70120304';
for(let i=0;i<s.length;i++){
    if(Arr.indexOf(s.charAt(i))==-1){
        Arr.push(s.charAt(i));
        if(Arr.length>3){
            Arr.shift();
        }
    }else{
        let temp=s.charAt(i);
        Arr.splice(Arr.indexOf(s.charAt(i)),1);
        Arr.push(temp)
    }
    console.log(Arr)
}

/*
[ '7' ]
[ '7', '0' ]
[ '7', '0', '1' ]
[ '0', '1', '2' ]
[ '1', '2', '0' ]
[ '2', '0', '3' ]
[ '2', '3', '0' ]
[ '3', '0', '4' ]
*/
```



#### 死锁&解决

死锁就是两个或以上的线程相互持有对方需要的资源，导致这些线程均处于等待状态，无法执行；

破坏请求与保持，一次性申请所有需要的资源；破坏不可抢占条件，抢占资源被拒绝就释放自己的资源；破坏循环等待；



#### 面向对象的三大特性

封装：根据职责将属性和方法封装到一个抽象类中；

继承：实现代码的重用，继承父类的代码；

多态：不同的子类对象调用相同的方法，产生不同的结果；



#### ES6之后的新特性

**求幂运算符

Array.prototype.includes()

async await



#### hash解决冲突的方法

开放定址法（线性试探、二次探测再散列）

链地址法

建立公共溢出区

再哈希法（一次发生冲突，再用另一个哈希算法去计算）