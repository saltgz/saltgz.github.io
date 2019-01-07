---
layout: base
title: Teaching
permalink: teaching.html
---
{% assign posts = site.posts | where: "categories","teaching" %}
{% for post in posts %}
#### {{ post.title }}
{{ post.content }}
{% endfor %}
