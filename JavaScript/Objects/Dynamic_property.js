const key = "username";
const user = {
  [key]: "Tez"
};

console.log(user.username); // "Tez"

//Dynamic with Expressions
const prefix = "data_";
const user1 = {
  [prefix + "id"]: 101,
  [prefix + "role"]: "admin"
};

console.log(user1.data_id);   // 101
console.log(user1.data_role); // "admin"


//Use in Loops
const fields = ["name", "age", "email"];
const values = ["Tez", 27, "tez@example.com"];

const user2 = {};

fields.forEach((field, index) => {
  user2[field] = values[index];
});

console.log(user2);
// { name: "Tez", age: 27, email: "tez@example.com" }


//Real-Life Use Case
//API response ko custom object banana
function mapData(fields, data) {
  return fields.reduce((acc, key, i) => {
    acc[key] = data[i];
    return acc;
  }, {});
}

const result = mapData(["id", "status"], [101, "active"]);
console.log(result); // { id: 101, status: "active" }
