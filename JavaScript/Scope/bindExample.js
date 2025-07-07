// bindExample.js
const dev = {
  name: "Rajeshwari",
  say() {
    console.log(`I'm ${this.name}`);
  }
};

const speak = dev.say.bind(dev);
speak(); // I'm Rajeshwari
