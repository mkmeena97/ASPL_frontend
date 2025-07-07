"use strict";

// ❌ SyntaxError
function f(a = 1) {
  "use strict";
}
// ❌ SyntaxError
function f(a, a) {
  "use strict";
}       
// ❌ SyntaxError
function f(a, b = 1, a) {
  "use strict";
}   
// ❌ SyntaxError
function f(a, b = 1, c = 2, a) {
  "use strict";
}       
// ❌ SyntaxError
function f(a, b = 1, c = 2, d = 3, a) {
  "use strict";
}