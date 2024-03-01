---
layout: default
title: Weldworx
# nav_exclude: true
nav_order: 30
---

# Weldworx
{: .no_toc }

1. TOC
{:toc}

## Main Logo

This is the main logo and should be used for most use cases. 

![Weldowrd Black Logo]({{ site.baseurl }}/assets/images/weldworx/logo/black.png)
{: .i-half}

[Download Black Logo]({{ site.baseurl }}/assets/images/weldworx/logo/black.png){: .btn .btn-blue }
[Download Black PDF]({{ site.baseurl }}/assets/images/weldworx/logo/black_pdf.pdf){: .btn .btn-blue }

[Download White Logo]({{ site.baseurl }}/assets/images/weldworx/logo/blue.png){: .btn .btn-blue }
[Download White PDF]({{ site.baseurl }}/assets/images/weldworx/logo/blue_pdf.pdf){: .btn .btn-blue }

![Weldowrx Blue Logo]({{ site.baseurl }}/assets/images/weldworx/logo/blue.png)
{: .i-half}

[Download Blue Logo]({{ site.baseurl }}/assets/images/weldworx/logo/blue.png){: .btn .btn-blue }
[Download Blue PDF]({{ site.baseurl }}/assets/images/weldworx/logo/blue_pdf.pdf){: .btn .btn-blue }

## Alt Logos

### Slogan Logo

![Weldworx Black Slogan Logo]({{ site.baseurl }}/assets/images/weldworx/slogan-logo/slogan-black.png)
{: .i-half}

[Download Black Slogan Logo]({{ site.baseurl }}/assets/images/weldworx/slogan-logo/slogan-black.png){: .btn .btn-blue }
[Download White Slogan Logo]({{ site.baseurl }}/assets/images/weldworx/slogan-logo/slogan-white.png){: .btn .btn-blue }

![Weldworx Blue Slogan Logo]({{ site.baseurl }}/assets/images/weldworx/slogan-logo/slogan-blue.png)
{: .i-half}

### Alternate Logo

![Weldworx Black Alt Logo]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_black.png)
{: .i-half}

[Download Black Alt Logo]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_black.png){: .btn .btn-blue }
[Download Black Alt PDF]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_black_pdf.pdf){: .btn .btn-blue }

[Download White Alt Logo]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_white.png){: .btn .btn-blue }
[Download White Alt PDF]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_white_pdf.pdf){: .btn .btn-blue }


![Weldworx Blue Alt Logo]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_blue.png)
{: .i-half}

[Download Blue Alt Logo]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_blue.png){: .btn .btn-blue }
[Download Blue Alt PDF]({{ site.baseurl }}/assets/images/weldworx/alt-logo/alt_blue_pdf.pdf){: .btn .btn-blue }


## Colours

The colours used on the logos and social media images below. Please note that black and white logos are #FFF and #000.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#0E4D8E" ></span> Blue #0E4D8E | Blue (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#1C1C1C" ></span> Blue #1C1C1C | Grey Alt (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#00071E" ></span> Grey #00071E | Embossed Social (Web) |

## Fonts

Links to all the fonts used throughout the project for download.

* Hurme Geometric Sans 4

[Download Hurme Geometric Sans 4]({{ site.baseurl }}/assets/images/weldworx/font/HurmeGeometricSans4_Black.otf){: .btn .btn-outline }

---

# Social

## Profile Photos

{% assign sorted = site.static_files | reverse %}
{% for image in sorted %}
{% if image.path contains "/assets/images/weldworx/profile-picture/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

## Cover Photos

With and without the slogan

{% assign sorted = site.static_files | reverse %}
{% for image in sorted %}
{% if image.path contains "/assets/images/weldworx/social/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

