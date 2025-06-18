# CSS Padding - Complete Guide

## What is Padding?

Padding is the **space between the content of the element and its border**. It is an internal spacing, and unlike margin, it affects the background color and total size (unless using `box-sizing: border-box`).

> **Note:** Padding **cannot** be negative.

---

## Padding Shorthand Syntax

Instead of setting `padding-top`, `padding-right`, etc. individually, you can use shorthand:

### Four values:

```css
.myDiv {
    padding: 25px 50px 75px 100px; /* top right bottom left */
}
```

### Three values:

```css
.myDiv {
    padding: 25px 50px 75px; /* top left/right bottom */
}
```

### Two values:

```css
.myDiv {
    padding: 25px 50px; /* top/bottom left/right */
}
```

### One value:

```css
.myDiv {
    padding: 25px; /* top/right/bottom/left */
}
```

---

## Padding on Individual Sides

You can also specify padding for each side using:

```css
padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

### Example:

```css
.myClass {
    padding-top: 5px;
}
```

```html
<div class="myClass"></div>
```

---

## Padding vs Margin

| Property | Space Location     | Affects Background | Adds to Size | Allows Negative Values |
| -------- | ------------------ | ------------------ | ------------ | ---------------------- |
| Padding  | Inside the border  | Yes                | Yes          | No                     |
| Margin   | Outside the border | No                 | No           | Yes (except auto)      |

---

## Pro Tips

* Use padding for **inner spacing** around content.
* When you apply a background color to an element, padding area **will be colored**, unlike margins.
* To prevent overflow or box stretching issues, consider using:

  ```css
  box-sizing: border-box;
  ```

  so that padding doesn’t increase the total element width.

---
