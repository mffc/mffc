---
layout: default
title: MER And Marital Ministry
lang: en
categories: 
  - en
  - mer
---
<div class="container">
<div class="row">
{% for entry in site.categories.mer %}
  {% if entry.lang == page.lang %}
   <div class="col-lg-3 col-lg-push-2 col-md-4 col-md-push-3 col-sm-5 col-sm-push-3 md-offset">
      <div style="margin:1em">
        <div class="white_frame">
          <div style="margin : 5%">
            <a href="{{site.baseurl}}{{entry.url}}" class="thumbnail">
			 {% if entry.url == "/en/mer/counciling/" %}
              <img src="{{site.baseurl}}/images/marriage_counciling.jpg" class="img-responsive">
              {% elsif entry.url == "/en/mer/mer/" %}
              <img src="{{site.baseurl}}/images/MER_1-2.jpg" class="img-responsive">
              {% elsif entry.url == "/en/mer/mer2/" %}
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
