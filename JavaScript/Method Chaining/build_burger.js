function Burger() {
  this.ingredients = [];
}

Burger.prototype = {
  addPatty() {
    this.ingredients.push('Patty');
    return this;
  },
  addCheese() {
    this.ingredients.push('Cheese');
    return this;
  },
  addLettuce() {
    this.ingredients.push('Lettuce');
    return this;
  },
  addSauce(type = 'Mayo') {
    this.ingredients.push(type + ' Sauce');
    return this;
  },
  toastBun() {
    this.ingredients.push('Toasted Bun');
    return this;
  },
  serve() {
    console.log('Burger with: ' + this.ingredients.join(', '));
    return this;
  },
  clone() {
    const newBurger = new Burger();
    newBurger.ingredients = [...this.ingredients];
    return newBurger;
  }
};


//use
const myBurger = new Burger();

myBurger
  .addPatty()
  .addCheese()
  .addLettuce()
  .addSauce('Tandoori')
  .toastBun()
  .serve(); //Burger with: Patty, Cheese, Lettuce, Tandoori Sauce, Toasted Bun


const spicyBurger = myBurger
  .clone()
  .addSauce('Spicy Peri-Peri')
  .serve();