---
layout: post
title: 依赖、关联、聚合和组合的区别
category: designpattern
tags: ['DesignPattern','UML']
excerpt_separator: <!--more-->
description: '<p>面向对象的程序设计中，对象的依赖、关联、聚合、和组合这四种关系比较容易混淆。他们在编程语言中的体检基本相同的，仅仅是在语义上有所区别，语义指的是上下文环境、特定情景等。下面来详细谈论下Java是如何提现依赖、关联、聚合、和组合。</p>
<a href="/designpattern/2017/07/13/differenceInClassRelation">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">依赖、关联、聚合和组合之间的区别</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/designpattern">designpattern</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/DesignPattern"> DesignPattern</a><a href="/tags/UML"> UML</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  1.前言

面向对象的程序设计中，对象的依赖、关联、聚合、和组合这四种关系比较容易混淆。他们在编程语言中的体检基本相同的，仅仅是在语义上有所区别，语义指的是上下文环境、特定情景等。下面来详细谈论下Java是如何提现依赖、关联、聚合、和组合。

##  2.正文

###  2.1《Java面向对象编程》

以下是《Java面向对象编程》一书里对这四种关系的定义：

+ 依赖(Dependency)关系是类与类之间的联接。依赖关系表示一个类依赖于另一个类的定义。例如，一个人(Person)可以买车(car)和房子(House)，Person类依赖于Car类和House类的定义，因为Person类引用了Car和House。与关联不同的是，Person类里并没有Car和House类型的属性，Car和House的实例是以参量的方式传入到buy()方法中去的。一般而言，依赖关系在Java语言中体现为局域变量、方法的形参，或者对静态方法的调用。
+ 关联(Association）关系是类与类之间的联接，它使一个类知道另一个类的属性和方法。关联可以是双向的，也可以是单向的。在Java语言中，关联关系一般使用成员变量来实现。
+  聚合(Aggregation) 关系是关联关系的一种，是强的关联关系。聚合是整体和个体之间的关系。例如，汽车类与引擎类、轮胎类，以及其它的零件类之间的关系便整体和个体的关系。与关联关系一样，聚合关系也是通过实例变量实现的。但是关联关系所涉及的两个类是处在同一层次上的，而在聚合关系中，两个类是处在不平等层次上的，一个代表整体，另一个代表部分。
 + 组合(Composition) 关系是关联关系的一种，是比聚合关系强的关系。它要求普通的聚合关系中代表整体的对象负责代表部分对象的生命周期，组合关系是不能共享的。代表整体的对象需要负责保持部分对象和存活，在一些情况下将负责代表部分的对象湮灭掉。代表整体的对象可以将代表部分的对象传递给另一个对象，由后者负责此对象的生命周期。换言之，代表部分的对象在每一个时刻只能与一个对象发生组合关系，由后者排他地负责生命周期。部分和整体的生命周期一样。
 
 由上面的定义，我们可以总结：依赖关系实际上是一种比较弱的关联，聚合是一种比较强的关联，而组合则是一种更强的关联，所以笼统的来区分的话，实际上这四种关系、都是关联关系。
 
 
### 2.2实例说明
 
 
#### 2.2.1依赖关系
 
 依赖关系比较好区分，它是耦合度最弱的一种，在java中表现为局域变量、方法的形参，或者对静态方法的调用。
 Programmer类依赖Computer类，Programmer类的三个方法分别演示了依赖关系的三种形式。
 
 ```java
class Computer{  
    public static void run(){  
        System.out.println("电脑在运行");  
    }  
}  
  
class Programmer {  
    //使用形参方式发生依赖关系  
    public void code1(Computer computer){  
        computer.run();  
    }  
    //使用局部变量发生依赖关系  
    public void code2(){  
        Computer computer = new Computer();  
        computer.run();  
    }  
    //使用静态变量发生依赖关系  
    public void code3(){  
        computer.run();  
    }  
}  
```

####  2.2.2关联关系
  
关联关系在java中一般使用成员变量来实现，有时也用方法形参的形式实现。依然使用Programmer和Computer的例子，使用方法参数形式可以表示依赖关系，也可以表示关联关系，毕竟我们无法在程序中太准确的表达语义。在本例中，使用成员变量表达这个意思：电脑是程序员自己的电脑，程序员“拥有”这台电脑。使用方法参数表达：电脑不是我的，我只是个程序员，别人给我什么电脑我就用什么电脑，我使用这个电脑。
  
  ```java
class Programmer {  
    //使用成员变量形式实现关联  
    Computer computer;  
    public void code1(){  
        computer.run();  
    }  
    //使用方法参数形式实现关联  
    public void code2(Computer computer){  
        computer.run();  
    }  
}  
 ```
 
####  2.2.3 聚合关系
  
 聚合关系是是一种比较强的关联关系，java中一般使用成员变量形式实现。对象之间存在着整体与部分的关系。
 假如代码环境语义：电脑是一台私人电脑，是程序员财产的一部分。则相同的代码即表示聚合关系了。聚合关系一般使用setter方法给成员变量赋值。
  
  ```java
class Programmer {  
    //使用成员变量形式实现聚合关系  
    Computer computer;  
    public void code(){  
        computer.run();  
    }  
}  
 ```
 
####  2.2.4 组合关系
  
假如上下文语义：电脑是程序员的必须有的财产，要想成为一个程序员必须要先有电脑，电脑要是没了，程序员也不想活了。而且程序员要是不干程序员了，这个电脑就砸了，别人谁也别想用。那就表示组合关系了。一般来说，为了表示组合关系，常常会使用构造方法来达到初始化的目的，例如上例中，加上一个以Computer为参数的构造方法
  
  ```java
class Programmer {  
    //使用成员变量形式实现聚合关系  
    Computer computer;  
    public Programmer(Computer computer){  
        this.computer=computer;
    }  
}  
 ```
 
## 3.参考资料

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

