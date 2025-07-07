function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.3
        ? resolve(" Data received")
        : reject(" Network error");
    }, 1000);
  });
}

function showLoader() {
  console.log(" Loading...");
}

function hideLoader() {
  console.log(" Loader hidden");
}

showLoader();

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    hideLoader(); // Hides regardless of success/failure
  });
