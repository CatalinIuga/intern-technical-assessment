/**
 * Prints a staircase of size n. The staircase is right-aligned.
 * @param n - the size of the staircase
 */
function staircase(n: number): void {
  // loop trough each step of the staircase
  for (let step = 1; step <= n; step++) {
    // each line has n - step spaces and step # symbols
    // last line will have n - n (0) spaces and n # symbols
    // NOTE: console.log automatically adds a newline character - check the golang version for a version without it
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
