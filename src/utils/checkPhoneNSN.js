export default function checkPhoneNSN(phoneNSN) {
  try {
    // Remove any whitespace from the input string
    phoneNSN = phoneNSN.replace(/\s/g, "");

    // Check if the string consists of exactly 9 digits
    return /^\d{9}$/.test(phoneNSN);
  } catch (err) {
    return true;
  }
}
