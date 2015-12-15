---
layout: default
title: Youth Ministry
lang: en
categories:
  - en 
  - youth
---
<div class="container">
<div  style="margin: auto">
{% for entry in site.categories.youth %}
  {% if entry.lang == page.lang %}
   <div class="col-lg-3 col-lg-push-2 col-md-4 col-md-push-3 col-sm-5 col-sm-push-3 md-offset">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
			  {% if entry.url == "/en/youth/premarcounsel/" %}
              <img src="{{site.baseurl}}/images/Premarital.jpg" class="img-responsive">
              {% elsif entry.url == "/en/youth/youth/" %}
              <img src="{{site.baseurl}}/images/Youth_ministry_2.jpg" class="img-responsive">
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
