 
 // default label
 var o1 = 1, o2 = '2', o3 = "";
 console.count(o1);
 console.count(o2);
 console.count(o3);
 console.count(1);
 console.count('2');
 console.count('');


 // count function call
 function fetchData() {
    console.count("API fetch call");
    // Simulate API call
    // fetch("/api/data")
}

fetchData();
fetchData();
fetchData();

//Count function calls inside a loop
function doSomething(i) {
    console.count("Loop iteration");
    // some logic
}

for (let i = 0; i < 5; i++) {
    doSomething(i);
}


// Count event listeners firing
document.addEventListener("keydown", function (event) {
    console.count(`Key pressed: ${event.key}`);
});


