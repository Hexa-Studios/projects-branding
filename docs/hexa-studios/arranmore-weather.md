---
layout: default
title: Arranmore Weather
nav_order: 20
parent: Hexa Internal Projects
---

# Arranmore Weather
{: .no_toc }

1. TOC
{:toc}


## Main logo

This is the main logo for the ferry, but doesn't scale well for smaller sizes. The app icon is better for smaller screens.

![Arranmore Weather Logo]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/ios-icon.png)
{: .i-half}

![Arranmore Weather Round Logo]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/splash-icon-1024.png)
{: .i-half}

[Download Square]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/ios-icon.png){: .btn .btn-blue }
[Download Round]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/splash-icon-1024.png){: .btn .btn-blue }

## Alternate Logos

Often there are multiple formats of the same logo, to suit different use cases. The alternates will be listed here.

![Alternate Graphic]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/FeatureGraphic.png)

[Download]({{ site.baseurl }}/assets/images/hexa-studios/projects/arranmore-weather/FeatureGraphic.png){: .btn .btn-blue }

---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions. Note, the use of gradients in these designs.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#1d65a6" ></span> Blue #1d65a6 | Main Background Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#731d23" ></span> Red #731d23 | Accent Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#206e48" ></span> Green #206e48 | Primary Logo Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#9bc2e1" ></span> Blue Gradient #9bc2e1 | Gradient Colour |

## Fonts

Links to all the fonts used throughout the project for download.

* Logo Josefins Sans
* Text (Roboto)

[View Josefins Font](https://fonts.google.com/specimen/Josefin+Sans){: .btn .btn-outline }

---

## Images

Some background images for us on the website and posters.

### Promotional

{% for image in site.static_files %}
{% if image.path contains "/assets/images/hexa-studios/projects/arranmore-weather/promo" %}
![Arranmore Weather Screenshots]({{ site.baseurl }}{{ image.path }})
{% endif %}
{% endfor %}

### Screenshots

{% for image in site.static_files %}
{% if image.path contains "/assets/images/hexa-studios/projects/arranmore-weather/screenshots" %}
![Arranmore Weather Screenshots]({{ site.baseurl }}{{ image.path }})
{: .i-half}
{% endif %}
{% endfor %}

---
