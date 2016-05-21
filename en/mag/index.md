---
layout: default
title: Publications 
lang: en
categories: 
  - en
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
			  {% if entry.url == "/en/mag/ausmag/" %}
              <img src="{{site.baseurl}}/images/OZ_icon.jpg" class="img-responsive">
              {% elsif entry.url == "/en/mag/mag/" %}
              <img src="{{site.baseurl}}/images/Mag.jpg" class="img-responsive">
              {% elsif entry.url == "/en/mag/stayconnected/" %}
              <img src="{{site.baseurl}}/images/Stay_connected.jpg" class="img-responsive">
              {% else %}
              <img src="{{site.baseurl}}/images/mainRight.png" class="img-responsive">
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

