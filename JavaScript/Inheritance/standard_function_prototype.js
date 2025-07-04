/*
   - JavaScript me har function ek object hota hai,
    aur har function ke paas ek default property hoti hai .prototype.
     Ye hi property use hoti hai inheritance ke liye.
 
*/

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const p1 = new Person("Tez");
p1.sayHello(); // Hello, my name is Tez
