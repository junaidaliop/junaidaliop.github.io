---
layout: page
title: zij
description: A PyTorch canon documenting 740 deep learning optimizers across 11 categories, with 106 reference implementations and paper links.
img:
importance: 1
category: tools
github: https://github.com/junaidaliop/zij
---

zij (Arabic: زِيج, "zeej") is a reference library that gathers the equation, the original paper, and runnable PyTorch code for deep learning optimization methods in one place. The name borrows from the Islamic Golden Age astronomical handbooks — compendia of computational procedures that spared practitioners from re-deriving foundational results — and applies the same idea to modern optimizer research.

The Canon currently catalogues 740 methods organized into eleven categories: first-order, memory-efficient, fractional-order, distributed/communication-efficient, second-order and orthogonalized, zeroth-order, privacy-preserving, sharpness-aware, quantum and quantum-inspired, learning-rate-free, and learning-rate schedulers. Each entry lists the canonical name, publication venue, peer-reviewed paper, and the best available implementation source, with a dash indicating paper-only or license-incompatible code.

On the implementation side, zij ships 106 ready-to-use optimizers covering classical methods (SGD, Adam, AdamW, RMSprop, Adagrad, LARS, LAMB), recent additions (Muon, Lion, Prodigy, SAM family, Schedule-Free variants), memory-efficient designs (GaLore, LOMO, AdaLomo, APOLLO, Adafactor), and specialized techniques (Adam-mini, Adan, AdaBelief, RAdam, MADGRAD). The API exposes both direct constructors and a lookup interface (`zij.load_optimizer`, `zij.list_optimizers`) and interoperates with `transformers.TrainingArguments` via the `optim` parameter, including bitsandbytes and torchao optimizers. JAX and TensorFlow ports following identical standards are planned.

**Companion website:** [junaidaliop.github.io/zij](https://junaidaliop.github.io/zij/)  
**Source code:** [github.com/junaidaliop/zij](https://github.com/junaidaliop/zij)
