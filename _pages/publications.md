---
layout: page
permalink: /publications/
title: publications
description: 30 publications, 27 indexed in the WoS Core Collection.
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
      <span class="scholar-number">30</span>
      <span class="scholar-label">Publications</span>
    </div>
    <div class="scholar-divider"></div>
    <div class="scholar-stat">
      <span class="scholar-number">27</span>
      <span class="scholar-label">WoS Indexed</span>
    </div>
  </div>
  <div class="scholar-source">
    Source: <a href="https://scholar.google.com/citations?user={{ site.data.scholar.id }}" target="_blank">Google Scholar</a>
  </div>
</div>
{% endif %}

{% include bib_search.liquid %}

<div class="topic-chips" id="topic-chips" role="group" aria-label="Filter publications by topic">
  <button type="button" class="topic-chip" data-topic="all" aria-pressed="true">all</button>
  <button type="button" class="topic-chip" data-topic="optimization" aria-pressed="false">optimization</button>
  <button type="button" class="topic-chip" data-topic="neuronal" aria-pressed="false">neuronal</button>
  <button type="button" class="topic-chip" data-topic="chaotic" aria-pressed="false">chaotic</button>
  <button type="button" class="topic-chip" data-topic="ecological" aria-pressed="false">ecological</button>
  <button type="button" class="topic-chip" data-topic="biomedical" aria-pressed="false">biomedical</button>
  <button type="button" class="topic-chip" data-topic="security" aria-pressed="false">security</button>
  <button type="button" class="topic-chip" data-topic="fluids" aria-pressed="false">fluids</button>
</div>

<div class="publications">

{% bibliography %}

</div>

<script src="{{ '/assets/js/publications.js' | relative_url | bust_file_cache }}" defer></script>
