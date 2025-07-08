const obj = {
    name: "Tez",
    password: "secret123",
    role: "admin"
  };

  const safeJSON = JSON.stringify(obj, (key, value) => {
    if (key === "password") return undefined;
    return value;
  });

  console.log("Safe JSON:", safeJSON);