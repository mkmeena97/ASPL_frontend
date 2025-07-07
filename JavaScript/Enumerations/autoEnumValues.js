// autoEnumValues.js

function createEnum(keys) {
  return Object.freeze(
    keys.reduce((acc, key, i) => {
      acc[key] = i;
      return acc;
    }, {})
  );
}

const LogLevel = createEnum(['INFO', 'WARN', 'ERROR']);

console.log(LogLevel.INFO);  // 0
console.log(LogLevel.WARN);  // 1
console.log(LogLevel.ERROR); // 2
