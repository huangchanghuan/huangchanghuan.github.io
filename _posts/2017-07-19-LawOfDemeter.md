---
layout: post
title: 设计模式六大原则(5):迪米特法则
category: designpattern
tags: ['DesignPatternSixPrinciple']
excerpt_separator: <!--more-->
description: '<p>一个简单例子是，人可以命令一条狗行走（walk），但是不应该直接指挥狗的腿行走，应该由狗去指挥控制它的腿如何行走。</p>
<a href="/designpattern/2017/07/19/LawOfDemeter">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">设计模式六大原则(5):迪米特法则</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/designpattern">designpattern</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/DesignPatternSixPrinciple"> DesignPatternSixPrinciple</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

得墨忒耳定律（Law of Demeter，缩写LoD）亦称为“最少知识原则（Principle of Least Knowledge）”，是一种软件开发的设计指导原则，特别是面向对象的程序设计。得墨忒耳定律是松耦合的一种具体案例。

##  `2.正文`

### `2.1 迪米特法则`

该原则是美国东北大学在1987年末在发明的，可以简单地以下面任一种方式总结:

1. 每个单元对于其他的单元只能拥有有限的知识：只是与当前单元紧密联系的单元；
2. 每个单元只能和它的朋友交谈：不能和陌生单元交谈；
3. 只和自己直接的朋友交谈。

  自从我们接触编程开始，就知道了软件编程的总的原则：低耦合，高内聚。无论是面向过程编程还是面向对象编程，只有使各个模块之间的耦合尽量的低，才能提高代码的复用率。低耦合的优点不言而喻，但是怎么样编程才能做到低耦合呢？那正是迪米特法则要去完成的。
  
迪米特法则又叫最少知道原则，最早是在1987年由美国Northeastern University的Ian Holland提出。通俗的来讲，就是一个类对自己依赖的类知道的越少越好。也就是说，对于被依赖的类来说，无论逻辑多么复杂，都尽量地的将逻辑封装在类的内部，对外除了提供的public方法，不对外泄漏任何信息。迪米特法则还有一个更简单的定义：只与直接的朋友通信。首先来解释一下什么是直接的朋友：每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。耦合的方式很多，依赖、关联、组合、聚合等。其中，我们称出现成员变量、方法参数、方法返回值中的类为直接的朋友，而出现在局部变量中的类则不是直接的朋友。也就是说，陌生的类最好不要作为局部变量的形式出现在类的内部。

### `2.2 总结`

  迪米特法则的初衷是降低类之间的耦合，由于每个类都减少了不必要的依赖，因此的确可以降低耦合关系。但是凡事都有度，虽然可以避免与非直接的类通信，但是要通信，必然会通过一个“中介”来发生联系，过分的使用迪米特原则，会产生大量这样的中介和传递类，导致系统复杂度变大。所以在采用迪米特法则时要反复权衡，既做到结构清晰，又要高内聚低耦合。
  
## `3.参考资料`

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

2.[迪米特法则](http://blog.csdn.net/zhengzhb/article/details/7296930 "Title")

3.[得墨忒耳定律](https://zh.wikipedia.org/wiki/%E5%BE%97%E5%A2%A8%E5%BF%92%E8%80%B3%E5%AE%9A%E5%BE%8B "Title")







