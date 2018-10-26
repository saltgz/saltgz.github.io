---
layout: default
title: Publications
permalink: publications.html
---

{% assign panelcounter = 0 %}

<div class="panel-group" id="accordion">

  {% assign postsByYear = site.posts | where: "categories","publications" | group_by_exp:"post", "post.date | date: '%Y'" %}

  {% for year in postsByYear %}

    <div class="panel panel-info">
      
      <div class="panel-heading">
        <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#pannello-{{ panelcounter }}">{{ year.name }}</a>
      </div>

      {% assign itemcounter = 1 %}

      <div id="pannello-{{ panelcounter }}" class="panel-collapse collapse">
      
        {% for post in year.items %}
      
          <div class="panel-body">
            <div class="list-group">
              <strong>{{ itemcounter }}.</strong> {{ post.author }}, <em>{{ post.title }}</em> {{ post.publisher }}. {% if post.paper_url %}<a target="_blank" href="{{ post.paper_url }}">[PDF]</a>{% endif %} {% if post.slides_path %}<a target="_blank" href="{{ post.slides_path }}">[SLIDES]</a>{% endif %}
            </div>
          </div>
          <hr>

          {% assign itemcounter = itemcounter | plus: 1 %}

        {% endfor %}

      </div>

    </div>

  {% assign panelcounter = panelcounter | plus: 1 %}

  {% endfor %}

</div>
