---
layout: post
title: 设计模式六大原则(1):单一职责原则
category: designpattern
tags: ['DesignPatternSixPrinciple']
excerpt_separator: <!--more-->
description: '<p>不要存在多于一个导致类变更的原因。通俗的说，即一个类只负责一项职责。</p>
<a href="/designpattern/2017/07/15/singleResponsibilityPrinciple">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">设计模式六大原则(1):单一职责原则</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/designpattern">designpattern</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/DesignPatternSixPrinciple"> DesignPatternSixPrinciple</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

单一职责原则,从字面上看，就是坚持一个对象一个职责。其实，如果一个程序员没有学过设计模式的六大原则，如果他会自己思考总结，写出来的代码基本上都是一个地方一个职责。因为当修改一个地方职责的时候，不会影响到另外一个职责，所以不用顾虑一处的修改，导致多处出现问题。

##  `2.正文`
### `2.1 单一职责原则定义`

不要存在多于一个导致类变更的原因。通俗的说，即一个类只负责一项职责。

### `2.2 单一职责原则优点`

1.  可以降低类的复杂度，一个类只负责一项职责，其逻辑肯定要比负责多项职责简单的多；
2.  提高类的可读性，提高系统的可维护性；
3.  变更引起的风险降低，变更是必然的，如果单一职责原则遵守的好，当修改一个功能时，可以显著降低对其他功能的影响。
 
### `2.3 职责扩散`
 
编写软件坚持单一职责很容易做到，但是随着需求的扩张，一个类的职责可能由1个变细为两个，这个时候，这个类就不符合单一职责原则了，这就是职责扩散。所谓职责扩散，就是因为某种原因，职责P被分化为粒度更细的职责P1和P2。
 
### `2.4 职责扩散是否应该马上重构`
 
因为某种原因，职责P被分化为粒度更细的职责P1和P2，那么是否应该把这个类重构成两个单独职责的类？不是的。在现实中，把一个类重构成两个类是比较麻烦的，所以一般是在原来类的基础上进行扩散。但是当扩散的职责已经快要超出我们的控制范围之前，就要马上进行重构。

### `2.5 职责扩散处理方法`

随着需求的发展，容忍违背单一职责原则，必须坚持以下原则：

1.  只有逻辑足够简单，才可以在代码级别上违反单一职责原则（不新建方法，不新建类，直接修改代码）；
2.  只有类中方法数量足够少，才可以在方法级别上违反单一职责原则（通过添加一个方法，对应新的职责，保证方法单一职责）；
3.  如果违背以1和2两点，则需要进行重构。

实际应用中的类都要复杂的多，一旦发生职责扩散而需要修改类时，除非这个类本身非常简单，否则还是遵循单一职责原则的好
  
## `3.参考资料`

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")






































