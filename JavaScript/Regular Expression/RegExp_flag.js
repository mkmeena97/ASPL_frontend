/*
    - Always test your regex with flags on a site like regex101.com.
    - g = Match all occurrences, not just the first
    - i	= Case-insensitive match
    - m	= Multiline	(^ and $ match start/end of lines, not whole string)
    - s	= Makes . match newlines too
    - u	= Treat pattern as a full Unicode string
    - y	= Match from lastIndex only — advanced use
*/


const str = 'Tez Tez Tez';

// Global (g):
//Without g, it only matches the first one.
const regex = /Tez/g;
console.log(str.match(regex)); // [ 'Tez', 'Tez', 'Tez' ]


//Ignore case (i):
const regex1 = /tez/i;
console.log('TeZ'.match(regex1)); // [ 'TeZ' ]

//Global + Ignore case (gi):
const regex2 = /tez/gi;
console.log(str.match(regex2));

//Multiline (m):
//Without m, ^ only matches the start of the entire string
//With m, it matches start of each line
const str1 = `line1
line2`;

const regex3 = /^line/m;
console.log(str1.match(regex3)); // [ 'line' ]

//DotAll (s): Dot normally skips newlines. Add s flag to fix that, 
const str2 = `Hello
World`;

const regex4 = /Hello.World/;     // doesn't match because . doesn't match newline
const regex5 = /Hello.World/s;   // works now


//RegExp Constructor with Flags:
const pattern = new RegExp('tez', 'gi'); // global + ignore case
