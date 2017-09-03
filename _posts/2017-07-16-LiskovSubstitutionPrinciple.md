---
layout: post
title: 设计模式六大原则(2):里氏替换原则
category: designpattern
tags: ['DesignPatternSixPrinciple']
excerpt_separator: <!--more-->
description: '<p>在面向对象的程序设计中，里氏替换原则（Liskov Substitution principle）是对子类型的特别定义。它由芭芭拉·利斯科夫（Barbara Liskov）在1987年在一次会议上名为“数据的抽象与层次”的演说中首先提出。</p>
<a href="/designpattern/2017/07/16/LiskovSubstitutionPrinciple">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">设计模式六大原则(2):里氏替换原则</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/designpattern">designpattern</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/DesignPatternSixPrinciple"> DesignPatternSixPrinciple</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

在面向对象的程序设计中，里氏替换原则（Liskov Substitution principle）是对子类型的特别定义。它由芭芭拉·利斯科夫（Barbara Liskov）在1987年在一次会议上名为“数据的抽象与层次”的演说中首先提出。

##  `2.正文`
### `2.1 里氏替换原则定义`

派生类（子类）对象能够替换其基类（超类）对象被使用。

### `2.2  里氏替换原则含义`

通俗来讲,里氏替换原则就是:子类可以扩展父类的功能，但不能改变父类原有的功能。它包含以下四种含义：

1. **子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法**。
2. **子类中可以增加自己特有的方法**。
3. **当子类的方法重载父类的方法时，方法的前置条件（即方法的形参）要比父类方法的输入参数更宽松**。
4. **当子类的方法实现父类的抽象方法时，方法的后置条件（即方法的返回值）要比父类更严格**。
 
### `2.3 子类对象不重写基类的方法`
 
 继承作为面向对象三大特性之一，在给程序设计带来巨大便利的同时，也带来了弊端。比如使用继承会给程序带来侵入性，程序的可移植性降低，增加了对象间的耦合性，**如果一个类被其他的类所继承，则当这个类需要修改时，必须考虑到所有的子类，并且父类修改后，所有涉及到子类的功能都有可能会产生故障。**
 
继承包含这样一层含义：父类中凡是已经实现好的方法（相对于抽象方法而言），实际上是在设定一系列的规范和契约，虽然它不强制要求所有的子类必须遵从这些契约，**但是如果子类对这些非抽象方法任意修改，就会对整个继承体系造成破坏。**

继承，子类确实可以重写父类的方法，但是这么做会对软件体系造成破坏。在实际编程中，**我们常常会通过重写父类的方法来完成新的功能，这样写起来虽然简单，但是整个继承体系的可复用性会比较差**，特别是运用多态比较频繁时，程序运行出错的几率非常大。

### `2.4 设计如何符合里氏替换原则`

1.  里氏替换原则是针对继承而言的，如果继承是为了实现代码重用，也就是为了共享方法，那么共享的父类方法就应该保持不变，不能被子类重新定义。子类只能通过新添加方法来扩展功能，父类和子类都可以实例化，而子类继承的方法和父类是一样的，父类调用方法的地方，子类也可以调用同一个继承得来的，逻辑和父类一致的方法，这时用子类对象将父类对象替换掉时，当然逻辑一致，相安无事。

2.  如果继承的目的是为了多态，而多态的前提就是子类覆盖并重新定义父类的方法，为了符合LSP，我们应该将父类定义为抽象类，并定义抽象方法，让子类重新定义这些方法，当父类是抽象类时，父类就是不能实例化，所以也不存在可实例化的父类对象在程序里。也就不存在子类替换父类实例时逻辑不一致的可能。

不符合LSP的最常见的情况是，父类和子类都是可实例化的非抽象类，且父类的方法被子类重新定义，这一类的实现继承会造成父类和子类间的强耦合，也就是实际上并不相关的属性和方法牵强附会在一起，不利于程序扩展和维护。 

**如何符合LSP？总结一句话 —— 就是尽量不要从可实例化的父类中继承，而是要使用基于抽象类和接口的继承。**

  
## `3.参考资料`

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

2.[里氏替换原则（Liskov Substitution Principle）](http://www.cnblogs.com/gaochundong/p/liskov_substitution_principle.html "Title")

3.[里氏替换原则](https://zh.wikipedia.org/wiki/%E9%87%8C%E6%B0%8F%E6%9B%BF%E6%8D%A2%E5%8E%9F%E5%88%99 "Title")

4.[JAVA中，多态是不是违背了里氏替换原则？](https://www.zhihu.com/question/27191817 "Title")







