---
layout: default
title: Teaching
permalink: teaching.html
---

<div class="panel-group" id="accordion">
  
{% assign counter = 1 %}
{% assign sorted-posts = site.posts | where: "categories","teaching" %}
{% for item in sorted-posts %}
 
<div class="panel panel-danger">
 
<div class="panel-heading">

<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#pannello-{{ counter }}">

{{ item.title }}

</a>
 
</div>

<div id="pannello-{{ counter }}" class="panel-collapse collapse">

<div class="panel-body">

{{ item.shortdesc }}

{{ item.content }}

</div>
  
</div>

</div>

{% assign counter = counter | plus: 1 %}
{% endfor %}

</div>
