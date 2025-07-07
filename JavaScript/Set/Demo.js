//  User A's favorite languages
const userAFavs = new Set();

// 2: Add values
userAFavs.add("JavaScript").add("Python").add("Rust");
console.log("User A's Favorites:", userAFavs);

// 3: Remove value
userAFavs.delete("Rust");
console.log("After removal:", userAFavs);

// 4: Check if value exists
console.log("Has Python?", userAFavs.has("Python")); // true

// 5: Clear (let’s pretend user clears all)
const userBPrefs = new Set(["Python", "Go", "JavaScript", "Go"]); // duplicate "Go"

//6: Get size
console.log("User B count:", userBPrefs.size); // 3 (Go only once)

// 7: Convert to array (for rendering, sending to server, etc.)
const userBLangArray = [...userBPrefs];
console.log("User B Array:", userBLangArray); // ["Python", "Go", "JavaScript"]

// 8: Intersection & Difference
const commonLangs = new Set([...userAFavs].filter(lang => userBPrefs.has(lang)));
console.log("Common Languages:", commonLangs); // Set { "JavaScript", "Python" }

const uniqueToB = new Set([...userBPrefs].filter(lang => !userAFavs.has(lang)));
console.log("Languages only User B likes:", uniqueToB); // Set { "Go" }

// 9: Iteration
console.log("Iterating User A's languages:");
for (const lang of userAFavs) {
  console.log("👉", lang);
}
