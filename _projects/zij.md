---
layout: page
title: zij
description: A canon of deep learning optimization algorithms. 740 methods across 11 categories, with 100+ implemented as a PyTorch library.
img:
importance: 1
category: library
github: https://github.com/junaidaliop/zij
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
  "author": {
    "@type": "Person",
    "name": "Muhammad Junaid Ali Asif Raja",
    "url": "https://junaidaliop.github.io/",
    "affiliation": {
      "@type": "Organization",
      "name": "National Yunlin University of Science and Technology"
    }
  },
  "keywords": "deep learning optimizers, PyTorch, machine learning, neural network optimization, SGD, Adam, AdamW, AdaBelief, Adafactor, Adam-mini, Adan, APOLLO, GaLore, LAMB, LARS, Lion, LOMO, MADGRAD, Muon, Prodigy, RAdam, RMSprop, SAM, Schedule-Free, sharpness-aware minimization, memory-efficient optimizers, fractional-order optimization, second-order optimization, zeroth-order optimization, learning rate schedulers"
}
</script>

A zij (Arabic: زِيج, pronounced "zeej") is an astronomical handbook from the Islamic golden age: a set of tables and computational methods that astronomers consulted instead of re-deriving the field from scratch. The best known is the Zīj al-Sindhind of Muḥammad ibn Mūsā al-Khwārizmī, whose Latinized name became the word *algorithm* and whose book *al-Jabr* gave us the word *algebra*. This project takes the name in that spirit. One reference for the optimization algorithms of machine learning: the equation, the paper, and runnable code in one place.

The Canon spans 740 methods across 11 categories, with 100+ implemented as a PyTorch library. The categories are first-order, memory-efficient, fractional-order, distributed, second-order, zeroth-order, privacy-preserving, sharpness-aware, quantum-inspired, learning-rate-free, and learning-rate schedulers. Each entry lists the canonical name, publication venue, paper reference, code availability, and the corresponding `zij` class name where applicable.

Methods mirror the `torch.optim` structure so they act as drop-in replacements. Install via `pip install zij`. The library ships 100+ ready-to-use optimizers spanning classical methods (SGD, Adam, AdamW, LBFGS, LARS, LAMB), recent variants (Muon, Lion, Prodigy, SAM family, Schedule-Free), memory-efficient designs (GaLore, LOMO, AdaLomo, APOLLO, Adafactor), and specialized techniques (Adam-mini, Adan, AdaBelief, RAdam, MADGRAD). It also interoperates with `transformers.TrainingArguments` via the `optim` parameter, including bitsandbytes and torchao optimizers. JAX and TensorFlow ports following the same documentation standard are planned. Released under Apache-2.0.

**Companion website:** [junaidaliop.github.io/zij](https://junaidaliop.github.io/zij/)  
**Source code:** [github.com/junaidaliop/zij](https://github.com/junaidaliop/zij)

### Looking for active contributors

zij welcomes collaboration on new directions in AI/ML optimization. If you would like to propose a new method, contribute a reference implementation, open a new category, or co-author a survey, please reach out via the contact details on the [about page](/about/).
