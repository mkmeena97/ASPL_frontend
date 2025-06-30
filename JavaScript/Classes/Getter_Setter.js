class Circle {
  constructor(radius) {
    this._radius = radius;
  }

  get area() {
    return Math.PI * this._radius ** 2;
  }

  set radius(r) {
    if (r > 0) this._radius = r;
  }
}

const c = new Circle(3);
console.log(c.area); // 28.27...
c.radius = 5;
console.log(c.area); // 78.53...
