/**
 * Prints a staircase of size n. The staircase is right-aligned.
 * @param n - the size of the staircase
 */
function staircase(n: number): void {
  // loop trough each step of the staircase
  for (let step = 1; step <= n; step++) {
    // print n-step spaces and step hashes
    console.log(" ".repeat(n - step) + "#".repeat(step));
  }
}

const nStr = prompt("Enter the size for the staircase: ");
const n = parseInt(nStr || "not a number", 10);

if (isNaN(n)) {
  console.error("No number provided.");
  Deno.exit(1);
}

staircase(n);
