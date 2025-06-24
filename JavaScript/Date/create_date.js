// 1. Current Date and Time
const now = new Date();
console.log(now.toString()); // Current local time
console.log(now.toISOString()); // UTC format

// 2. Milliseconds Since Epoch (Jan 1, 1970 UTC)
const epoch = new Date(0);
console.log(epoch.toISOString()); // "1970-01-01T00:00:00.000Z"

const twoSecLater = new Date(2012);
console.log(twoSecLater.toISOString()); // "1970-01-01T00:00:02.012Z"

//3. Using year, month, day, ... format
// Note: Months are 0-indexed
const janFirst = new Date(2025, 0);  // Jan = 0
console.log(janFirst.toString());    // "Sun Jan 01 2012 ..."

const febFirst = new Date(2025, 1);
console.log(febFirst.toString());    // "Wed Feb 01 2012 ..."

//4. Using Date.UTC()
const utc = new Date(Date.UTC(2012, 0)); // January 1, 2012, UTC
console.log(utc.toISOString());         // "2012-01-01T00:00:00.000Z"

//5. Using Date Strings
//ISO Format (safe & recommended)
const iso = new Date('2012-01-01T00:00:00.000Z');
console.log(iso.toISOString()); // "2012-01-01T00:00:00.000Z"

//RFC Format
const rfc = new Date('Sun, 01 Jan 2012 00:00:00 -0600');
console.log(rfc.toString()); // "Sun Jan 01 2012 ..."

//Locale-dependent (UNSAFE)
const sketchy = new Date('11/12/2012');
console.log(sketchy.toString()); // Can be Nov 12 or Dec 11 depending on browser/locale

//6. Overflow Handling
const roll = new Date(2012, 12, 32, 25, 62, 62, 1023);
console.log(roll.toString()); // Rolls to: Sat Feb 02 2013 02:03:03 ...


//7. Special Behavior for Years 0–99
const weird = new Date(12, 0); // Jan 1, 1912 (❗)
console.log(weird.toString()); // Not year 12!

weird.setFullYear(12); // Fix it
console.log(weird.toString()); // Year 12 CE
