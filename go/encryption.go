package main

import (
	"bufio"
	"fmt"
	"math"
	"os"
	"strings"
)

func Encrypt(text string) {
	striped := strings.ReplaceAll(text, " ", "")
	striped = strings.ReplaceAll(striped, "\n", "")

	length := float64(len(striped))
	rows := math.Floor(math.Sqrt(float64(length)))
	cols := math.Ceil(math.Sqrt(float64(length)))

	for i := 0; i < int(rows); i++ {
		start := i * int(cols)
		end := int(math.Min(float64(i+1)*cols, length))
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
