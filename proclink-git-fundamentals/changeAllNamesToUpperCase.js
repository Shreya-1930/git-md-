/**
 * Converts all names in a string to uppercase.
 *
 * @param {string} namesString - A string containing one or more names separated by commas.
 * @returns {string} - The input string with all names converted to uppercase.
 */
function toUpperCase(namesString) {
  // Split the input string into an array of names
  const names = namesString.split(",");

  // Convert each name to uppercase
  const uppercaseNames = names.map((name) => name.trim().toUpperCase());

  // Join the uppercase names back into a string
  const result = uppercaseNames.join(", ");

  return result;
}

const input = "phani, lohith, varun";
const output = toUpperCase(input);
console.log(output); // Output: JOHN, JANE, BOB
