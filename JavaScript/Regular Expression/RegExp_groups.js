

//Example 
const regex = /(\d{2})-(\d{2})-(\d{4})/;
const result = regex.exec("Date: 18-06-1997");

console.log(result);
/*
[
  '18-06-1997',  // full match [0]
  '18',          // group 1 (day)
  '06',          // group 2 (month)
  '1997',        // group 3 (year)
  index: 6,
  input: 'Date: 18-06-1997'
]
*/


//Extracting Names
const str = "Name: Tez Singh";
const regex1 = /Name:\s(\w+)\s(\w+)/;

const match = regex1.exec(str);
console.log(match[1]); // Tez
console.log(match[2]); // Singh


