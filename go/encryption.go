package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

// Prints the encrypted text in a grid format
func Encrypt(text string) {
	// remove all spaces, tabs and newlines from the text
	striped := strings.ReplaceAll(text, " ", "")
	striped = strings.ReplaceAll(striped, "\n", "")
	striped = strings.ReplaceAll(striped, "\t", "")

	length := float64(len(striped))
	rows := math.Floor(math.Sqrt(float64(length)))
	cols := math.Ceil(math.Sqrt(float64(length)))

	// if the matrix does not have enough space for all characters
	// add an extra row
	if rows*cols < length {
		rows++
	}

	// iterate over the rows
	for i := 0; i < int(rows); i++ {
		// compute the slice index for the current row
		start := i * int(cols)
		// compute the slice index for the next row,
		// keeping in mind that the last row may not have the same number of columns
		end := int(math.Min(float64(i+1)*cols, length))

		// print the current row
		fmt.Println(striped[start:end])
	}
}

func main() {
	fmt.Print("Provide the text to encrypt: ")
	reader := bufio.NewReader(os.Stdin)
	text, err := reader.ReadString('\n')
	if err != nil {
		fmt.Println("Error reading input: ", err)
		return
	}

	Encrypt(text)

}
