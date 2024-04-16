---
layout: default
title: Scéal Ó Bhéal
nav_order: 1
nav_exclude: false
parent: Seo Árainn Mhór
---

# Scéal Ó Bhéal
{: .no_toc }

1. TOC
{:toc}

# Description 

The Scéal Ó Bhéal website is a sister project to the Seo Árainn Mhór mobile app. It contains web pages with audio files telling stories from Árainn Mhór and are available in the Seo Árainn Mhór mobile app.

# Websites

Scéal Ó Bhéal Website: [https://www.xn--scalbhal-c1ae1i.com/](Scéal Ó Bhéal)

_Please note that this website has Irish characters and therefore the URL can appear differently to Scéal Ó Bhéal._

Scéal Ó Bhéal administration is done via a Directus web platform, the admin URL is available on request:

Scéal Ó Bhéal Website: [https://data.xn--scalbhal-c1ae1i.com/](Scéal Ó Bhéal Admin)

# Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#BD2816" ></span> Red #BD2816 | Main Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#65150B" ></span> Dark Red #65150B | Dark Colour |

# Fonts

The font is Stonecross - it doesn't include Á, ó - these are custom icons.

[Stonecross Font](https://www.dafont.com/stonecross.font)

---

# Images

All images for Scéal Ó Bhéal

## Heritage Points

{% for image in site.static_files %}
{% if image.path contains "/assets/images/seo-arainn-mhor/heritage-points/" %}
![App Store Heritage Point Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

# Notes

The Heritage Council funded this project and as such - their logo should always be featured on materials created.

[Heritage Council Guidelines](https://www.heritagecouncil.ie/content/files/Community-Groups-and-projects-acknowledging-hc-funding.pdf){: .btn .btn-blue }