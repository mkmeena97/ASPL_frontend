// Declaration and Usage

var myObject = {}; // empty object

var Mahendra = {
  firstname: "Mahendra",
  lastname: "Meena",
  fullname: "Mahendra Kumar Meena"
};

var Tilak = {
  firstname: "Tilak",
  lastname: undefined,
  fullname: "Tilak Bhau"
};

var Tez = {
  firstname: "Tez",
  lastname: "Bhalerao",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  }
};

// Accessing Object Properties

console.log(Mahendra.fullname);       // "John Doe"
console.log(Tilak.firstname);     // "Billy"
console.log(Tilak.lastname);     // "Billy"
console.log(Tez.fullname());     // "Billy"
