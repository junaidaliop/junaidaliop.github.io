---
layout: page
title: ISIC-2024 SLICE-3D
description: An efficiency-frontier, single-dataset, no-external-data study of skin-lesion classification on ISIC-2024 SLICE-3D.
img:
importance: 2
category: research
github: https://github.com/junaidaliop/isic2024-tbp
redirect: https://junaidaliop.github.io/isic2024-tbp/
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  "name": "ISIC-2024 SLICE-3D: a quality vs. efficiency frontier",
  "description": "A single-dataset, no-external-data, no-synthetic study of melanoma triage on ISIC-2024 SLICE-3D. Headline result: 0.1738 stack OOF pAUC@80%TPR at 15.84M parameters, 2.46 GFLOPs, and 60.9 ms CPU latency.",
  "url": "https://junaidaliop.github.io/isic2024-tbp/",
  "codeRepository": "https://github.com/junaidaliop/isic2024-tbp",
  "programmingLanguage": "Python",
  "runtimePlatform": "PyTorch",
  "author": [
    {
      "@type": "Person",
      "name": "Muhammad Junaid Ali Asif Raja",
      "url": "https://junaidaliop.github.io/",
      "affiliation": {
        "@type": "Organization",
        "name": "National Yunlin University of Science and Technology"
      }
    },
    {
      "@type": "Person",
      "name": "Adil Sultan",
      "affiliation": {
        "@type": "Organization",
        "name": "National Yunlin University of Science and Technology"
      }
    },
    {
      "@type": "Person",
      "name": "Shahzaib Ahmed Hassan",
      "affiliation": {
        "@type": "Organization",
        "name": "National Yunlin University of Science and Technology"
      }
    }
  ],
  "keywords": "ISIC 2024, SLICE-3D, melanoma classification, skin lesion classification, dermoscopy, partial AUC, pAUC, LightGBM, CatBoost, ConvNeXt-V2, gradient boosted trees, image classification, medical imaging, efficient deep learning, mixup, weight EMA, ugly duckling features, patient-grouped cross-validation"
}
</script>

A single-dataset, no-external-data, no-synthetic study of melanoma triage from 3D total-body photography. The task is to classify 393 malignant lesions among 400,666 benign crops using only the ISIC-2024 SLICE-3D dataset, with no external dermoscopy archives and no diffusion-synthesised positives.

The ISIC-2024 leaderboard winners reached pAUC@80%TPR ≈ 0.173, but only by importing external dermoscopy data and roughly 30,000 synthetic malignant lesions. This work bans both, and asks a sharper question: how much pAUC can you buy per unit of inference cost using SLICE-3D alone? Rather than reporting one number, the project lays out a transparent quality vs. efficiency frontier.

Headline result: 0.1738 stack OOF pAUC@80%TPR at 15.84M parameters, 2.46 GFLOPs, and 60.9 ms CPU latency per inference. The tabular GBDT baseline alone scores 0.1689 and the image expert alone scores 0.15821. The pipeline combines a LightGBM tabular expert over intrinsic engineered features (geometry, L\*a\*b\* colour, border and shape, 3D body position, patient-relative "ugly-duckling" deviation, fold-local target encoding) with a small ImageNet-pretrained ConvNeXt-V2-nano image backbone at 224 px. The image expert is trained with AdamW and cosine schedule under a heavy augmentation stack (brightness/contrast, blur/noise, distortions, CLAHE, hue-saturation, shift-scale-rotate, coarse-dropout) alongside mixup α=0.2, label smoothing 0.05, weight EMA 0.995, and negative undersampling. A trivial rank-average combiner produces the final score.

Validation uses patient-grouped, target-stratified 5-fold cross-validation frozen at initialization, with the official pAUC scorer independently verified as numerically identical to the implementation. The README also documents negative results: learned mixture-of-experts gating, meta-learner stacking, embedding injection, heavy transformers, and aggressive EMA smoothing all degraded performance against simpler alternatives.

The claim is narrow and honest. This study does not claim to beat the unconstrained leaderboard winner's private pAUC. It claims state of the art within the no-external-data, no-synthetic, single-dataset class.

Produced as a Neural Networks course project at National Yunlin University of Science and Technology by team Pakistan.AI: Muhammad Junaid Ali Asif Raja, Adil Sultan, and Shahzaib Ahmed Hassan. Instructor: Prof. Hsuan-Ting Chang.

**Companion website:** [junaidaliop.github.io/isic2024-tbp](https://junaidaliop.github.io/isic2024-tbp/)  
**Source code:** [github.com/junaidaliop/isic2024-tbp](https://github.com/junaidaliop/isic2024-tbp)
