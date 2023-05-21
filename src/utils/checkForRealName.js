export default function checkRealName(name) {
  try {
    const englishNameRegex = /^[A-Za-z\s]+$/;
    const arabicNameRegex = /^[\u0621-\u064A\s]+$/;

    const isEnglishName = englishNameRegex.test(name);
    const isArabicName = arabicNameRegex.test(name);

    // Check if name is real
    return isEnglishName || isArabicName;
  } catch (err) {
    return true;
  }
}
