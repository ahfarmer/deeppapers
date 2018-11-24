---
title: CGNet
date: "2018-11-24T04:24:51.671Z"
tags: "vision, mobile"
paper_title: "CGNet: A Light-weight Context Guided Network for Semantic Segmentation"
paper_date: "2018-11-20"
paper_authors: "Tianyi Wu, Sheng Tang, Rui Zhang, Yongdong Zhang"
paper_link: https://arxiv.org/abs/1811.08201
paper_pdf: https://arxiv.org/pdf/1811.08201
---

I haven't started reading this paper yet, but I am really excited to get into it.

It seems like most segmentation neural networks are pretty slow. For instance UNet takes 200ms to do one 512x512 image. 200ms is fast but think about how slow it becomes as you scale up the image size - 1024x1024 would take 800ms and 2048x2048 would take 3.2 seconds. And of course this is on a fast GPU, which isn't where you really run your inferences right?

I think there is likely some overlap between papers that try to do segmentation QUICKLY - like for live video - and those that try to do it on MOBILE. In both cases the network has to perform well, but in the mobile case memory is also constrained.
