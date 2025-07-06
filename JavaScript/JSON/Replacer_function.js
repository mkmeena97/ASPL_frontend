/*
    What is a Replacer Function?
     - When we serialize an object with JSON.stringify(),
       we can pass a replacer function as the second argument to control:
        - Which properties get included
        - How they get transformed
     - Syntax = JSON.stringify(value, replacerFunction);
*/

const user = {
  username: "tez",
  email: "tez@code.com",
  password: "superSecret123",
};

//Use a replacer function to block password:
const secureStr = JSON.stringify(user, (key, value) => {
  if (key === "password") return undefined; // Hide it
  return value;
});

console.log(secureStr);
// {"username":"tez","email":"tez@code.com"}



//Transform Values
//Let’s say you're exporting a list of prices in rupees and want to auto-convert to dollars
const product = {
  name: "Laptop",
  priceInINR: 80000,
};

const str = JSON.stringify(product, (key, value) => {
  if (key === "priceInINR") {
    return value / 80 + " USD";
  }
  return value;
});

console.log(str);
// {"name":"Laptop","priceInINR":"1000 USD"}



