---
layout: default
title: 夫婦營及婚姻事工
lang: zh-hk
categories:
  - mer
---
<div class="container">
<div class="row">
{% for entry in site.categories.mer %}
  {% if entry.lang == page.lang %}
   <div class="col-lg-3 col-md-4 col-sm-5">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
              {% if entry.url == "/mer/counselling/" %}
              <img src="{{site.baseurl}}/images/marriage_counselling.jpg" class="img-responsive">
              {% elsif entry.url == "/mer/mer/" %}
              <img src="{{site.baseurl}}/images/MER_1-2.jpg" class="img-responsive">
              {% elsif entry.url == "/mer/mer2/" %}
              <img src="{{site.baseurl}}/images/MER_2.jpg" class="img-responsive">
              {% else %}
              <img src="{{site.baseurl}}/images/mainLeft.jpg" class="img-responsive">
              {% endif %}
              <div class="caption">
                <h3 class="text-center">{{entry.title}}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  {% endif %}
{% endfor %}
</div>
</div>
