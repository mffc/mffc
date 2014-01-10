---
layout: page
title: 近期聚會及最新消息
lang: zh-hk
categories: 
  - zh-hk
  - news
  - whats_new
---
<div class="container">
<div class="row">
{% for entry in site.categories.whats_new %}
  {% if entry.lang == page.lang %}
   <div class="">
            <a href="{{site.baseurl}}{{entry.url}}" >
<p class="meta text-center">{{ entry.date | date_to_string }}</p>
<p>{{entry.excerpt}}</p>
            </a>
    </div>
  {% endif %}
{% endfor %}
</div>
</div>
