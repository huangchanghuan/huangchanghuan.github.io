---
layout: post
title: UML类图和设计模式中类的关系
category: 设计模式
tags: ['设计模式','UML']
nickname: peter
excerpt_separator: <!--more-->
description: '<p>看懂UML类图,设计模式中类的6种关系:</p>
<a href="/设计模式/2017/07/12/classDiagramOfDesignPattern">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">UML类图和设计模式中类的关系</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/设计模式">设计模式</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/设计模式"> 设计模式</a><a href="/tags/UML"> UML</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

### 前言

设计模式结构图一般都是使用UML的类图来展示，而有关Java面向对象的设计模式中，类的关系主要有6种：依赖、关联、聚合、组合、继承、实现，这6种关系的耦合度是依次增强的。下面介绍6种关系和它们的类图表示。

### 1.依赖关系(Dependence)

 <img src="/img/post/classDiagramOfDesignPattern/dependence.jpg" style="width:100%" />

+ 定义：对于两个相对独立的对象，当一个对象负责构造另一个对象的实例，或者依赖另一个对象的服务时，这两个对象之间主要体现为依赖关系。
+ java中的表现：类A当中使用了类B，其中类B是作为类A的方法参数、方法中的局部变量、或者静态方法调用。
+ 类图分析：People类依赖于Book类和Bicycle类，Book类和Bicycle类是作为类中方法的参数形式出现在People类中的。
+ 代码样例：

```java
public class People{  
    //Bicycle作为ride方法的形参  
     public void ride(Bicycle bicycle){  
        System.out.println("我在骑自行车,车名为:"+bicycle.getName());
    }  
}  
```

### 2.关联关系(Association)


单向关联：
<img src="/img/post/classDiagramOfDesignPattern/association1.jpg" style="width:100%" />
双向关联：
<img src="/img/post/classDiagramOfDesignPattern/association2.jpg" style="width:100%" />
 
+ 定义： 对于两个相对独立的对象，当一个对象的实例与另一个对象的一些特定实例存在固定的对应关系时，这两个对象之间为关联关系。关联关系分为单向关联和双向关联。
+ java中的表现：单向关联表现为：类A当中使用了类B，其中类B是作为类A的成员变量。双向关联表现为：类A当中使用了类B作为成员变量；同时类B中也使用了类A作为成员变量。
+ 类图分析：单向关联表现为：IDCard类作为People类的成员变量。双向关联表现为：People类作为IDCard类的成员变量，IDCard类作为People类的成员变量。
+ 代码样例：

```java
public class People{ 
   //关联关系中作为成员变量的类一般会在类中赋值 
     private String name;
     private IDCard idCard=new IDCard();
     public void writeIDCardNumber(){  
        System.out.println("我的省份证号码:"+idCard.getNumber());
    }  
    public String getName(){
         return name;
    }
}  

public class IDCard{
        private String number;
        private People people=new People();
         public void writeName(){  
            System.out.println("我的名字是:"+people.getName());
        }  
         public String getNumber(){  
            return number;
        }  
}
```


### 3.聚合关系(Aggregation)

 <img src="/img/post/classDiagramOfDesignPattern/aggregation.jpg" style="width:100%" />
 
+ 定义：聚合关系是关联关系的一种，耦合度强于关联，他们的代码表现是相同的，仅仅是在语义上有所区别：关联关系的对象间是相互独立的，而聚合关系的对象之间存在着包容关系，他们之间是“整体-个体”的相互关系。
+ java中的表现：类A由类B组成，可以通过A类的一个成员变量是B类或者是B类集合。
+ 类图分析：Company公司类由People成员类构成。
+ 代码样例：

```java
public class Company{  
    //Company拥有一个People的集合
      List<People> peopleList=new ArrayList<>();
   //聚合关系中作为成员变量的类一般使用set方法（不是集合的时候）赋值  
     public void add(People people){  
        System.out.println("新加人物姓名："+people.getName());
        peopleList.add(people);
    }  
}  
public class People{ 
    private String name;
     public String getName(){  
        return this.name;
    }  
}  
```

### 4.组合关系(Composition)

 <img src="/img/post/classDiagramOfDesignPattern/composition.jpg" style="width:100%" />
 
+ 定义： 相比于聚合，组合是一种耦合度更强的关联关系。存在组合关系的类表示“整体-部分”的关联关系，“整体”负责“部分”的生命周期，他们之间是共生共死的；并且“部分”单独存在时没有任何意义。
+ java中的表现：类A由类B组成，可以通过A类的一个成员变量是B类或者是B类集合。
+ 类图分析：Company公司类由TechnologyDepartment部门类和PersonnelDepartment部门类构成。
+ 代码样例：

```java
public class Company{  
    //Company拥有技术部门，人力资源部门
     private TechnologyDepartment technologyDepartment;
     private PersonnelDepartment personnelDepartment;
     public Company(TechnologyDepartment technologyDepartment,PersonnelDepartment personnelDepartment){  
        this.technologyDepartment=technologyDepartment;
        this.personnelDepartment=personnelDepartment;
    }  
    
    public void technologyDepartmentName(){
         System.out.println("技术部门名字："+technologyDepartment.getName());
    }
    public void personnelDepartmentName(){
         System.out.println("人力部门名字："+personnelDepartment.getName());
    }
}  
public class TechnologyDepartment{ 
    private String name;
     public String getName(){  
        return this.name;
    }  
}  
public class PersonnelDepartment{ 
    private String name;
     public String getName(){  
        return this.name;
    }  
}  
```

### 5.泛化关系(Generalization)

 <img src="/img/post/classDiagramOfDesignPattern/generalization.jpg" style="width:100%" />
 
+ 定义：泛化关系在java中表现为继承关系，继承表示类与类（或者接口与接口）之间的父子关系。
+ java中的表现：用关键字extends表示继承关系。
+ 类图分析：继承关系用实线+空心箭头表示，箭头指向父类。
+ 代码样例：

```java
public class People extends Animal{  
     public void write(){  
        System.out.println("人类会写字。");
    }  
}  
public class Animal{  
     public void eat(){  
        System.out.println("动物会吃东西。");
    }  
     public void sleep(){  
        System.out.println("动物会睡觉。");
    }  
}  
```

### 6.实现关系(Realization)

 <img src="/img/post/classDiagramOfDesignPattern/realization.jpg" style="width:100%" />
 
+ 定义：表示一个类实现一个或多个接口的方法。
+ java中的表现：使用implements表示。
+ 类图分析：实现关系用虚线+空心箭头表示，箭头指向接口。
+ 代码样例：

```java
public class People implements IPeople{  
     public void write(){  
        System.out.println("怎么写字。");
    }  
     public void eat(){  
        System.out.println("怎么吃饭。");
    }  
}  
public interface IPeople{  
      void eat();
      void write();
}  
```

### 参考资料

1.[设计模式](http://design-patterns.readthedocs.io/zh_CN/latest/read_uml.html "Title")

