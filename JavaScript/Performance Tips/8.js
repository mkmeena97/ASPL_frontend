const a = 42;      // int
const b = 3.14;    // float

// Mixing int + float + string = slowdowns in engines
const sum = a + b + "ms"; // avoid mixing types when possible
