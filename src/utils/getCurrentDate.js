export default function getCurrentDate() {
  try {
    const date = new Date();

    // Get day, month, and year values
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = String(date.getFullYear());

    // Format the date as "DD-MM-YYYY"
    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  } catch (err) {
    return Date.now();
  }
}
