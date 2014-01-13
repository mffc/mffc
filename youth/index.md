---
layout: default
title: 婚前及青年關係事工
lang: zh-hk
categories: 
  - zh-hk
  - youth
---
<div class="container">
<div  style="margin: auto">
{% for entry in site.categories.youth %}
{% if entry.lang == page.lang %}
   <div class="col-lg-3 col-md-4 col-sm-5">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
                  {% if entry.url == "/youth/premarcounsel/" %}
              <img src="{{site.baseurl}}/images/Premarital.jpg" class="img-responsive">
              {% elsif entry.url == "/youth/youth/" %}
              <img src="{{site.baseurl}}/images/Youth Ministry 2.jpg" class="img-responsive">
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

