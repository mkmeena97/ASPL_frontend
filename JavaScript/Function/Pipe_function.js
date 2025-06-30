/*
    - JavaScript mein often right-to-left (mathematically accurate) style follow karte hain. Agar left-to-right chahiye, to pipe() function banate hain
*/

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const increment = x => x + 1;
const double = x => x * 2;

const addThenDouble = pipe(increment, double); // double(increment(x))

console.log(addThenDouble(4)); // (4+1)=5 → (5*2)=10
