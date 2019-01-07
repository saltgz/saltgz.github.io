---
layout: base
title: Publications
permalink: publications.html
---
{% assign posts = site.posts | where: "categories","publications" %}
{% for post in posts %}
#### {{ post.title }}
{{ post.content }}
{% endfor %}
