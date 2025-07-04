/*
  - Object.create(proto) = Best way to create with prototype.
  - Object.create(null) = No prototype, no pollution.
  - Object.setPrototypeOf() = Aata hai kaam, par thoda heavy hai.
*/

//Step 1: Prototype Object
const vehicle = {
  start() {
    return 'Engine started!';
  }
};


//Step 2: Create car from vehicle
const car = Object.create(vehicle);
car.brand = 'Tesla';

console.log(car.brand);     // Tesla
console.log(car.start());   // Engine started!
