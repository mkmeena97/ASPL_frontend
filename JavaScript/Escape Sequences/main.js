function showSequences() {
  const output = document.getElementById("output");

  const demo = `
🔹 Newline: First line\\nSecond line
    → "First line\nSecond line"

🔹 Tab: Hello\\tWorld
    → "Hello\tWorld"

🔹 Backslash: C:\\\\Users\\\\Tez
    → "C:\\Users\\Tez"

🔹 Single quote: It\\'s working!
    → 'It\'s working!'

🔹 Double quote: She said, \\\"Hello!\\\"
    → "She said, \"Hello!\""

🔹 Unicode: \\u2764
    → "\u2764" = ❤️

🔹 Hexadecimal: \\x41
    → "\\x41" = A
`;

  output.textContent = demo;
}
console.log(String.raw`Line 1\nLine 2`); // will print \n literally
