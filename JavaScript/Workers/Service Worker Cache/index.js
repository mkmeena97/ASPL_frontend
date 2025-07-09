//Step 1- Register
if("serviceWorker" in navigator){
  window.addEventListener("load", function(){
    this.navigator.serviceWorker.register("service-worker.js").then(
        function(registration){
            console.log("Registration Successful with scope ", registration.scope);
        },
        function (err){
            console.log("Registration Failed", err);
        }
    );
  });
}

//Installation
//Activation

