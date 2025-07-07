// ❌ These cannot be used as variable/function/class names
// break, case, catch, class, const, continue,
// debugger, default, delete, do, else, export,
// extends, finally, for, function, if, import,
// in, instanceof, new, return, super, switch,
// this, throw, try, typeof, var, void, while,
// with, yield

let myClass = "safe"; // ✅ allowed
let myFunction = "safe"; // ✅ allowed
let myVariable = "safe"; // ✅ allowed

// let class = "fail"; // ❌ SyntaxError: Unexpected token 'class'
// let function = "fail"; // ❌ SyntaxError: Unexpected token 'function'
// let variable = "fail"; // ❌ SyntaxError: Unexpected token 'variable'   