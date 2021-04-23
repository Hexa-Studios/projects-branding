---
layout: default
title: Tory Ferry
# nav_exclude: true
nav_order: 20
---

# Tory Ferry
{: .no_toc }

1. TOC
{:toc}

[Download All]({{ site.baseurl }}/assets/images/tory-ferry/tory-ferry.zip){: .btn .btn-blue }

## Main logo

This is the main logo for the ferry, but doesn't scale well for smaller sizes. The app icon is better for smaller screens.

![Tory Ferry Realte Na Maidne Square Logo]({{ site.baseurl }}/assets/images/tory-ferry/icons/tory_ferry_logo.png)
{: .i-half}

[Download Main Logo]({{ site.baseurl }}/assets/images/tory-ferry/icons/tory_ferry_logo.png){: .btn .btn-blue }

[Download Main Logo No Outline]({{ site.baseurl }}/assets/images/tory-ferry/icons/tory_ferry_logo_no_outline.png){: .btn .btn-blue }

[Download Main Logo No Outline SVG]({{ site.baseurl }}/assets/images/tory-ferry/icons/tory_ferry_logo_no_outline.svg){: .btn .btn-blue }

### Emboss Logo

![Earlys Bar Main Logo]({{ site.baseurl }}/assets/images/tory-ferry/icons/tf_emboss.png)
{: .i-quarter}

[Download]({{ site.baseurl }}/assets/images/tory-ferry/icons/tf_emboss.png){: .btn .btn-blue }

## Alternate Logos

Often there are multiple formats of the same logo, to suit different use cases. The alternates will be listed here.

![Earlys Bar Main Logo]({{ site.baseurl }}/assets/images/tory-ferry/app/512.png)
{: .i-half}
![Earlys Bar Main Logo]({{ site.baseurl }}/assets/images/tory-ferry/app/1024.png)
{: .i-half}

[Download Square]({{ site.baseurl }}/assets/images/tory-ferry/app/1024.png){: .btn .btn-blue }
[Download Round ]({{ site.baseurl }}/assets/images/tory-ferry/app/512.png){: .btn .btn-blue }
[Download 114px]({{ site.baseurl }}/assets/images/tory-ferry/app/114.png){: .btn .btn-blue }

---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#0476bc" ></span> Dark Primary #0476bc | Main Blue Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#03a8f4" ></span> Light Primary #03a8f4 | Accent Blue Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#e65000" ></span> Dark Secondary #e65000 | Main Orange Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#f37b03" ></span> Light Secondary #f37b03 | Accent Orange Colour (Web) |

## Fonts

Links to all the fonts used throughout the project for download.

* Arvo for Website
* Poppins for App

[View Arvo](https://fonts.google.com/specimen/Arvo){: .btn .btn-outline }
[View Poppins](https://fonts.google.com/specimen/Poppins){: .btn .btn-outline }

---

## Images

### Promotional

{% for image in site.static_files %}
{% if image.path contains "/assets/images/tory-ferry/promo/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

<!-- Old Promo Poster

![Release Image](/assets/images/tory-ferry/promo/ReleaseImage.jpg)

Old Facebook Header

![Tory Ferry Old Header](/assets/images/tory-ferry/promo/tf_fb_header.jpg)

Share Times from Date Picker Release Images

iOS

![Share Times iOS](/assets/images/tory-ferry/promo/share-times-ios.png)

Android

![Share Times Android](/assets/images/tory-ferry/promo/share-times.png)

Notifications Release Image

![Notifications](/assets/images/tory-ferry/promo/notifications.png) -->

### Tickets

{% for image in site.static_files %}
{% if image.path contains "/assets/images/tory-ferry/tickets/promo/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

---

### Tickets Launch Competition

Launch images for Tory Ferry Tickets (v5.0).

Options:
* Horizontal (for Facebook and Twitter)
* Vertical (for stories on Facebook and Instagram)
* Square (for Instagram)

{% for image in site.static_files %}
{% if image.path contains "/assets/images/tory-ferry/tickets/launch-comp/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

### Tickets Push April 21

Images for explaining the tickets functionality.

{% for image in site.static_files %}
{% if image.path contains "/assets/images/tory-ferry/tickets/tickets-push/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

---

## Seasonal

These materials only apply seasonally and should be used sparingly.

![Christmas]({{ site.baseurl }}/assets/images/tory-ferry/seasonal/xmas-square.jpg)
{: .i-half}
