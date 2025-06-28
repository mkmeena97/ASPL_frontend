/*
Kabhi kabhi hume randomness chahiye, par equal nahi 
Real-world Use Cases:
- Loot drop system in games
- Random coupon selection
- Ad/banner rotation based on priority
- Quiz options (e.g. weighted difficulty)
*/

//Weighted Probability(70% chocolate, 20% biscuit, 10% Peanut)
function pickWithProbability() {
  const rand = Math.random(); // 0 to 1

  if (rand < 0.7) return "Chocolate";
  else if (rand < 0.9) return "Biscuit";
  else return "Peanut";
}

console.log(pickWithProbability());


console.log("------Generic Weighted Picker Function-----")
//Generic Weighted Picker Function
function weightedPick(options) {
  const rand = Math.random();
  let cumulative = 0;

  for (let i = 0; i < options.length; i++) {
    cumulative += options[i].prob;
    if (rand < cumulative) return options[i].value;
  }
}

const rewards = [
  { value: "Gold", prob: 0.5 },
  { value: "Silver", prob: 0.3 },
  { value: "Bronze", prob: 0.2 },
];

console.log(weightedPick(rewards)); // e.g. "Silver"
