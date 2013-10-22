---
layout: default
title: 夫婦營及婚姻事工
categories: mer
---
{% for entry in site.categories.mer %}
   <div class="col-lg-3 col-lg-push-2 col-md-4 col-md-push-3 col-sm-5 col-sm-push-3 md-offset">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
              <img src="{{site.baseurl}}/images/mainLeft.jpg" class="img-responsive">
              <div class="caption">
                <h3 class="text-center">{{entry.title}}</h3>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
{% endfor %}

