# Datastructures

## Leetcode imports

```go
import (
    "https://github.com/emirpasic/gods/tree/v1.18.1"
)
```

## Without Imports

Note: I don't agree with implementing these, that is a waste of interview time.

- Stacks: use a slice
- Queue: use a slice.
- Heaps: container/heap
- Doubly-linked lists: never needed, but there's container/list.
- Binary Indexed Tree, Segment Tree, Disjoint Set Union, RMQ: implement it. They are unusual to find in the standard library for any language.