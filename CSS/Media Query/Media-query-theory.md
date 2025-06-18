# CSS Media Queries - Theory Only

## What are Media Queries?

Media queries are a powerful feature of CSS that allow the application of styles based on conditions such as the device's screen size, resolution, orientation, and more. This enables responsive design — the ability to adjust layout and styling based on the user's environment.

## Terminology and Structure

A media query consists of a media type and one or more expressions that check for the conditions of particular media features, such as width, height, or orientation.

### General Syntax

```
@media mediatype and (media feature) {
    CSS rules
}
```

### Media Type (Optional)

* **all**: Applies to all devices.
* **screen**: Intended primarily for computer screens.
* **print**: Intended for printed material or print preview.
* **handheld**: Deprecated. Previously used for mobile devices.
* **projection**: For projected presentations.
* **aural**: For speech synthesizers.
* **braille**: For braille tactile feedback devices.
* **embossed**: For paged braille printers.
* **tty**: For devices with a fixed-pitch character grid (e.g., terminals).
* **tv**: For television devices.

### Logical Operators

* **and**: Combines multiple media features.
* **not**: Excludes a media type or feature.
* **only**: Applies styles exclusively to a specific media type (used for older browsers).

## Media Features

These describe characteristics of the output device or environment:

* **width / height**: Width and height of the viewport or output surface.
* **min-width / max-width**: Minimum or maximum width condition.
* **min-height / max-height**: Minimum or maximum height condition.
* **aspect-ratio**: Ratio of width to height.
* **orientation**: Portrait or landscape.
* **resolution**: Pixel density of the output device (e.g., 300dpi).
* **monochrome**: Number of bits per pixel on monochrome devices.
* **color**: Bits per color component.
* **color-index**: Entries in the color look-up table.
* **grid**: Whether the device is grid-based (true or false).
* **scan**: Describes scanning method (progressive or interlace) — typically for TV.

## Deprecated Media Features

Some media features are deprecated and not recommended for use:

* **device-width / device-height**
* **min-device-width / max-device-width**
* **min-device-height / max-device-height**
* **device-aspect-ratio**

These features refer to physical device dimensions rather than the viewport, making them less useful in modern responsive design.

## Behavior of Media Queries

Media queries are evaluated dynamically:

* If a condition is **met**, the defined styles are **applied**.
* If the condition is **no longer met**, the styles are **removed**.

This allows websites to adjust layout and design instantly when the browser is resized or a device is rotated.

## Meta Viewport Tag

To properly apply width-based media queries on mobile devices, the following meta tag is essential in the HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

Without this, the device might scale the layout based on its native resolution, causing improper rendering.

## Retina and High-Resolution Support

To target high-resolution (Retina) displays:

* Use `min-resolution: 192dpi` or `-webkit-min-device-pixel-ratio: 2`
* These help in delivering sharper UI elements on high DPI screens

## IE8 and Media Queries

Internet Explorer 8 and below do not support media queries natively.

### Workarounds:

1. **JavaScript Libraries**:

   * `Respond.js`
   * `css3-mediaqueries.js`

2. **Conditional Stylesheets**:

```html
<!--[if lt IE 9]>
<link rel="stylesheet" type="text/css" media="all" href="style-ielt9.css" />
<![endif]-->
```

3. **CSS Hacks** *(not recommended)*: Hack-based targeting for old IE versions using invalid selectors.

## Media Queries in Stylesheets

You can define media queries inside stylesheets using `@media` blocks, or apply them directly in HTML using the `media` attribute in `<link>` tags:

```html
<link rel="stylesheet" media="(min-width: 600px)" href="example.css">
```

## Summary

* Media queries help make websites responsive.
* Use them to adjust styles based on screen size, resolution, and device orientation.
* Use `min-width`, `max-width`, `orientation`, `resolution`, and `aspect-ratio` frequently.
* Don't forget the meta viewport tag for mobile responsiveness.
* Be cautious with deprecated and non-standard media features.
* Use JS-based fallbacks for legacy browser support (e.g., IE8).

Media queries are a cornerstone of responsive design. Understanding their structure and use cases helps create accessible and flexible web designs for a wide range of devices.
