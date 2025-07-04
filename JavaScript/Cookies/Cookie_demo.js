function setCookie(name, value, days = 7) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  console.log(`Cookie Added [${name}]:`, value);
}

function getCookie(name) {
  const value = decodeURIComponent(
    document.cookie
      .split("; ")
      .find(row => row.startsWith(name + "="))
      ?.split("=")[1] || ""
  );
  console.log(`Cookie fetched [${name}]:`, value || "Not Found");
  return value;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  console.log(`Cookie Deleted [${name}]`);
}


//Test
setCookie("user", "Tez Bhai", 1);
getCookie("user");
deleteCookie("user");
getCookie("user");

