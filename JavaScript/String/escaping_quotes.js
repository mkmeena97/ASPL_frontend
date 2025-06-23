// 1. Single Quotes Inside Single Quote String
var text = 'L\'albero means tree in Italian';
console.log(text); // L'albero means tree in Italian

// 2. Double Quotes Inside Double Quote String
var text = "I feel \"high\"";
console.log(text); // I feel "high"

// 3. Using Both Quotes — Mix & Match
var content = "<p class=\"special\">Hello World!</p>";
var hello = '<p class="special">I\'d like to say "Hi"</p>';

// 4. Template Literals (ES6+)
// **Backticks ()** let you write strings that can include both 'and"` without escaping.
// Also support multi-line strings and interpolation.
var x = `"Escaping " and ' can become very annoying"`;
console.log(x); // "Escaping " and ' can become very annoying"

// 5. HTML Entities in Strings
var hi = "<p class='special'>I'd like to say &quot;Hi&quot;</p>";
var hello = '<p class="special">I&apos;d like to say "Hi"</p>';
console.log(hi)
console.log(hello)

