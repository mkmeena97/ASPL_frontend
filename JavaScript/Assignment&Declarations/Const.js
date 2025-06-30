/*
 - const se banaya variable reassign nahi ho sakta.
 - BUT, agar wo ek object hai, to uske properties modify ho sakte hain.
 - const protects the binding, not the contents (if it's an object/array).
 - const ka use tab karo jab reassignment ki zarurat nahi ho.
*/

const x = 10;
x = 20; // TypeError: Assignment to constant variable.

const user = { name: "Tez" };
user.name = "Mahendra"; // allowed

