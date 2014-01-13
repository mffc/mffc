---
layout: default
title: 文字及影音 
lang: zh-hk
categories: 
  - zh-hk
  - mag
---
<div class="container">
<div class="row">
{% for entry in site.categories.mag %}
{% if page.lang == entry.lang %}
   <div class="col-lg-3 col-md-4 col-sm-5">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
     {% if entry.url == "/mag/ausmag/" %}
              <img src="{{site.baseurl}}/images/OZ_icon.jpg" class="img-responsive">
              {% elsif entry.url == "/mag/mag/" %}
              <img src="{{site.baseurl}}/images/Mag.jpg" class="img-responsive">
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
