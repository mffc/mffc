---
layout: default
title: 青年關係事工
categories: youth
---
{% for entry in site.categories.youth %}
   <div class="col-lg-3 col-lg-push-2 col-md-4 col-md-push-3 col-sm-5 col-sm-push-3 md-offset">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
              <img src="{{site.baseurl}}/images/mainCenter.jpg" class="img-responsive">
              <div class="caption">
                <h3 class="text-center">{{entry.title}}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
{% endfor %}

