---
title: Albumentations
date: "2018-11-27T04:49:03.763Z"
tags: "augmentation, vision"
paper_title: "Albumentations: fast and flexible image augmentations"
paper_date: "2018-09-18"
paper_authors: "Alexander Buslaev, Alex Parinov, Eugene Khvedchenya, Vladimir I. Iglovikov, Alexandr A. Kalinin"
paper_link: https://arxiv.org/abs/1809.06839
paper_pdf: https://arxiv.org/pdf/1809.06839
---

This is a short paper by one of the winners of the Carvana Kaggle competition.

I'll summarize in a bullet list:

* data augmentations are crucial for vision problems
* different augmentations apply to different problems
* Albumentations is a fast [open source library](https://github.com/albu/albumentations) that lets you do any data augmentation you might want to do

The elastic deformations really stuck out for me. I first heard mention of elastic deformations in the UNet paper.

I'll definitely be using albumentations on my own projects.


## Data Augmentation is Hot

I've noticed a lot of recent papers on data augmentation.

Three out of the top four papers on the [CIFAR benchmark](https://benchmarks.ai/cifar-10) are mainly talking about data augmentation, including the top result.

In fact, that top result, "AutoAugment" kind of crushed the state of the art result before it. They achieved this by using reinforcement learning to search for the best data augmentations. Sounds like it would take a ton of GPU processing power, which is unsurprising since it is a Google Brain paper.

[This paper](https://arxiv.org/abs/1811.09030) also just came out a few days ago and what they are doing seems insane. They get good CIFAR results by cutting and pasting 4 separate training images together. They claim 2.19% error which would put them near the top of the CIFAR benchmark but not as good as that Google Brain paper.
