"use strict";

// ES6+ code
var user = {
  name: "Rajeshwari",
  greet: function greet() {
    console.log("Hi, ".concat(this.name, "!"));
  }
};
user.greet();