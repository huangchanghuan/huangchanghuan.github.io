---
layout: post
title: elasticsearch(1)
category: searchengine
tags: ['elasticsearch']
excerpt_separator: <!--more-->
description: '<p>搜索引擎searchEngine,学习记录</p>
<a href="/设计模式/2017/11/16/elasticsearch1">View Detail<i class="fa fa-angle-right"></i></a>'
---
<!--more-->
<div class="article-wrap">
    <h1 id="t1" class="article-title">elasticsearch(1)</h1><!--标题-->
    <p class="article-attrs">
        <span><i class="fa fa-clock-o"></i>12 July 2016</span>
        <span><i class="fa fa-book"></i><a href="/categories/searchengine">searchengine</a></span><!--分类-->
        <span><i class="fa fa-tags"></i><a href="/tags/elasticsearch"> elasticsearch</a></span><!--标签-->
    </p>
 </div>
 
 * 目录
 {:toc}

##  `1.前言`

elasticsearch学习临时记录,以后整理

##  `2. restful Api`

### `2.1 删除索引类型下的所有数据`

    curl -X DELETE localhost:9200/couponsdb/ss_hj_product/_query?pretty
     -d '{ "query": { "match_all": {} } }'

### `2.1 删除索引类型下的所有数据`


## `3.参考资料`








