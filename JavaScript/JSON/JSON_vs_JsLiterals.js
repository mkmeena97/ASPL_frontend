
  const jsLiteral = { name: "Tez", age: 21 };
  const jsonString = '{"name":"Tez","age":21}';

  const parsed = JSON.parse(jsonString);

  console.log("JS Literal:", jsLiteral);
  console.log("Parsed JSON:", parsed);

