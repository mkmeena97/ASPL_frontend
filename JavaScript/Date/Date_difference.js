
// .valueOf() give time in millisecondsc
//1. Date difference in year
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 50000);  // 50 seconds ahead

var dateDiff = date2.valueOf() - date1.valueOf();  // -5000
console.log(dateDiff)
var dateDiffInYears = dateDiff / 1000 / 60 / 60 / 24 / 365;

console.log("Date difference in years: " + dateDiffInYears);

//2. Date difference in Days
var date1 = new Date('2024-06-01');
var date2 = new Date('2025-06-01');

var diffInMs = date2 - date1;
var diffInDays = diffInMs / (1000 * 60 * 60 * 24);

console.log(`Difference in days: ${diffInDays}`);

