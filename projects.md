---
layout: base
title: Projects
permalink: projects.html
---
{% assign posts = site.posts | where: "categories","projects" %}
{% for post in posts %}
#### {{ post.title }}
{{ post.content }}
{% endfor %}
