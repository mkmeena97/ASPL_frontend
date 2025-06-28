function generateSecurePassword(length = 12) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";
  const result = [];
  const array = new Uint8Array(length);

  crypto.getRandomValues(array);

  for (let i = 0; i < length; i++) {
    result.push(chars[array[i] % chars.length]);
  }

  return result.join('');
}

console.log("Secure Password:", generateSecurePassword());
