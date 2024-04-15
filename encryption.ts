/**
 * Prints the encryption matrix for the given text.
 * @param text - the text to encrypt
 */
function encrypt(text: string) {
  // remove all whitespaces from the text
  const cleanText = text.replaceAll(/\s/g, "");

  const length = cleanText.length;
  let rows = Math.floor(Math.sqrt(length));
  const cols = Math.ceil(Math.sqrt(length));

  // text length is less than the product of rows and columns
  // increment the number of rows to ensure we have enough space
  if (rows * cols < length) {
    rows++;
  }

  // loop through each row
  for (let i = 0; i < rows; i++) {
    // calculate the start index of the slice
    const startIdx = i * cols;
    // ensure the end index doesn't exceed the length of the text
    const endIdx = Math.min(startIdx + cols, length);

    // slice the text and print the row
    const row = cleanText.slice(startIdx, endIdx);
    console.log(row);
  }
}

const string = prompt("Enter the string to encrypt: ");

if (string === null || string === "") {
  console.error("No string provided.");
  Deno.exit(1);
}

encrypt(string);
