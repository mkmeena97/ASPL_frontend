# Typography in CSS - Theory

## Font Properties

| Property        | Description                                                                            |
| --------------- | -------------------------------------------------------------------------------------- |
| font-style      | Sets italic or oblique text.                                                           |
| font-variant    | Controls use of small-caps.                                                            |
| font-weight     | Specifies font weight: normal, bold, or numeric from 100 to 900.                       |
| font-size       | Sets size of text using %, px, em, etc.                                                |
| line-height     | Defines vertical spacing between lines of text.                                        |
| font-family     | Specifies the typeface used.                                                           |
| font-stretch    | Controls width of characters. Values include ultra-condensed to ultra-expanded.        |
| color           | Specifies the font color. Accepts all CSS color formats.                               |
| text-align      | Controls horizontal alignment: start, end, left, right, center, justify, match-parent. |
| text-decoration | Adds or removes text decorations like underline, overline, line-through.               |

---

## Font Shorthand

* Combines multiple font-related properties in one line.
* Syntax: `font: [font-style] [font-variant] [font-weight] [font-size/line-height] [font-family];`
* `font-size` and `font-family` are mandatory. Missing others will reset them to default.

**Initial Values:**

* font-style: normal
* font-variant: normal
* font-weight: normal
* font-stretch: normal
* font-size: medium
* line-height: normal
* font-family: depends on user agent

---

## Quotes

* `quotes` sets custom quotation marks for `<q>` tag.

---

## Font Size

* Sets size of the font; bigger values enlarge text, smaller values reduce it.

---

## Text Direction

* `direction`: Sets horizontal flow (`ltr`, `rtl`).
* `writing-mode`: Alters vertical/horizontal reading direction.

---

## Font Stacks

* A prioritized list of fonts.
* Fallbacks applied if first font isn't available.
* Font names with spaces must be quoted.

---

## Text Overflow

* Handles clipped text using `ellipsis`, `clip`, or `string`.
* `text-overflow: ellipsis;` only works on a single line.
* Multi-line requires non-standard WebKit hacks.

---

## Text Shadow

* Adds shadow effect around text.
* Supports multiple shadows.
* Syntax: `text-shadow: h-offset v-offset blur color;`

---

## Text Transform

* Changes capitalization:

  * `uppercase`
  * `lowercase`
  * `capitalize`

---

## Letter Spacing

* Sets horizontal space between characters.
* Supports negative values for tighter text.

---

## Text Indent

* Sets indentation of the first line of text.

---

## Text Decoration

* Adds decoration lines like underline, overline, line-through.
* Shorthand possible with style and color.
* Some features (e.g., `text-decoration-skip`) are browser-specific.

---

## Word Spacing

* Sets space between words.
* Values: positive, negative, `normal`, or inherited.

---

## Font Variant

* `normal`: Default.
* `small-caps`: Uppercases all letters but scales lowercase letters smaller.
* Shorthand for `font-variant-caps`, `-numeric`, `-alternates`, `-ligatures`, `-east-asian`.

---
