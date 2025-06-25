const data = [
  [1, 'Tez'],
  [3, 'Bhai'],
  [2, 'Op']
];

//Sort by First Element (Index 0):
data.sort((a, b) => a[0] - b[0]);
console.log(data);
// [ [1, 'Tez'], [2, 'OP'], [3, 'Bhai'] ]

//Sort by Second Element (Index 1, Alphabetical):
data.sort((a, b) => a[1].localeCompare(b[1]));
console.log(data);
// [ [3, 'Bhai'], [2, 'OP'], [1, 'Tez'] ]


//Real-Life Example: Leaderboard Sorting
const scores = [
  ['Tez', 90],
  ['Bhai', 95],
  ['OP', 85]
];

// Sort descending by score
scores.sort((a, b) => b[1] - a[1]);
console.log(scores);
// [ ['Bhai', 95], ['Tez', 90], ['OP', 85] ]


