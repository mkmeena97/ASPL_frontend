//Method 1: Using every()
const arr = [5, 5, 5];
const allSame = arr.every(val => val === arr[0]);
console.log(allSame); // true

//Method 2: Using Set (Quick Trick)
const arr1 = [1, 1, 1];
const allEqual = new Set(arr1).size === 1;
console.log(allEqual); // true

//Real-Life Example: Voting System
const votes = ['yes', 'yes', 'yes'];
const unanimous = votes.every(v => v === votes[0]);

if (unanimous) {
  console.log("Decision is unanimous ");
} else {
  console.log("Disagreement in team ");
}

//Grading
const grades = ['A', 'A', 'A'];
const result = new Set(grades).size === 1;

console.log(result ? "All got same grade 🎯" : "Grades vary 😐");

