class Product {
  constructor(price) {
    this._price = price;
  }

  get price() {
    return `$${this._price.toFixed(2)}`;
  }

  set price(value) {
    if (value > 0) {
      this._price = value;
    } else {
      console.log("Invalid price");
    }
  }
}

const item = new Product(99.99);
console.log(item.price); // $99.99

item.price = 150;
console.log(item.price); // $150.00

item.price = -10; // Invalid price
