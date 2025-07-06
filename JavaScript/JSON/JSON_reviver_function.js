//When you want to modify or transform values during parsing.
//JSON Reviver Function
const jsonStr = '{"date":"2025-07-06"}';
const obj = JSON.parse(jsonStr, (key, value) => {
  return key === "date" ? new Date(value) : value;
});
