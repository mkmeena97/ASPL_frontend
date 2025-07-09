const obj = {};
  obj.self = obj;

  try {
    JSON.stringify(obj); //  Will throw TypeError
  } catch (err) {
    console.log("Caught error:", err.message);
  }