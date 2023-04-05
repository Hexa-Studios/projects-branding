---
layout: default
title: Arranmore Ferry
# nav_exclude: true
nav_order: 20
---

# Arranmore Ferry
{: .no_toc }

1. TOC
{:toc}

[Download All]({{ site.baseurl }}/assets/images/arranmore-ferry/arranmore-ferry.zip){: .btn .btn-blue }

## Main logo

This is the main logo for the ferry, but doesn't scale well for smaller sizes. The app icon is better for smaller screens.

![Arranmore Ferry Realte Na Maidne Square Logo]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/arranmore-full-icon-purple.webp)
{: .i-half}

[Download Main Logo]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/arranmore-full-icon-purple.webp){: .btn .btn-blue }

[Download Main Logo White]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/arranmore-full-icon-white.png){: .btn .btn-blue }

## App Icons

![Arranmore App Icon]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/app-icon-rounded-512.png)
{: .i-half}

![Arranmore App Android Icon]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/app-icon-1024.png)
{: .i-half}

[Download App Rounded Icon ]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/app-icon-rounded-512.png){: .btn .btn-blue }
[Download App Square Icon]({{ site.baseurl }}/assets/images/arranmore-ferry/icons/app-icon-1024.png){: .btn .btn-blue }

## QR Codes


![Arranmore QR Codes]({{ site.baseurl }}/assets/images/arranmore-ferry/qr-codes/thearranmoreferry-qrcode-homepage.png)
{: .i-half}
[Download Homepage QR ]({{ site.baseurl }}/assets/images/arranmore-ferry/qr-codes/thearranmoreferry-qrcode-homepage.png){: .btn .btn-blue }


![Arranmore QR Codes]({{ site.baseurl }}/assets/images/arranmore-ferry/qr-codes/thearranmoreferry-qrcode-tickets.png)
{: .i-half}
[Download Tickets QR ]({{ site.baseurl }}/assets/images/arranmore-ferry/qr-codes/thearranmoreferry-qrcode-tickets.png){: .btn .btn-blue }


---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#0476bc" ></span> Dark Primary #0476bc | Main Blue Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#03a8f4" ></span> Light Primary #03a8f4 | Accent Blue Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#B5178C" ></span> Dark Secondary #B5178C | Main Pink Colour (Web) |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#C21281" ></span> Light Secondary #C21281 | Accent Pink Colour (Web) |

[Full Spectrum of Secondary Colours](https://coolors.co/a81b96-b5178c-c21281-c7178a-cc1c92-d525a2-dc41b0-e25dbd-ee95d8-f7caec
)

## Fonts

Links to all the fonts used throughout the project for download.

* Poppins for App

[View Poppins](https://fonts.google.com/specimen/Poppins){: .btn .btn-outline }

---

## Images

### Promotional

Promo images featured on the website and on social

### Initial Images

{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/promo/initial" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

### Notifications Blog
{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/promo/notifications" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

### Buy App Tickets
{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/promo/buy-app-ticket" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

### Update Accounts
{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/promo/update-account" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}


### Update 3.0 - Google Pay - Apple Pay

App v3.0 update for [The Arranmore Ferry](https://thearranmoreferry.com/blog/arranmore-ferry-apple-pay-update)

{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/promo/apple-google-pay" %}
![Promo]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
{% endif %}
{% endfor %}

### Screenshots

All the images used on the App Stores

{% for image in site.static_files %}
{% if image.path contains "/assets/images/arranmore-ferry/app-store/" %}
![Promo]({{ site.baseurl }}{{ image.path }})
{: .i-half}
{% endif %}
{% endfor %}

