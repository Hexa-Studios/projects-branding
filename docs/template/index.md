---
layout: default
title: Template
nav_exclude: true
nav_order: 33
has_children: false
---

# Template Title
{: .no_toc }

1. TOC
{:toc}

# Main Logo

![Weldowrd Black Logo]({{ site.baseurl }}/assets/images/weldworx/logo/black.png)
{: .i-half}

[Download Black Logo]({{ site.baseurl }}/assets/images/weldworx/logo/black.png){: .btn .btn-blue }

# App Icon


## Alt Logos



# Colours

The colours used on the logos and social media images below. Please note that black and white logos are #FFF and #000.

| Color value    | Uses  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#0E4D8E" ></span> Blue #0E4D8E | Blue (Web) |

# Fonts

Links to all the fonts used throughout the project for download.

* Hurme Geometric Sans 4

[Download Hurme Geometric Sans 4]({{ site.baseurl }}/assets/images/weldworx/font/HurmeGeometricSans4_Black.otf){: .btn .btn-outline }

# Social

## Profile Photos

{% assign sorted = site.static_files | reverse %}
{% for image in sorted %}
{% if image.path contains "/assets/images/weldworx/profile-picture/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}
