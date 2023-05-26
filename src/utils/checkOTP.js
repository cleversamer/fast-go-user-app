export default function checkOTP(otp) {
  try {
    const otpRegex = /^\d{6}$/;
    return otpRegex.test(otp);
  } catch (err) {
    return true;
  }
}
