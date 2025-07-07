// taggedTemplate.js
function highlight(strings, ...values) {
  return strings.map((str, i) => `${str}<b>${values[i] || ''}</b>`).join('');
}

const lang = "JavaScript";
const mood = "fun";

const result = highlight`Learning ${lang} is really ${mood}!`;
console.log(result); // Output: Learning <b>JavaScript</b> is really <b>fun</b>!
