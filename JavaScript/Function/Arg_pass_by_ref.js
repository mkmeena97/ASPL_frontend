
/*
   - Jab aap kisi object ya array ko pass karte ho, to uski memory location pass hoti hai, not the actual object
   - Agar function me object me changes krte h to original me bhi changes hote h
   - But only Function me object reassign kre to original object ka reference same hi rahta h 
*/

// Objects & Arrays are passed by Reference
function changeObj(obj) {
  obj.name = "Tez Bhai";
}
let person = { name: "Mahendra" };
changeObj(person);
console.log(person.name); // Output: Tez Bhai ✅

//BUT if you reassign inside function?
function reassignObj(obj) {
  obj = { name: "Another" };
}
let user = { name: "Tez" };
reassignObj(user);
console.log(user.name); // Output: Tez ❗
