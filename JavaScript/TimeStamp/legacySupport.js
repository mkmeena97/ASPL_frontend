// legacySupport.js

function getTimestampLegacySafe() {
  return new Date().getTime(); // millisecond timestamp
}

console.log(`Legacy safe timestamp: ${getTimestampLegacySafe()}`);
// Example Output: Legacy safe timestamp: 1688000000000 
// This function ensures compatibility with older JavaScript environments
// that may not support newer timestamp methods or features.