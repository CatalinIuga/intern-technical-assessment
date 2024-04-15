package main

import (
	"fmt"
	"strings"
)

// Each step has a number of '#' characters equal to the step number (i)
// As such, each step has n-i spaces followed by i '#' characters.
func Staircase(n int) {
	// loop through each step
	for i := 1; i <= n; i++ {
		// create a string with n-i spaces followed by i '#' characters
		var s string = strings.Repeat(" ", n-i) + strings.Repeat("#", i)

		// add a newline character if this is not the last step
		if i != n {
			s += "\n"
		}

		fmt.Print(s)
	}
}

func main() {
	var n int
	fmt.Print("Enter the number of rows for the staircase: ")

	_, err := fmt.Scan(&n)
	if err != nil {
		fmt.Println("Error reading input")
		return
	}

	fmt.Println("The staircase is:")
	Staircase(n)
}
