---
layout: page
title: zij
description: A canon of deep learning optimization algorithms. 740 methods across 11 categories, with 100+ implemented as a PyTorch library.
importance: 1
category: library
github: https://github.com/junaidaliop/zij
img: assets/img/projects/zij.svg
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "zij",
  "alternateName": "A canon of deep learning optimization algorithms",
  "description": "A canon of deep learning optimization algorithms. 740 methods across 11 categories, with 100+ implemented as a PyTorch library.",
  "url": "https://junaidaliop.github.io/zij/",
  "codeRepository": "https://github.com/junaidaliop/zij",
  "programmingLanguage": "Python",
  "runtimePlatform": "PyTorch",
  "license": "https://www.apache.org/licenses/LICENSE-2.0",
  "author": { "@id": "https://junaidaliop.github.io/#person" },
  "keywords": "deep learning optimizers, PyTorch, machine learning, neural network optimization, SGD, Adam, AdamW, AdaBelief, Adafactor, Adam-mini, Adan, APOLLO, GaLore, LAMB, LARS, Lion, LOMO, MADGRAD, Muon, Prodigy, RAdam, RMSprop, SAM, Schedule-Free, sharpness-aware minimization, memory-efficient optimizers, fractional-order optimization, second-order optimization, zeroth-order optimization, learning rate schedulers"
}
</script>

<a href="https://junaidaliop.github.io/zij/"
   target="_blank" rel="noopener"
   class="btn-companion">Open the zij website</a>

A zij (Arabic: زِيج, pronounced "zeej") is an astronomical handbook from the Islamic golden age: a set of tables and computational methods that astronomers consulted instead of re-deriving the field from scratch. The best known is the Zīj al-Sindhind of Muḥammad ibn Mūsā al-Khwārizmī, whose Latinized name became the word *algorithm* and whose book *al-Jabr* gave us the word *algebra*. This project takes the name in that spirit. One reference for the optimization algorithms of machine learning: the equation, the paper, and runnable code in one place.

The Canon spans 740 methods across 11 categories, with 100+ implemented as a PyTorch library. The categories are first-order, memory-efficient, fractional-order, distributed, second-order, zeroth-order, privacy-preserving, sharpness-aware, quantum-inspired, learning-rate-free, and learning-rate schedulers. Each entry lists the canonical name, publication venue, paper reference, code availability, and the corresponding `zij` class name where applicable. The fractional-order category is the research arm of this project: it carries work on fractional-calculus-inspired deep learning optimization and fractional-order accelerated gradient methods.

Methods mirror the `torch.optim` structure so they act as drop-in replacements. Install via `pip install zij`. The library ships 100+ optimizers. These range from classical methods (SGD, Adam, AdamW, LBFGS, LARS, LAMB) to recent variants such as Muon, Lion, Prodigy, the SAM family, and Schedule-Free. Memory-efficient designs (GaLore, LOMO, AdaLomo, APOLLO, Adafactor) and other specialized techniques (Adam-mini, Adan, AdaBelief, RAdam, MADGRAD) are included as well. It also interoperates with `transformers.TrainingArguments` via the `optim` parameter, including bitsandbytes and torchao optimizers. JAX and TensorFlow ports following the same documentation standard are planned. Released under Apache-2.0.

**Companion website:** [junaidaliop.github.io/zij](https://junaidaliop.github.io/zij/)  
**Source code:** [github.com/junaidaliop/zij](https://github.com/junaidaliop/zij)

## Explore the Canon

<div id="zij-canon" data-src="{{ '/assets/json/zij_optimizers.json' | relative_url }}">
  <div class="zij-canon-controls">
    <input type="search" id="zij-search" class="zij-search" placeholder="Search optimizers by name, venue, or class" aria-label="Search the zij optimizer Canon">
    <label class="zij-impl-toggle"><input type="checkbox" id="zij-impl-only"> Implemented only</label>
  </div>
  <div class="zij-canon-chips" id="zij-chips" role="group" aria-label="Filter by category"></div>
  <div class="zij-canon-meta" id="zij-meta">Loading the Canon snapshot…</div>
  <div class="zij-canon-tablewrap">
    <table class="zij-canon-table">
      <thead>
        <tr><th>Optimizer</th><th>Category</th><th>Venue</th><th>Paper</th><th>Code</th><th>zij</th></tr>
      </thead>
      <tbody id="zij-rows"></tbody>
    </table>
  </div>
  <noscript>
    The interactive Canon table needs JavaScript. Browse the full Canon on the
    <a href="https://junaidaliop.github.io/zij/" target="_blank" rel="noopener">companion website</a>.
  </noscript>
</div>

<script src="{{ '/assets/js/zij-table.js' | relative_url }}" defer></script>

<div class="cta-callout" markdown="1">

### Looking for active contributors

zij welcomes collaboration on new directions in AI/ML optimization. If you have published a method you would like added to the Canon, a reference implementation for an existing entry, a new category, or a survey to co-author, please get in touch using the contact details on the [about page](/about/).

</div>
