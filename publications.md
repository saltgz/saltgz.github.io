---
layout: base
title: Publications
permalink: publications.html
---
{% assign posts = site.posts | where: "categories","publications" %}
{% for post in posts %}
<div class="card mb-3">
  <h5 class="card-header">{{ post.title }}</h5>
  <div class="card-body">
    {{ post.content }}
  </div>
</div>
{% endfor %}
