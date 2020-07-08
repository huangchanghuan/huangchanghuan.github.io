---
layout: post
title: 设计模式六大原则(4):接口隔离原则
category: 设计模式
tags: ['设计模式六大原则']
excerpt_separator: <!--more-->
description: '<p>接口隔离原则（英语：interface-segregation principles， 缩写：ISP）指明没有客户（client）应该被迫依赖于它不使用方法。</p>
<a href="/InterfaceSegregationPrinciple">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">设计模式六大原则(4):接口隔离原则</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/设计模式">设计模式</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/设计模式六大原则"> 设计模式六大原则</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

接口隔离原则（英语：interface-segregation principles， 缩写：ISP）指明没有客户（client）应该被迫依赖于它不使用方法。

##  `2.正文`
### `2.1 接口隔离原则`

1. **客户端不应该依赖它不需要的接口；**
2. **一个类对另一个类的依赖应该建立在最小的接口上。**

 接口隔离原则的含义是：建立单一接口，不要建立庞大臃肿的接口，尽量细化接口，接口中的方法尽量少。也就是说，我们要为各个类建立专用的接口，而不要试图去建立一个很庞大的接口供所有依赖它的类去调用。在程序设计中，依赖几个专用的接口要比依赖一个综合的接口更灵活。**接口是设计时对外部设定的“契约”，通过分散定义多个接口，可以预防外来变更的扩散，提高系统的灵活性和可维护性。**

### `2.2 单一职责原则和接口隔离原则区别`

1. 单一职责原则原注重的是职责；而接口隔离原则注重对接口依赖的隔离。
2. 单一职责原则主要是约束类，其次才是接口和方法，它针对的是程序中的实现和细节；而接口隔离原则主要约束接口接口，主要针对抽象，针对程序整体框架的构建。

### `2.3 接口隔离注意事项`

1. 接口尽量小，但是要有限度。对接口进行细化可以提高程序设计灵活性是不挣的事实，但是如果过小，则会造成接口数量过多，使设计复杂化。所以一定要适度。
2. 为依赖接口的类定制服务，只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。只有专注地为一个模块提供定制服务，才能建立最小的依赖关系。
3. 提高内聚，减少对外交互。使接口用最少的方法去完成最多的事情。
  
## `3.参考资料`

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

2.[接口隔离原则](https://zh.wikipedia.org/wiki/%E6%8E%A5%E5%8F%A3%E9%9A%94%E7%A6%BB%E5%8E%9F%E5%88%99 "Title")







