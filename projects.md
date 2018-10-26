---
layout: default
title: Projects
permalink: projects.html
---

<div class="panel-group" id="accordion">
  
{% assign counter = 1 %}
{% assign sorted-posts = site.posts | where: "categories","projects" %}
{% for item in sorted-posts %}
 
<div class="panel panel-success">
 
<div class="panel-heading">

<a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#pannello-{{ counter }}">

{{ item.title }}

</a>
 
</div>

<div id="pannello-{{ counter }}" class="panel-collapse collapse">

<div class="panel-body">

{{ item.content }}

</div>
  
</div>

</div>

{% assign counter = counter | plus: 1 %}
{% endfor %}

</div>