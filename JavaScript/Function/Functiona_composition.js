/*
    - Combining multiple small functions together to form a new function.
    - f(g(x)) — jahan output of g becomes input to f.

*/

//Example
const double = x => x * 2;
const square = x => x * x;

const composed = x => square(double(x));

console.log(composed(5)); // (5 * 2) = 10 → (10 * 10) = 100
