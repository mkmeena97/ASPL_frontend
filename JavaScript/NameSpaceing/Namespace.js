/*
    - Namespace ka simple matlab hota hai: ek logical container jisme functions, variables group karke rakhte ho taaki global scope pollute na ho.
*/

var MyApp = {};

MyApp.sayHello = function() {
  console.log("Hello from MyApp!");
};

MyApp.user = {
  name: "Tez",
  greet: function() {
    console.log(`Hi ${this.name}`);
  }
};

MyApp.sayHello();     // Hello from MyApp!
MyApp.user.greet();   // Hi Tez
