---
layout: default
title: Earlys Bar
nav_exclude: false
nav_order: 21
---

# Early's Bar
{: .no_toc }

1. TOC
{:toc}

[Download All]({{ site.baseurl }}/assets/images/earlys-bar/earlys-bar.zip){: .btn .btn-blue }

## Main logo

This is the main logo. As with all the other images, it's available in various formats using the buttons.

![Earlys Bar Square Logo]({{ site.baseurl }}/assets/images/earlys-bar/squarelogo.jpg)
{: .i-half}

[Download]({{ site.baseurl }}/assets/images/earlys-bar/squarelogo.jpg){: .btn .btn-blue }

## Alternate Logos

Often there are multiple formats of the same logo, to suit different use cases. The alternates will be listed here.

![Earlys Bar Main Logo]({{ site.baseurl }}/assets/images/earlys-bar/early_logo_bar.png)
{: .i-half}

[Download]({{ site.baseurl }}/assets/images/earlys-bar/early_logo_bar.png){: .btn .btn-blue }

[Download White Transparent]({{ site.baseurl }}/assets/images/earlys-bar/earlys_logo_white_transparent.png){: .btn .btn-blue }

---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#004d6e" ></span> Blue #004d6e | Main Background Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#c48b3d" ></span> Gold #c48b3d | Accent Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#2a2a2a" ></span> Text Colour #2a2a2a | Primary Website Text |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#5f646a" ></span> Text Colour #5f646a | Secondary Website Text |

## Fonts

Links to all the fonts used throughout the project for download.

* Logo Sherwood
* Text (Roboto)

[View Sherwood Font](https://www.dafont.com/sherwood.font){: .btn .btn-outline }

---

## Images

Some background images for us on the website and posters.

{% for image in site.static_files %}
{% if image.path contains "/assets/images/earlys-bar/backgrounds/" %}
![Earlys Bar Background]({{ site.baseurl }}{{ image.path }})
{% endif %}
{% endfor %}

---

## Seasonal

These materials only apply seasonally and should be used sparingly.

{% for image in site.static_files %}
{% if image.path contains "/assets/images/earlys-bar/seasonal/" %}
![Earlys Bar Seasonal]({{ site.baseurl }}{{ image.path }})
{: .i-half}
{% endif %}
{% endfor %}

<!-- 
![Christmas](/assets/images/earlys-bar/earlys-xmas-squarelogo-red.jpg)
{: .i-half}

![Christmas 2](/assets/images/earlys-bar/earlys-xmas-squarelogo2.jpg)
{: .i-half}

![Easter](/assets/images/earlys-bar/easter-squarelogo-white.png)
{: .i-half}

![Easter](/assets/images/earlys-bar/easter-squarelogo.png)
{: .i-half}

![Valentines](/assets/images/earlys-bar/valentines-squarelogo-transparent.png)
{: .i-half} -->
