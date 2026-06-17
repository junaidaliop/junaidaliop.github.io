---
layout: page
title: ISIC-2024 SLICE-3D
description: Efficiency-frontier melanoma triage on ISIC-2024 SLICE-3D combining a LightGBM/CatBoost tabular expert with a ConvNeXt-V2-nano image expert.
img:
importance: 2
category: research
github: https://github.com/junaidaliop/isic2024-tbp
---

This project tackles melanoma triage on the ISIC-2024 SLICE-3D task — classifying roughly 401,059 lesion crops from about 1,042 patients with only 393 malignant cases (0.098% prevalence) — under a self-imposed constraint regime: a single dataset, no external dermoscopy archives, and no generative augmentation. Rather than chasing a single leaderboard number, the work reframes the problem as a three-axis Pareto frontier over accuracy, parameter count, and CPU latency.

The pipeline combines two independent experts. The tabular pathway engineers geometry, L*a*b* color-space, border/shape, 3D body-position, and patient-relative "ugly-duckling" deviation features with fold-local target encoding, fed into bagged LightGBM and CatBoost models with manual undersampling. The image pathway uses a small ImageNet-pretrained ConvNeXt-V2-nano backbone at 224 px, trained with AdamW and cosine scheduling under a heavy augmentation stack — brightness/contrast, blur/noise, distortions, CLAHE, hue-saturation, shift-scale-rotate, coarse-dropout — alongside mixup (α = 0.2), label smoothing 0.05, weight EMA 0.995, and negative undersampling. A parameter-free rank-average of the two normalized scores delivers the headline stack.

Reported pAUC@80%TPR (bounded in [0, 0.20]) is 0.16890 for the tabular expert, 0.15821 for the image expert, and 0.17376 for the rank-averaged stack at 15.84M parameters, 2.46 GFLOPs, and 60.9 ms CPU latency. Validation uses patient-grouped, target-stratified 5-fold cross-validation frozen at initialization, with the official pAUC scorer independently verified as numerically identical to the implementation. The README explicitly documents negative results — learned mixture-of-experts gating, meta-learner stacking, embedding injection, heavy transformers, and aggressive EMA smoothing all degraded performance versus simpler alternatives.

The repository is organized around `src/cv.py`, `src/features.py`, `src/gbdt.py`, `src/vision/`, and `src/efficiency.py`, with pinned dependencies and configuration-driven experiments. It was produced as a Neural Networks course project at National Yunlin University of Science and Technology by team Pakistan.AI — Muhammad Junaid Ali Asif Raja, Adil Sultan, and Shahzaib Ahmed Hassan — under the instruction of Prof. Hsuan-Ting Chang.

**Companion website:** [junaidaliop.github.io/isic2024-tbp](https://junaidaliop.github.io/isic2024-tbp/)  
**Source code:** [github.com/junaidaliop/isic2024-tbp](https://github.com/junaidaliop/isic2024-tbp)
