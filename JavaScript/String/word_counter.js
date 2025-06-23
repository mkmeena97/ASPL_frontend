function wordCount(val) {
   var wom = val.match(/\S+/g); // Match all words (non-whitespace groups)
   return {
      charactersNoSpaces: val.replace(/\s+/g, '').length, // Remove all whitespace, then count
      characters: val.length,                              // Total characters (including spaces)
      words: wom ? wom.length : 0,                         // Total words
      lines: val.split(/\r*\n/).length                     // Split by newline to count lines
   };
}


let sample = `Hello world!
How are you doing today?`;

let result = wordCount(sample);

console.log(result);