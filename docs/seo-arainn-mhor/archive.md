---
layout: default
title: Seo Árainn Mhór Archive
nav_order: 31
nav_exclude: false
parent: Seo Árainn Mhór
---

# Seo Árainn Mhór Archive
{: .no_toc }

1. TOC
{:toc}

## Presentation Decks 

Some of the presentations decks that were used to explain the app.

[Download Intro Deck]({{site.baseurl}}{{"assets/images/seo-arainn-mhor/decks/seo-arainnmhor-brief.pdf"}}){: .btn .btn-blue }

[Download Business Intro Deck]({{site.baseurl}}{{"assets/images/decks/seo-arainn-mhor/seo-arainnmhor-business-intro.pdf"}}){: .btn .btn-blue }

[View Video Intro on YouTube](https://youtu.be/8ArQRfxxTgI){: .btn .btn-blue }


This materials are not for distribution, just stored for archiving reasons

## App Images

{% for image in site.static_files %}
{% if image.path contains "/assets/images/seo-arainn-mhor/app/total/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

## Old App Example

{% for image in site.static_files %}
{% if image.path contains "/assets/images/seo-arainn-mhor/app/old/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}
