=== Modal Window - create popup modal window ===
Contributors: Wpcalc
Donate link: https://wow-estore.com/item/wow-modal-windows-pro/
Tags: modal, modal window, modal popup, lightbox, popup
Requires at least: 4.3
Tested up to: 5.9
Requires PHP: 5.6
Stable tag: 5.3
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

WordPress popup plugin for easily create popup and modal window with any kind of content and settings.

== Description ==

Use the free WordPress popup plugin "Modal Window" to quickly and easily create informative popups. Add the text and media you need, insert shortcodes of forms and much more. Change the behavior of the display of modal windows depending on the user's actions on the page.

The Modal Window is the unique tool for free use. With its help you can add bright information popup messages to the site, warn visitors about various promotions, display contact forms to increase the conversion of the resource. The WordPress popup plugin will allow you to set the data display in the new format.

Create modal windows and insert any kind of content.

= Main features =

The WordPress plugin Modal Window will help you quickly get the attention of visitors. Its functionality will make it possible to implement high-quality modal windows for any query.

* Place any kind of content
* Use the function editor to configure the contents of the block
* Change the height and width of windows
* Set the window closing options by clicking on Overlay or the Esc key
* Change settings for mobile devices
* Output of the window via the button or the menu item
* Display the modal window depending on user behavior
* Use cookies to customize the display of the pop-up block
* Copy and paste the shortcode of the window anywhere


= Pro version =
Discover even more features with the Pro version of the Modal Window plugin:

* Create an unlimited number of modal windows
* Change the display of the window depending on the user's status
* Set the output of the block on all or individual pages via ID
* Modify the behavior of modal windows in accordance with the language of the site
* Set limits for screens with the small resolution
* Use advanced features to customize the appearance
* Insert the background image
* Change the start point of the window
* Add borders and change their color for each pop-up block
* Use the variety of color palettes
* Choose the type and behavior of the closing button
* Use the time delay for the effective appearance of the block
* Set the bright animation when the window appears and closes
* Change the duration of the effect at your discretion
* Display the button for the modal window in the form of an icon and / or text
* Add the animation for the button, change its color and location on the page
* Create convenient and functional pop-up panels
* Generate unlike icons using the built-in menu "icons"
* And more...

[Preview of Pro version](https://wow-company.com/preview/wordpress-plugins/wow-modal-windows-pro/)

[Buy Pro version](https://wow-estore.com/item/wow-modal-windows-pro/)


The free Modal Window plugin is the best tool to create information pop-up blocks quickly and easy. It allows you to display any kind of content on the page. Add and edit text messages, shortcodes of various forms, images and other media files with its help.

= Can be used for: =
* pop-up notifications;
* detailed description of the service or the product;
* windows with the contact form;
* blocks with large images of products;
* pop-up video instructions;
* error messages or warnings;
* windows with interactive maps and much more.

= Use with other plugins to maximize your results =
* [Popup Box – new WordPress popup plugin](https://wordpress.org/plugins/popup-box/)
* [Counter Box – powerful creator of counters, timers and countdowns](https://wordpress.org/plugins/counter-box/)
* [Button Generator – easily Button Builder](https://wordpress.org/plugins/button-generation/)
* [Herd Effects – fake notifications and social proof plugin](https://wordpress.org/plugins/mwp-herd-effect/)
* [Floating Button](https://wordpress.org/plugins/floating-button/)
* [Side Menu Lite – add sticky fixed buttons](https://wordpress.org/plugins/side-menu-lite/)
* [Sticky Buttons – floating buttons builder](https://wordpress.org/plugins/sticky-buttons/)
* [Bubble Menu – circle floating menu](https://wordpress.org/plugins/bubble-menu/)
* [Float menu – awesome floating side menu](https://wordpress.org/plugins/float-menu/)
* [Modal Window – create modal window](https://wordpress.org/plugins/modal-window/)
* [Wow Skype Buttons](https://wordpress.org/plugins/mwp-skype/)
* [Border Menu](https://wordpress.org/plugins/border-menu/)
* [Slide Menu](https://wordpress.org/plugins/slide-menu/)


= Frequently Asked Questions =

[View Answers](https://wordpress.org/plugins/modal-window/faq/):

* How to create a Modal window?
* How to open 'Modal Window' via a Side Menu?

* How to open a modal window clicking on the link?
* How to open a modal window clicking on the button?
* How to insert a form into a modal window?
* Can I insert a shortcode into the modal window?

= Support =
Search for answers and ask your questions at [support center](https://wordpress.org/support/plugin/modal-window)

== Installation ==
* Installation option 1: Find and install this plugin in the `Plugins` -> `Add new` section of your `wp-admin`
* Installation option 2: Download the zip file, then upload the plugin via the wp-admin in the `Plugins` -> `Add new` section. Or unzip the archive and upload the folder to the plugins directory `/wp-content/plugins/` via ftp
* Press `Activate` when you have installed the plugin via dashboard or press `Activate` in the in the `Plugins` list
* Go to `Modal Window` section that will appear in your main menu on the left
* Click `Add new` to create your first modal window
* Setup your modal window
* Click Save
* Copy and paste the shortcode, such as [Modal-Window id=1] to where you want the modal window to appear.
* If you want it to appear everywhere on your site, you can insert it for example in your `header.php`, like this: `<?php echo do_shortcode('[Modal-Window id=1]');?>`

== Frequently Asked Questions ==
= How to create a Modal window?  =

* Click `Add new` to create your first modal window
* Setup your modal window
* Click Save
* Copy and paste the shortcode, such as [Modal-Window id=1], to where you want the modal window to appear. For Example: insert shortcode [Modal-Window id=1] into a page/post content
* If you want it to appear everywhere on your site, you can insert it for example in your `footer.php`, like this: `<?php echo do_shortcode('[Modal-Window id=1]');?>`

= Prevent page jumping to top when opening modal =

If the page jumping to the top when opening a modal via a link lower down on a page add the next CSS code:

`html.no-scroll, body.no-scroll {
    overflow: visible !important;
}`

In the site dashboard:

1. Go to the page ‘Appearance’->’Customize’
2. Click ‘Additional CSS’
3. Add CSS code
4. Click ‘Publised’

= How to close the modal window using custom button =

You can сlose popup via adding to the element:

* Class - wow-modal-close-X, like `<span class="wow-modal-close-X">Close Popup</span>`
* ID - wow-modal-close-X, like `<span id="wow-modal-close-X">Close Popup</span>`
* URL - #wow-modal-close-X, like `<a href="#wow-modal-close-X">Close Popup</a>`

Where X = Modal window ID

= The modal window on the frontend does not change after making changes to the settings =

If you use the cache (W3 Total Cache, WP Super Cache, WP Rocket) or minify plugins (Autoptimize, Fast Velocity Minify) try deactivate them and tested the modal window.
If the modal window shows correctly, reset the cache of these plugins.

= The modal window not show =

1. Check whether you have inserted a modal window on the page. You can insert the modal window via shortcode or option 'Publish' -> 'All posts and pages'
2. Check that the site's protocol matches WordPress Address (URL) & Site Address (URL) in the Settings-> General

= How to open 'Modal Window' via a Side Menu? =
Install plugin [Side Menu - add fixed side buttons](https://wordpress.org/plugins/side-menu/)

* Create a modal window
* In the option `Show a modal window` select -> `Click on a link (with id)`
* Copy and paste the shortcode, such as [Modal-Window id=1], to where you want the modal window to appear.
* Create Side Menu Item via plugin [Side Menu](https://wordpress.org/plugins/side-menu/)
* In the option `Item type` select -> `link`
* Then enter which modal window to show. Enter link such as #wow-modal-id-1
* Save Menu Item


= How to open a modal window clicking on the link?  =

* Create a modal window
* Copy and paste the shortcode, such as [Modal-Window id=1], to where you want the modal window to appear.
* Insert a link like `<a href="https://wow-estore.com/#wow-modal-id-1">Open Modal Window</a>`  to the page.

= How to open a modal window clicking on the button ?  =
* Create a modal window
* Copy and paste the shortcode, such as [Modal-Window id=1], to where you want the modal window to appear.
* Insert a button like `<button id="wow-modal-id-1">Open Modal Window</button>`  to the page.


= How to insert a form into a modal window? =
Install plugin [Wow Forms](https://wordpress.org/plugins/mwp-forms/)

* Create a Form via plugin [Wow Forms](https://wordpress.org/plugins/mwp-forms/)
* Copy and paste the shortcode, such as [Wow-Forms id=1] into the content field in the modal window settings.

= Can I insert a shortcode into the modal window? =
Yes, you can inert any shortcode into the content of modal window

= The modal window doesn't scrolling =
This happens if the height of the modal is set to auto and is less than the height of the screen.

To solve this problem:

* Set the value to option "Modal Height"
* Select the value "Modal Height" % or px, but not auto


== Screenshots ==
1. Overview
2. Create modal windows & insert any content
3. Insert a form (together with Wow Forms plugin)
4. Create exit intent popups. Retain users on your website or at least offer the abandoning users something valuable to capture their emails.
5. Setup any widgets. Insert any other plugins' shortcodes.
6. Create a phone call request widget
7. Use for showing ads
8. Modal window setup example
9. Features
10. Pro version features

== Upgrade Notice ==

= 5.0 =
If you use the cache plugin, reset the cache completely.

== Changelog ==
= 5.3 =
* Added: shortcode for CLose Button
* Added: shortcode for video
* Added: shortcode for iframe
* Fixed: minor bug with delete the modal window

= 5.2.3 =
* Fixed: save emoji in modal window content
* Fixed: minor bug

= 5.2.2 =
* Fixed: minor bug on main plugin page

= 5.2.1 =
* Fixed: minor bug

= 5.2 =
* Added: option Export/Import
* Fixed: minor bugs

= 5.1.1 =
* Fixed: demo url

= 5.1 =
* Updated: Font Awesome Icons to version 5.14
* Fixed: minor bugs

= 5.0.6 =
* Fixed: check, if jQuery is ready

= 5.0.5 =
* Fixed: fix conflict with Divi theme

= 5.0.4 =
* Fixed: save to database

= 5.0.3 =
* Fixed: fix conflict with form plugins

= 5.0.2 =
* Fixed: Mobile Rules

= 5.0 =
* Added: Live Preview Builder
* Added: Test mode
* Added: Activate/Deactvate the modal window
* Changed: Admin style
* Optimized: scripts and styles

= 4.0.3 =
Fixed: link to the Settings

= 4.0.2 =
Fixed: option 'Show only once'

= 4.0.1 =
Fixed: using old shortcode

= 4.0 =
* Added: Options for modal window style: z-index, position, overlay, top location, border style, content font-size
* Added: Title of the modal window
* Added: Icon generation
* Added: Shortcodes for columns
* Added: Screen width control for different devices
* Added: Pot file for translate
* Changed: Admin style
* Changed: Database of the plugin

= 3.2.2 =
* Fixes: Gutenberg Shortcode

= 3.2.1 =
* Deleted: quantity constraint

= 3.2 =
* Added: Function for showing modal windows on all posts and pages

= 3.1.2 =
* Fixed: Showing a modal window when scrolled

= 3.1.1 =
* Fixed: Save a modal window

= 3.1 =
* Added: Support page

= 3.0 =
* Added: show a modal window on hover
* Changed: Admin style
* Fixed: General style


= 2.5 =
* Fixed: Open a modal window, when the window is scrolled
* Fixed: Open a modal window, when the user tries to leave the page.

= 2.4 =
* Fixed: Working with cookies
* Fixed: Saving to the database.


= 2.3.4 =

* Added: FAQ.
* Fixed: code.

= 2.3.3 =

* Fix: Show a modal window with cookies.


= 2.3.2 =

* Fix: Modal Window style.
* Fix: Admin style.

= 2.3.1 =

* Fix: Admin style.


= 2.3 =

* Add: Button for call a modal window.
* Add: Mobile style settings.
* Change: Image of close button.
* Change: The admin style of modal window.


= 2.2.1 =
* Fix: close a modal window on mobile

= 2.2 =
* Fix: Style. The width of the modal window as a percentage
* Fix: Verifying access to the folder 'asset'.
* Fix: Optimized code.

= 2.1.2 =
* Fixed script (click on link)

= 2.1.1 =
* Fixed include modal windows

= 2.1 =
* Fixed show modal window


= 2.0 =
* Add new options
* Fixed code
* Change style

= 1.3 =
* Fixed code
* Change style

= 1.2.1 =
* Edited contacts

= 1.2 =
* Fixed display a modal window


= 1.1 =
* Fixed display a modal window
* Add option closing modal window


= 1.0 =
* Initial release