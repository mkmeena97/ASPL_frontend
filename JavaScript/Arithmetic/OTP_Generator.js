function generateSecureOTP(length = 6) {
  const digits = "0123456789";
  const otp = [];
  const randomValues = new Uint8Array(length);

  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    otp.push(digits[randomValues[i] % digits.length]);
  }

  return otp.join('');
}

console.log("Secure OTP:", generateSecureOTP()); // e.g., "781204"
