export default function checkEmail(email) {
  try {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  } catch (err) {
    return true;
  }
}
