// 62.3-arguments.js
function normalFunc() {
  console.log(arguments); // Works
}

const arrowFunc = () => {
  // console.log(arguments); ❌ Error: arguments is not defined
};

normalFunc(1, 2, 3); // [Arguments] { '0': 1, '1': 2, '2': 3 }
arrowFunc(); // Throws if uncommented
