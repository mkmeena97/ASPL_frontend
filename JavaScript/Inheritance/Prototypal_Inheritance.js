/*
    - Yahan objects directly dusre objects se inherit karte hain
    - Object.create() se child ka prototype parent ban gaya.
*/

const bicyclePrototype = {
  type: 'Road Bike',
  hasBell: true,
  ringBell: function () {
    return 'Tring Tring!';
  }
};

const myCycle = Object.create(bicyclePrototype);

console.log(myCycle.type);         // 'Road Bike'
console.log(myCycle.ringBell());   // 'Tring Tring!'

//Now Change the Prototype
bicyclePrototype.type = 'Mountain Bike';
console.log(myCycle.type); // 'Mountain Bike'

