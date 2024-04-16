---
layout: default
title: Pop Up Cinema
nav_exclude: false
nav_order: 15
---

# Pop Up Cinema Logos

{: .no_toc }

1. TOC
{:toc}

[Download All]({{ site.baseurl }}/assets/images/popup-cinema/popup-cinema.zip){: .btn .btn-blue }

# Main Logos

## Pop Up Cinema

This is the main logo, it's available in high resolution PNG and PDF formats.

![Pop Up Cinema Logo]({{ site.baseurl }}assets/images/popup-cinema/logos/black-transparent.png)
{: .i-half}

[Download PNG]({{ site.baseurl }}assets/images/popup-cinema/logos/black-transparent.png){: .btn .btn-blue }
[Download White Transparent]({{ site.baseurl }}assets/images/popup-cinema/logos/white-transparent.png){: .btn .btn-blue }

# Alternates

Different colour options are available here:

{% for image in site.static_files %}
{% if image.path contains "/assets/images/popup-cinema/logos/" %}
{% unless image.path contains "transparent" %}
![Pop Up Cinema - Squares]({{ site.baseurl }}{{ image.path }}){: .i-half}

[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-outline }
{% endunless %}
{% endif %}
{% endfor %}

# Facebook Cover Images

Some cover images for the Facebook group

{% for image in site.static_files %}
{% if image.path contains "/assets/images/popup-cinema/socials/facebook-cover/" %}
![Pop Up Cinema - Covers]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-outline }
{% endif %}
{% endfor %}

# Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value                                                                                                    | Use Case             |
| :------------------------------------------------------------------------------------------------------------- | :------------------- |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#8F00AC" ></span> Purple #8F00AC   | Main Logo Gradient Start  |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#C90000" ></span> Red #C90000 | Main Logo Gradient End |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#0F0F0F" ></span> Black #0F0F0F   | Black for Text  |

# Fonts

Links to all the fonts used throughout the project for download.

-   Text: Hipton Sans

[View Hipton Sans](https://www.freefonts.io/the-hipton-font-family/){: .btn .btn-outline }

# Events

All event images are listed below

{% for image in site.static_files %}
{% if image.path contains "/assets/images/popup-cinema/socials/events/" %}
![Pop Up Cinema - Events]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-outline }
{% endif %}
{% endfor %}
