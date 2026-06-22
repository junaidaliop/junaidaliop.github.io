---
layout: page
title: projects
permalink: /projects/
description: zij, a canon of deep learning optimization algorithms, and ongoing research projects in AI and machine learning.
nav: true
nav_order: 4
display_categories: false
horizontal: false
---

<!-- pages/projects.md: two vertical cards side by side (image on top, text below) -->
{% assign sorted_projects = site.projects | sort: "importance" %}
<div class="projects">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
