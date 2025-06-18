# CSS Borders - Complete Guide

## What is Border?

The `border` in CSS is the line that wraps around the padding and content of an element. It can have width, style, and color. Borders are visible and impact layout.

---

## 1: `border-radius`

`border-radius` allows you to round the corners of a box. It can be used for rectangles, circles, and even ellipses.

### Basic Usage:

```css
.box {
  width: 250px;
  height: 250px;
  background-color: black;
  border-radius: 10px;
}
```

### Circle:

```css
.circle {
  width: 200px;
  height: 200px;
  border-radius: 100px; /* or 50% */
}
```

### Complex Syntax:

```css
.box {
  border-radius: 10px 5% / 20px 25em 30px 35em;
}
```

This applies horizontal and vertical radii to each corner in the order:

* Top-left
* Top-right
* Bottom-right
* Bottom-left

### Browser-Specific:

```css
-webkit-border-top-right-radius: 4px;
-moz-border-radius-topright: 4px;
border-top-right-radius: 4px;
```

---

## 2: `border-style`

Defines the **appearance** of the border.

```css
/* One value */
border-style: dotted;

/* Four values (top, right, bottom, left) */
border-style: dotted solid double dashed;
```

Special values:

* `none`
* `hidden` (used in tables for conflict resolution)

---

## 3: Multiple Borders

### Using `outline`:

```css
.div1 {
  border: 3px solid black;
  outline: 6px solid blue;
}
```

### Using `box-shadow`:

```css
.div2 {
  border: 5px solid green;
  box-shadow: 0 0 0 4px black;
}
```

### Using `::before` pseudo-element:

```css
.div3 {
  position: relative;
  border: 5px solid black;
}

.div3::before {
  content: "";
  position: absolute;
  border: 5px solid blue;
  z-index: -1;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
}
```

---

## 4: Border Shorthand

```css
/* Long form */
border-width: 1px;
border-style: solid;
border-color: #000;

/* Shorthand */
border: 1px solid #000;

/* Specific sides */
border-top: 2px double #aaa;
```

---

## 5: `border-collapse` (Tables)

```css
table {
  border-collapse: separate; /* default */
  border-spacing: 2px;
}
```

Use `collapse` to merge borders in table layout:

```css
table {
  border-collapse: collapse;
}
```

---

## 6: `border-image`

```css
.div {
  border-image: url("border.png") 30 stretch;
}
```

Explanation:

* `border-image-source`: URL of the image.
* `border-image-slice`: Divides image into 9 parts.
* `border-image-repeat`: `stretch`, `repeat`, `round`.

---

## 7: Multi-colored Borders with `border-image`

```css
.bordered {
  border: 5px solid;
  border-image: linear-gradient(to right, red 20%, green 20%, green 40%, blue 40%, blue 60%, maroon 60%, maroon 80%, chocolate 80%) 1;
}
```

To apply border only on top:

```css
.bordered {
  border-width: 5px 0 0 0;
}
```

Note: `border-image` **ignores** `border-radius`.

---

## 8: Side-Specific Borders

```css
#element {
  border-left: 1px solid black;
}
```

Other properties:

* `border-top`
* `border-right`
* `border-bottom`

---

## Summary Table

| Property        | Description                          |
| --------------- | ------------------------------------ |
| `border`        | Shorthand for width, style, color    |
| `border-style`  | Defines line appearance              |
| `border-width`  | Thickness of the border              |
| `border-color`  | Color of the border                  |
| `border-radius` | Rounds corners                       |
| `border-image`  | Uses image as a border               |
| `outline`       | A second border outside the main one |
| `box-shadow`    | Creates border-like effects visually |
