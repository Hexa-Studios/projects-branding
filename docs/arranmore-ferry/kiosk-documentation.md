---
layout: default
title: Kiosk Documentation
nav_exclude: true
nav_order: 20
parent: Arranmore Ferry
# has_children: true
---

# Arranmore Ferry Kiosk Docs
{: .no_toc }

1. TOC
{:toc}

# Introduction

This is the documentation for the kiosk for the Arranmore Ferry.

# Kiosk

The kiosk is an [AllSee PCAP 27" Self Service](https://www.allsee-tech.com/digital-signage-products/pcap-self-service-ordering-qsr-touch-screen.html) 

![Wise POS E sheet]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/kiosk_features.png)

## Kiosk Startup

Starting the kiosk is easy, simply plug it in. For most issues, unplugging and plugging back in should solve it. When starting up, the kiosk will do the following:

1. Automatically log into user: ferry_auto_logon.
2. This will configure the printer
3. It will log back out of the user.
4. You should see the time and a blurred background (like a tablet/iPhone), see image.
5. Swipe up
6. In the bottom left hand corner, select: ferryKIOSK.
7. The kiosk will start and connect to the API automatically.

The kiosk will automatically connect to the payment reader the first time someone uses it. It may take slightly longer on the first attempt, but it will be quicker there after.

![Promo]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/kiosk-startup/1_printer.jpg)
{: .i-quarter}
When the kiosk is configuring the printer, you'll see this screen.

![Promo]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/kiosk-startup/2_login.jpg)
{: .i-quarter}
The login screen that will need a swipe up.

![Promo]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/kiosk-startup/3_startup.jpg)
{: .i-quarter}
The kiosk, once started.

## Kiosk Reset

For a complete reset of the kiosk. Turn off the kiosk from the mains and power off the payment reader. Wait 30 seconds, and then plug the kiosk back in and hold the power button on the payment device until it restarts.

## Kiosk Printer

The kiosk printer is accessible by it's own drawer. It's the small black key, but it can also be accessed using the main door too.

The printer paper should be easily installed by opening the printer using the grey button. When you close the drawer on the printer the printer will spool some paper and cut it. To test the printer you should use the kiosk settings (see below).

The printer has it's own switch, it should be left on as the main red switch powers everything.

## Kiosk Internals

The kiosk internals can be accessed using the 4 point key (silver one).

> *NEED TO ADD PHOTO*

To access other user accounts on the system you'll need to use a keyboard. There should be a keyboard either in the device or in the office. Once plugged in:
- Press CTRL + ALT + DEL at the same time.
- You'll be logged out to the main screen log in screen once more, from there you can access the admin account.

## Kiosk Settings

Settings had to be moved to the server side because of the way Windows 11 handles cookies. You'll have to message [mat@hexastudios.co](mailto://mat@hexastudios.co) to change them. It will require a rebuild. 

Settings available are:
- Kiosk Location, anywhere, port, island.
- Next Ferry: show or hide
- Show Clock: Show or hide clock on home page
- Show Island Prices: shows or hides the islander prices on the ticket selected screen.
- Name Required for tickets, options are: no, yes or carsonly.
- Email required for tickets
- Number required for tickets

The settings page also has 2 buttons:
- Complete refresh
    - This refreshes the page, will be needed after a change.
- Test Printer
    - This prints a logo and QR code, and ensures that the printer is available.

### Accessing Settings

Settings can be accessed by pressing the Arranmore Ferry logo (on the home page) 3 times quickly.

There is a password required to access the settings. It's 2311.

## Kiosk Dimensions

![Wise POS E sheet]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/kiosk_technical_drawings.png)

# Payment Device (Stripe Reader)

The stripe terminal should be plugged in at all times and should not be out of battery. If it's left without charge, it will need to be turned on. Turn it on using the power button, shown here:

Hold it down to start it.

![Wise POS E sheet]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/wisepos_e_details.png)

## Payment Device WiFi

To change the Wifi on the admin payment device:
1. Swipe from the left of the screen.
2. Click the settings button.
3. Enter the pin `07139`
4. Select network and join the network you want.

The payment device will take a while to start up and then will show the Arranmore Ferry logo, shown below:

![Wise PosE]({{ site.baseurl }}/assets/images/arranmore-ferry/documentation/payment_reader.png)

## Payment Device Charger

The payment device is charged via USB, the device is plugged into the top of the main machine. To change the cable you'll need to 

### External Documentation

[Stripe Documentation](https://stripe.com/docs/terminal/readers/bbpos-wisepos-e)

# Internet

The kiosk currently runs off it's own internet - the old router from the ferry - it's got a 28 day sim card. Bought on 22nd July 2023, so expiry will be: 19th August 2023.
Any Three sim card will work in it.

If you want to change to a different router / different internet provider, probably easiest for me to change it. Otherwise I'll write more detailed instructions for you.


# Useful Links

The kiosk URL: [Kiosk URL](https://ferrykiosk.thearranmoreferry.com), note this URL only works for the port side kiosks.

## Kiosk

The kiosk is [AllSee's 27" PCAP Self Service Kiosk](https://www.allsee-tech.com/digital-signage-products/pcap-self-service-ordering-qsr-touch-screen.html)

## Till Rolls

These are the till rolls that definitely work in the printer of the kiosk.

[White Till Rolls](https://www.discounttillrolls.ie/thermal/80x70-thermal-till-rolls)

[Blue Till Rolls](https://www.discounttillrolls.ie/thermal-coloured/80x80-blue-thermal-till-rolls)

# Mat Notes

Startup script for the printer and `ferry_auto_logon` user.

```
@ECHO OFF
ECHO SETTING UP PRINTER...
start /d "C:\Users\ferryAUTOLOGIN\Downloads\plugin_v3_windows_64" plugin_impresoras_termicas_v3.2_prod_64.exe
@REM shutdown -l
tsdiscon
PAUSE
```