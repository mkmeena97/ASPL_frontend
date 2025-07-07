async function fetchUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  try {
    console.log(" Fetching user...");

    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(" User data:", data);
  } catch (err) {
    console.error(" API Error:", err.message);
  } finally {
    console.log(" Request finished");
  }
}

fetchUser(3);
