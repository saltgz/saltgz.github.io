---
published: false
layout: base
title: Blog
permalink: blog.html
---
{%- assign posts = site.posts | where: "categories","blog" -%}
{%- if posts.size > 0 -%}
  <div class="col-md-6 list-group">
    {%- for post in posts -%}
    {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
    <a href="{{ post.url | relative_url }}" class="list-group-item list-group-item-action">
      <div class="d-flex w-100 justify-content-between">
        <small>{{ post.author }}</small>
        <small>{{ post.date | date: date_format }}</small>
      </div>
      <h5 class="my-2">{{ post.title | escape }}</h5>
      {{ post.excerpt }}
      <small>
        {%- for tag in post.tags -%}
          {{ tag }}&nbsp;
        {%- endfor -%}
      </small>
    </a>
    {%- endfor -%}
  </div>
{%- endif -%}
