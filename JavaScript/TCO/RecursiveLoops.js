//Without TCO (normal recursion)

  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  console.log(factorial(5)); // 120


// TCO-Friendly Version

  function factorialTCO(n, acc = 1) {
    if (n === 0) return acc;
    return factorialTCO(n - 1, acc * n);
  }

  console.log(factorialTCO(5)); // 120

