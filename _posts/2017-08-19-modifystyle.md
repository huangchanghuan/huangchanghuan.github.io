---
layout: post
title: 个人博客github Pages重构
category: life
tags: ['Github']
excerpt_separator: <!--more-->
description: '<p>刚开始接触github Pages的时候，学习Liquid语言和Jekyll生成静态网站技术后，然后自己编写了网站，发布在github上面。由于Jekyll制作的是静态网站，不利一些动态功能制作，所以当时只简单的对文章做了分类的展示，缺少动态分类，动态标签，动态目录，动态时间归档，站内搜索，文章评论等功能。这几天花了点精力，重构网站，把缺少的功能都补上了，感觉把github Pages做成了一个资料库。</p>
<a href="/projects/2017/02/19/city-picker">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">个人博客github Pages重构</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>19 August 2017</span>
        <span><i class="fa fa-book"></i><a href="/categories/life">life</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/Github"> Github</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

## 前言

刚开始接触github Pages的时候，学习Liquid语言和Jekyll生成静态网站技术后，然后自己编写了网站，发布在github上面。由于Jekyll制作的是静态网站，不利一些动态功能制作，所以当时只简单的对文章做了分类的展示，缺少动态分类，动态标签，动态目录，动态时间归档，站内搜索，文章评论等功能。这几天花了点精力，重构网站，把缺少的功能都补上了，感觉把github Pages做成了一个资料库。

### 为什么重构

我平时习惯用OneNote整理资料，因为它强大的排版功能，笔记本的目录结构（相对EverNote可以笔记本下新建笔记本），资料搜索功能，实时跨设备同步。但是我在OneNote中并没有找到EverNote一样的标签功能，并不能把相关资料文章跨笔记本关联起来，而且资料文章阅读的时候不能生成目录结构（硬伤）。所以希望对文章做一个关联性比较好的整理，阅读一篇文章，展示文章目录框架，展示所有关联的分类文章，展示所有关联的标签文章。

### 问题总结

####  关于 PC端和手机端网页布局：
之前就得网站网页宽度都是自适应，head标签内添加

    <meta name="viewport" content="width=device-width, initial-scale=1" />

实现在PC端和手机端自动布局变化。但是重构后的网页是固定宽度的，手机端打开网页，不会整体自动缩小到屏幕大小，网上查找资料，都是自适应加viewport，后来发现只有去掉viewport才能实现我想要的效果：整体自适应，不改变布局样式。

#### 编码问题
目前标签和分类都是英文的，如果是中文，url中有中文，后台获取到的路径是utf-8编码的中文，我并没有找到Liquid转换的方法函数，而代码中使用了路径字符串判断是哪个分类和标签，所以如果使用中文，判断当前路径是哪个分类或标签的效果不能实现。

#### 关于搜索和siteMap
目前站内搜索用google的，国内的只有360搜索支持https（之前试过百度的http加载不出来），但是360并没有爬我的网站数据，上传siteMap的话估计也得两三个月能用，所以搜索不到站内的文章，看看以后能不能换360，毕竟google要翻墙。最后是sitemap不要经常变动，因为一般搜索引擎几个月才帮你更新一次sitemap，导致搜索不到自己网站的地址。
 
### 重构后的展示

<div class="article-gallery clearfix" itemscope itemtype="http://schema.org/ImageGallery" >
    <a href="/img/modifystyle/个人网站.jpg" data-size="810x1440"
       data-med="/img/modifystyle/个人网站.jpg" data-med-size="810x1440" data-author="(网页整体展示)"
       class="demo-gallery__img--main" >
        <img src="/img/modifystyle/个人网站.jpg" alt="" />
        <figure style="display: none;"> </figure>
    </a>
    <a href="/img/modifystyle/个人网站1.jpg" data-size="810x1440"
       data-med="/img/modifystyle/个人网站.jpg" data-med-size="810x1440" data-author="(网页整体展示)"
       class="demo-gallery__img--main" >
        <img src="/img/modifystyle/个人网站1.jpg" alt="" />
        <figure style="display: none;"> </figure>
    </a>
</div>

### 参考资料

1.[搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html "Title")

2.[Markdown 语法说明 (简体中文版)](http://wowubuntu.com/markdown/ "Title")

3.[Liquid语言语法参考](https://shopify.github.io/liquid/basics/introduction/ "Title")

4.[Jekyll搭建网站中文](http://jekyllcn.com/docs/home/ "Title")

5.[siteMap生成网站](https://www.xml-sitemaps.com/ "Title")

6.[google站内搜索](https://cse.google.com/cse/all "Title")

7.[google站长管理，上传siteMap](https://www.google.com/webmasters/tools/home?hl=en "Title")

8.[自适应网页设计（Responsive Web Design）](http://www.ruanyifeng.com/blog/2012/05/responsive_web_design.html "Title")
























