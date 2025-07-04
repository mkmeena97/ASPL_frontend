function CarFactory() {}
CarFactory.companyName = 'Tesla'; // STATIC property

// Prototype property - sab cars isse inherit karengi
CarFactory.prototype.color = 'red';


const myCar = new CarFactory();

console.log(CarFactory.companyName); // 'Tesla' 
console.log(myCar.companyName);      // undefined

console.log(myCar.color);            // 'red' (prototype se mila)
