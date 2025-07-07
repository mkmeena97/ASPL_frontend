function memoize(fn) {
  const cache = {};
  return function (arg) {
    if (cache[arg]) return cache[arg];
    return (cache[arg] = fn(arg));
  };
}

// Example: Fibonacci with memoization
const fib = memoize(function (n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fib(40)); // Way faster than naive recursion
