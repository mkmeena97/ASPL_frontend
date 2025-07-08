function isEven(num) {
    return (num & 1) === 0;      
  }

  console.log(isEven(-4)); // true  0100
  console.log(isEven(7)); // false 0111