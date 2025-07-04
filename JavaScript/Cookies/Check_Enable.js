
function areCookiesEnabled() {
  document.cookie = "cookietest=1";
  const isEnabled = document.cookie.indexOf("cookietest") !== -1;
  // Clean up
  document.cookie = "cookietest=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  return isEnabled;
}

console.log(areCookiesEnabled()); // true or false
