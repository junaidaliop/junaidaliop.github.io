---
layout: page
permalink: /publications/
title: publications
description: 27 publications across 23 WoS Core Collection indexed journals.
nav: true
nav_order: 2
---

{% if site.data.scholar.citations %}
<div class="scholar-card">
  <div class="scholar-card-inner">
    <div class="scholar-stat">
      <span class="scholar-number">{{ site.data.scholar.citations }}</span>
      <span class="scholar-label">Citations</span>
    </div>
    <div class="scholar-divider"></div>
    <div class="scholar-stat">
      <span class="scholar-number">{{ site.data.scholar.h_index }}</span>
      <span class="scholar-label">h-index</span>
    </div>
    <div class="scholar-divider"></div>
    <div class="scholar-stat">
      <span class="scholar-number">{{ site.data.scholar.i10_index }}</span>
      <span class="scholar-label">i10-index</span>
    </div>
    <div class="scholar-divider"></div>
    <div class="scholar-stat">
      <span class="scholar-number">27</span>
      <span class="scholar-label">Publications</span>
    </div>
    <div class="scholar-divider"></div>
    <div class="scholar-stat">
      <span class="scholar-number">23</span>
      <span class="scholar-label">WoS Journals</span>
    </div>
  </div>
  <div class="scholar-source">
    Source: <a href="https://scholar.google.com/citations?user={{ site.data.scholar.id }}" target="_blank">Google Scholar</a>
  </div>
</div>
{% endif %}

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
