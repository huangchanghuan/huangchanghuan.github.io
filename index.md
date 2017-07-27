---
layout: main
title: Home-HuangChanghuan.com
---
{% for category in site.categories %}
            {% for post in category.last %}
<div class="article-wrap">
                <h2><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></h2>
                <p class="article-attrs">
                    <span><i class="fa fa-clock-o"></i>{{ post.date | date_to_string }}</span>
                    <span><i class="fa fa-book"></i><a href="/categories/{{post.category}}">{{post.category}}</a></span>
                </p>
                {{ post.excerpt }}
                {{ post.description }}
</div>
            {% endfor %}
{% endfor %}