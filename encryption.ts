/**
 * Prints the encryption matrix for the given text.
 * @param text - the text to encrypt
 */
function encrypt(text: string): string {
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

  const encryptionMatrix: string[] = [];
  console.log(`Encryption Matrix: ${rows} x ${cols}\n`);
  // loop through each row
  for (let i = 0; i < rows; i++) {
    // calculate the start index of the slice
    const startIdx = i * cols;
    // ensure the end index doesn't exceed the length of the text
    const endIdx = Math.min(startIdx + cols, length);

    // slice the text and print the row
    const row = cleanText.slice(startIdx, endIdx);
    encryptionMatrix.push(row);
    console.log(row);
  }

  // EXTRA PART: encyption using the matrix
  const encryptedText = encryptionMatrix.map(rot13).join("&");

  return encryptedText;
}

/**
 * Decrypts the given text.
 * @param text - the text to decrypt
 */
function decrypt(text: string): string {
  console.log(
    `%cWARNING: The decrypted text does NOT match the original text, spaces were removed during encryption.`,
    "color:red"
  );
  return text.split("&").map(rot13).join("");
}

/**
 * Encrypts the given text using the ROT13 algorithm.
 * @param text - the text to encrypt
 */
function rot13(text: string): string {
  // for each character in the text
  return text.replace(/[a-zA-Z]/g, (char) => {
    // char code for the current character
    const charCode = char.charCodeAt(0);

    // offset for rot 13
    let offset = 13;

    // check if the character is uppercase or lowercase
    if (char >= "A" && char <= "Z") {
      offset = 65;
    } else if (char >= "a" && char <= "z") {
      offset = 97;
    }

    // Apply the ROT13 algorithm:
    // - We get the index in the alphabet by subtracting the offset
    // - Add 13 to the index and wrap around the alphabet
    // - Get the character code by adding the offset back
    return String.fromCharCode(((charCode - offset + 13) % 26) + offset);
  });
}

const string = prompt("Enter the string to encrypt: ");

if (string === null || string === "") {
  console.error("No string provided.");
  Deno.exit(1);
}

const encrypted = encrypt(string);
console.log(`\nEncrypted text: ${encrypted}`);
console.log(`Decrypted text: ${decrypt(encrypted)}`);
