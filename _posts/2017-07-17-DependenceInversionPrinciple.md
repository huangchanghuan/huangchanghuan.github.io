---
layout: post
title: 设计模式六大原则(3):依赖反转原则
category: designpattern
tags: ['DesignPatternSixPrinciple']
excerpt_separator: <!--more-->
description: '<p>依赖反转原则（Dependency inversion principle，DIP）是指一种特定的解耦（传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），从而使得低层次模块依赖于高层次模块的需求抽象。</p>
<a href="/designpattern/2017/07/17/DependenceInversionPrinciple">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">设计模式六大原则(3):依赖反转原则</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/designpattern">designpattern</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/DesignPatternSixPrinciple"> DesignPatternSixPrinciple</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

依赖反转原则（Dependency inversion principle，DIP）是指一种特定的解耦（传统的依赖关系创建在高层次上，而具体的策略设置则应用在低层次的模块上）形式，使得高层次的模块不依赖于低层次的模块的实现细节，依赖关系被颠倒（反转），**从而使得低层次模块依赖于高层次模块的需求抽象。**

**依赖反转原则的目的是把高层次组件从对低层次组件的依赖中解耦出来，这样使得重用不同层级的组件实现变得可能。**把高层组件和低层组件划分到不同的包/库（在这些包/库中拥有定义了高层组件所必须的行为和服务的接口，并且存在高层组件的包）中的方式促进了这种解耦。**由于低层组件是对高层组件接口的具体实现，因此低层组件包的编译是依赖于高层组件的，这颠倒了传统的依赖关系。众多的设计模式，比如插件，服务定位器或者依赖反转，则被用来在运行时把指定的低层组件实现提供给高层组件。**

**应用依赖反转原则同样被认为是应用了适配器模式，**例如：高层的类定义了它自己的适配器接口（高层类所依赖的抽象接口）。被适配的对象同样依赖于适配器接口的抽象（这是当然的，因为它实现了这个接口），同时它的实现则可以使用它自身所在低层模块的代码。通过这种方式，高层组件则不依赖于低层组件，因为它（高层组件）仅间接的通过调用适配器接口多态方法使用了低层组件，而这些多态方法则是由被适配对象以及它的低层模块所实现的。

##  `2.正文`
### `2.1 依赖反转原则规定`

1. 高层次的模块不应该依赖于低层次的模块，两者都应该依赖于抽象接口。
2. 抽象接口不应该依赖于具体实现。而具体实现则应该依赖于抽象接口。

### `2.2  违反依赖反转原则例子`

类A直接依赖类B，假如要将类A改为依赖类C，则必须通过修改类A的代码来达成。这种场景下，类A一般是高层模块，负责复杂的业务逻辑；类B和类C是低层模块，负责基本的原子操作；假如修改类A，会给程序带来不必要的风险。
 
### `2.3  传递依赖的三种方式`
 
 传递依赖关系有三种方式：
 1. 接口传递
 2. 构造方法传递
 3. setter方法传递
 
 Spring框架的依赖反转，就准守了此原则。
 
### `2.4 编码怎么实现依赖反转`
  
  一般我们要做到以下三点：
  1.  **低层模块尽量都要有抽象类或接口，或者两者都有。**
  2.  **变量的声明类型尽量是抽象类或接口。**
  3.  **使用继承时遵循里氏替换原则。**

### `2.5 总结`

 **依赖倒置原则的核心思想是面向接口编程。**
 
依赖倒置原则基于这样一个事实：相对于细节的多变性，抽象的东西要稳定的多。以抽象为基础搭建起来的架构比以细节为基础搭建起来的架构要稳定的多。在Java中，**抽象指的是接口或者抽象类，细节就是具体的实现类，**使用接口或者抽象类的目的是制定好规范和契约，而不去涉及任何具体的操作，把展现细节的任务交给他们的实现类去完成。


  
## `3.参考资料`

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

2.[里氏替换原则（Liskov Substitution Principle）](http://www.cnblogs.com/gaochundong/p/liskov_substitution_principle.html "Title")

3.[依赖反转原则](https://zh.wikipedia.org/wiki/%E4%BE%9D%E8%B5%96%E5%8F%8D%E8%BD%AC%E5%8E%9F%E5%88%99 "Title")

4.[依赖倒置原则](http://blog.csdn.net/zhengzhb/article/details/7289269 "Title")






