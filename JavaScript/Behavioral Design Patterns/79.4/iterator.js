class NameCollection {
  constructor() {
    this.names = ["Tez", "Tez", "Tilak", "Rahul"];
  }

  // Custom iterable using Symbol.iterator
  [Symbol.iterator]() {
    let index = 0;
    const names = this.names;

    return {
      next() {
        if (index < names.length) {
          return { value: names[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}

function iterate() {
  const output = document.getElementById("output");
  output.textContent = "";

  const nameCollection = new NameCollection();

  for (let name of nameCollection) {
    output.textContent += ` ${name}\n`;
  }
}
