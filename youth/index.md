---
layout: default
title: 婚前及青年關係事工
lang: zh-hk
categories: 
  - zh-hk
  - youth
---
<div class="container">
<div  style="margin: 0px auto">
{% for entry in site.categories.youth %}
{% if entry.lang == page.lang %}
   <div class="col-lg-3 col-md-4 col-sm-5">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
              <img src="{{site.baseurl}}/images/mainCenter.png" class="img-responsive">
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

