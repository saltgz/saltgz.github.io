---
layout: base
title: Teaching
permalink: teaching.html
---
{% assign posts = site.posts | where: "categories","teaching" %}
{% for post in posts %}
<div class="card mb-3">
  <h5 class="card-header">{{ post.title }}</h5>
  <div class="card-body">
    {{ post.content }}
  </div>
</div>
{% endfor %}
