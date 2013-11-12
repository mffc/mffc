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
              <img src="{{site.baseurl}}/images/mainRight.png" class="img-responsive">
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
