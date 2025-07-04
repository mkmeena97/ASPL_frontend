
document.cookie.split(";").forEach(c => {
  const name = c.split("=")[0].trim();
  document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
});
