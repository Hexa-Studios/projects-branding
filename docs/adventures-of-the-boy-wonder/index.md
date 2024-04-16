---
layout: default
title: Adventures of the Boy Wonder
description: Adventures of the Boy Wonder is a mobile game developed for Android and iOS by Hexa Studios
nav_order: 5
image:
  path: assets/images/adventures-of-the-boy-wonder/cover-images/full-logo.png
  height: 1600
  width: 840
  alt: Seo Árainn Mhór Logo
---

# Adventures of the Boy Wonder
{: .no_toc }

1. TOC
{:toc}

## Description

Adventures of the Boy Wonder is a mobile game developed for Android and iOS by Hexa Studios as a gift to Owen Loughnane on his 21st Birthday.

## Main logo

![Hi Sign Icon]({{ site.baseurl }}/assets/images/adventures-of-the-boy-wonder/logo/appstore-icon.png)
{: .i-half}

[Download]({{ site.baseurl }}/assets/images/adventures-of-the-boy-wonder/logo/appstore-icon.pn){: .btn .btn-blue }

## Alternate Logos

Often there are multiple formats of the same logo, to suit different use cases. The alternates will be listed here.

![Hi Sign Icon]({{ site.baseurl }}/assets/images/adventures-of-the-boy-wonder/logo/full-logo.png)
<!-- {: .i-half} -->

[Download]({{ site.baseurl }}/assets/images/adventures-of-the-boy-wonder/logo/full-logo.png){: .btn .btn-blue }

# Trailer

<iframe src="https://player.vimeo.com/video/449220948" width="100%" height="460" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>


---

## Colours

The colours used in the website and branding materials will be listed here with any other definitions.

| Color value    | Use Case  | 
|:---------------|:---------------------|
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#5B002E" ></span> Red #5B002E | Main  Colour |
| <span class="d-inline-block p-2 mr-1 v-align-middle" style="background-color:#00579F" ></span> Red #00579F | Blue Accent Colour |

## Fonts

Links to all the fonts used throughout the project for download.

* Logo: Creative Block BB

[View Creative Block BB](https://www.dafont.com/creative-block-bb.font){: .btn .btn-outline }

---

# Images

## Cover Images

{% for image in site.static_files %}
{% if image.path contains "/assets/images/adventures-of-the-boy-wonder/cover-images" %}
![Adventures of the Boy Wonder Image]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

## Screenshots

These are featured on the App Store and Google Play

{% for image in site.static_files %}
{% if image.path contains "/assets/images/adventures-of-the-boy-wonder/screenshots" %}
![Adventures of the Boy Wonder Image]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

## Artwork

Artwork from the development of the game

{% for image in site.static_files %}
{% if image.path contains "/assets/images/adventures-of-the-boy-wonder/artwork" %}
![Adventures of the Boy Wonder Image]({{ site.baseurl }}{{ image.path }})
<!-- {: .i-half} -->
[Download]({{ site.baseurl }}{{ image.path }}){: .btn .btn-blue }
{% endif %}
{% endfor %}

# Links

## Website

[Adventures of the Boy Wonder Website](https://adventuresoftheboywonder.com)

## App Stores

Android:
[https://play.google.com/store/apps/details?id=co.hexastudios.AdventuresoftheBoyWonder](https://play.google.com/store/apps/details?id=co.hexastudios.AdventuresoftheBoyWonder)

iOS:
[https://apps.apple.com/ie/app/adventures-of-the-boy-wonder/id1511391599#](https://apps.apple.com/us/app/adventures-of-the-boy-wonder/id1511391599#?platform=iphone)

{% include app_store_buttons.html
	columns = 2
	android = "https://play.google.com/store/apps/details?id=co.hexastudios.AdventuresoftheBoyWonder"
	ios = "https://apps.apple.com/us/app/adventures-of-the-boy-wonder/id1511391599#?platform=iphone"
%}
