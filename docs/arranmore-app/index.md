---
layout: default
title: Arranmore App
nav_order: 30
nav_exclude: true
---

# Arranmore App
{: .no_toc }

1. TOC
{:toc}

[Download All]({{ site.baseurl }}/assets/images/arranmore-app/arranmore-app.zip){: .btn .btn-blue }

All images and designs are subject to change.

## Main logo

TBD.


## Promo Images

Some promotional images and mockups for the project.

![Arranmore App]({{ site.baseurl }}/assets/images/arranmore-app/app-promo.png)

### Mockups

{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-app/mockups" %}
![Promo]({{ site.baseurl }}{{ image.path }})
{: .i-quarter}
{% endif %}
{% endfor %}

---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#319795" ></span> Teal #319795 | Main Teal Colour (Web) |

## Fonts

TBD. 

---
<!-- 
## Images

### Promotional

{% for image in site.static_files %}
{% if image.path contains "/assets/images/the-only-plaice/promo/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
{% endif %}
{% endfor %} -->