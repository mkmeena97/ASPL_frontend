function isEven(num) {
    return (num & 1) === 0;
  }

  console.log(isEven(4)); // true
  console.log(isEven(7)); // false