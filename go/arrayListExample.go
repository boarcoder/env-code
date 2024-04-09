package main

import (
	"fmt"
	"strings"
	"testing"

	"github.com/emirpasic/gods/lists/arraylist"
	"github.com/emirpasic/gods/utils"
)

func main() {
	fmt.Println("Hello world")

	list := arraylist.New()
	list.Add("a")
	list.Add("b", "c", "d")
	list.Sort(utils.StringComparator)

	// value, inBounds := list.Get(0)
	fmt.Println(list)

	fmt.Println("run tests")
	testing.RunTests("Test")
}

func getString(prefix string) interface{} {
	var sb strings.Builder
	sb.WriteString(prefix)
	sb.WriteString(" with appended text")
	res := sb.String()
	return res
}

func TestAdd(t *testing.T) {
	t.Log("getString should return the prefix with appended text")
	actual := getString("prefix")
	expected := "prefix with appended text"
	if actual != expected {
		t.Errorf("")
	}
}
