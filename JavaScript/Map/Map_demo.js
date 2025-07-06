
// Create a new Map to track submissions
const submissions = new Map();

// Student objects 
const student1 = { id: 1, name: "Anjali" };
const student2 = { id: 2, name: "Tez" };
const student3 = { id: 3, name: "Ravi" };

// Set submissions
submissions.set(student1, "console.log('Hello World');");
submissions.set(student2, "function add(a, b) { return a + b; }");

// Get a specific submission 
console.log(`Tez's submission:`, submissions.get(student2));

// Check if Ravi submitted 
if (!submissions.has(student3)) {
  console.log("Ravi has not submitted yet.");
}

// Ravi submits
submissions.set(student3, "let x = 5 * 5;");

// Total submissions
console.log(`Total submissions: ${submissions.size}`);

// Iterate over all submissions 
console.log("---- All Submissions ----");
submissions.forEach((code, student) => {
  console.log(`${student.name}: ${code}`);
});

// Delete Ravi’s submission 
submissions.delete(student3);
console.log("Ravi's submission deleted.");

// Check total again
console.log(`Submissions after delete: ${submissions.size}`); 

// Clear all 
submissions.clear();
console.log("All submissions cleared.");

// Final size
console.log(`Final count: ${submissions.size}`);
