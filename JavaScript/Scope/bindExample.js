// bindExample.js
const dev = {
  name: "Tez",
  say() {
    console.log(`I'm ${this.name}`);
  }
};

const speak = dev.say.bind(dev);
speak(); // I'm Tez
