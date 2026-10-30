---
layout: page
permalink: /publications/
title: publications
description: Research publications grouped by direction
nav: true
nav_order: 1
---
<div class="publications">
  <nav class="publication-topics" aria-label="Research directions">
    {% for direction in site.data.research_directions %}
      <a href="#{{ direction.id }}">{{ direction.title }}</a>
    {% endfor %}
  </nav>

  {% for direction in site.data.research_directions %}
    <section id="{{ direction.id }}" class="publication-topic">
      <h2>{{ direction.title }}</h2>
      <p>{{ direction.description }}</p>
      {% if direction.id == 'quantum' %}
        {% bibliography -f papers -q @*[topic=quantum]* %}
      {% elsif direction.id == 'imaging' %}
        {% bibliography -f papers -q @*[topic=imaging]* %}
      {% elsif direction.id == 'industrial' %}
        {% bibliography -f papers -q @*[topic=industrial]* %}
      {% endif %}
    </section>
  {% endfor %}
</div>

