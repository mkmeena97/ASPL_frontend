"use strict";

function sum(a, b) {
  a = 10;
  console.log(arguments[0]); // Still shows original value, not 10
}
sum(5, 6);
