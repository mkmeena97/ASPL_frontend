/**
 * JavaScript doesn’t have native enum support like other languages,
 * but we can simulate enums using objects — especially with Object.freeze() to make them immutable.
 */

const Keys = Object.freeze({
  ENTER: "Enter",
  ESC: "Escape",
  SPACE: " ",
  TAB: "Tab"
});

function handleKey(event) {
  switch (event.key) {
    case Keys.ENTER:
      console.log("Form submitted");
      break;
    case Keys.ESC:
      console.log("Dialog closed");
      break;
  }
}

// Print ENUM
for (const key in Keys) {
  console.log(`${key} => ${Keys[key]}`);
}
