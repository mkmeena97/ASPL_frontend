
  const jsonData = '{"name":"Tez", "joined":"2024-01-15"}';

  const obj = JSON.parse(jsonData, (key, value) => {
    if (key === "joined") {
      return new Date(value);
    }
    return value;
  });

  console.log("Joined Date Object:", obj.joined.toDateString());

