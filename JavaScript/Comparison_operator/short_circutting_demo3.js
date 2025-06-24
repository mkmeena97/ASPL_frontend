//Assigning fallback/default values using ||

let envPort = null;
let configPort = undefined;
let defaultPort = 8080;

let finalPort = envPort || configPort || defaultPort;
console.log("Port to use:", finalPort);  // Output: 8080
