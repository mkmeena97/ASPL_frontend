/*
| Operator | Name            | Example    | Result (5, 3)  |     |     |
| -------- | --------------- | ---------- | -------------- | --- | --- |
| `&`      | AND             | `5 & 3`    | `1`            |     |     |
| \`       | \`              | OR         | \`5            | 3\` | `7` |
| `^`      | XOR             | `5 ^ 3`    | `6`            |     |     |
| `~`      | NOT (1's comp)  | `~5`       | `-6`           |     |     |
| `<<`     | Left Shift      | `5 << 1`   | `10`           |     |     |
| `>>`     | Right Shift     | `5 >> 1`   | `2`            |     |     |
| `>>>`    | Zero-fill R. S. | `-5 >>> 1` | Big Positive   |     |     |

*/
console.log(5 & 3);   // 1  → 101 & 011 = 001
console.log(5 | 3);   // 7  → 101 | 011 = 111
console.log(5 ^ 3);   // 6  → 101 ^ 011 = 110
console.log(~5);      // -6 → ~00000101 = 11111010 (2's comp)
console.log(5 << 1);  // 10 → 00000101 << 1 = 00001010
console.log(5 >> 1);  // 2  → 00000101 >> 1 = 00000010
console.log(-5 >>> 1); // 2147483645 


//Example
const READ = 1;      // 001
const WRITE = 2;     // 010
const EXECUTE = 4;   // 100

let permission = READ | WRITE; // 001 | 010 = 011 (3)

console.log("Permission",permission & READ);    // 1 (has READ)
console.log("permission",permission & EXECUTE); // 0 (no EXECUTE)
console.log("permission",permission & WRITE); // 0 (no EXECUTE)


