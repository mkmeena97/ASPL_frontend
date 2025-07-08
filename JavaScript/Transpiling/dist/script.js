"use strict";

// ES6+ code
var user = {
  name: "Tez",
  greet: function greet() {
    console.log("Hi, ".concat(this.name, "!"));
  }
};
user.greet();