// Suppose cookies are:
document.cookie = "user=Tez";
document.cookie = "theme=dark";
document.cookie = "token=xyz123";

const getCookie = (name) =>
  document.cookie
    .split("; ")
    .find(row => row.startsWith(name + "="))
    ?.split("=")[1];

console.log(getCookie("user"));   // Tez
console.log(getCookie("theme"));  // dark
console.log(getCookie("token"));  // xyz123
console.log(getCookie("lang"));   // undefined (doesn’t exist)
