/*
Use [Symbol.iterator] to make your object behave like an iterable.
Symbol.iterator: 	Special method that defines iteration
next() method:  	Returns { value, done } per step
done: true   	    Tells JS loop to stop
*/

//Simple Custom Iterable Example:
const iterableUser = {
  names: ["Tez", "Mahendra", "Coder"],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.names.length) {
          return { value: this.names[index++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

for (const name of iterableUser) {
  console.log(name);
}

// Output:
// Tez
// Mahendra
// Coder
