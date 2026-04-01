# Data Structures

## What is a Data Structure?
A data structure is a way of organizing and storing data so it can be accessed and modified efficiently. Choosing the right data structure is crucial for writing efficient programs.

---

## Arrays / Lists

An **array** (or **list** in Python) is an ordered collection of elements stored at contiguous memory locations.

### Characteristics
- **Indexed**: Elements accessed by position (starting at 0)
- **Fixed or dynamic size** depending on language
- **O(1) access** by index
- **O(n) search** for unsorted arrays

### Python Example
```python
fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # apple
print(fruits[-1])  # cherry (last element)

fruits.append("date")   # add to end
fruits.remove("banana") # remove by value
fruits.pop(0)           # remove by index
```

### When to Use
- You need fast access by index
- Data has a natural sequential order
- Size is known ahead of time

---

## Linked Lists

A **linked list** is a sequence of nodes where each node contains data and a pointer to the next node.

### Types
- **Singly linked**: Each node points to the next
- **Doubly linked**: Each node points to both next and previous
- **Circular**: Last node points back to first

### Characteristics
- **O(1) insert/delete** at head
- **O(n) access** — must traverse from head
- No contiguous memory needed

### Conceptual Structure
```
[data|next] → [data|next] → [data|next] → None
   Head                         Tail
```

### When to Use
- Frequent insertions/deletions at the beginning
- Size is unknown or changes frequently

---

## Stacks

A **stack** is a collection following **Last In, First Out (LIFO)** order.

### Operations
- **push**: Add item to the top
- **pop**: Remove item from the top
- **peek**: View top item without removing

```python
stack = []
stack.append(1)   # push
stack.append(2)   # push
stack.append(3)   # push
top = stack.pop() # pop → 3
print(stack)      # [1, 2]
```

### Real-World Uses
- Undo/redo functionality
- Function call stack in programs
- Evaluating expressions (e.g., parentheses matching)

---

## Queues

A **queue** is a collection following **First In, First Out (FIFO)** order.

### Operations
- **enqueue**: Add item to the back
- **dequeue**: Remove item from the front

```python
from collections import deque

queue = deque()
queue.append("Alice")   # enqueue
queue.append("Bob")     # enqueue
queue.append("Charlie") # enqueue
first = queue.popleft() # dequeue → "Alice"
```

### Real-World Uses
- Print job scheduling
- Customer service lines
- Breadth-first search (BFS)

---

## Hash Tables (Dictionaries)

A **hash table** stores key-value pairs and uses a hash function to compute an index for fast lookup.

### Characteristics
- **O(1) average** insert, delete, lookup
- Keys must be unique and hashable
- Unordered in most implementations

```python
student = {
    "name": "Alice",
    "age": 20,
    "gpa": 3.8
}

print(student["name"])  # Alice
student["major"] = "CS" # add new key
del student["age"]      # remove key

# Check if key exists
if "gpa" in student:
    print(student["gpa"])
```

### When to Use
- Fast lookup by key
- Counting occurrences
- Caching results

---

## Trees

A **tree** is a hierarchical data structure with a root node and subtrees of children.

### Binary Tree
Each node has at most **2 children** (left and right).

```
        5
       / \
      3   8
     / \ / \
    1  4 7   9
```

### Binary Search Tree (BST)
- Left child < Parent < Right child
- **O(log n)** search, insert, delete (when balanced)

### Common Terms
- **Root**: Top node (no parent)
- **Leaf**: Node with no children
- **Height**: Longest path from root to leaf
- **Depth**: Distance from root to a node

### Tree Traversals
- **In-order** (Left → Root → Right): Gives sorted output for BST
- **Pre-order** (Root → Left → Right): Used to copy a tree
- **Post-order** (Left → Right → Root): Used to delete a tree

---

## Graphs

A **graph** consists of **vertices** (nodes) connected by **edges**.

### Types
- **Directed**: Edges have direction (A → B)
- **Undirected**: Edges go both ways (A — B)
- **Weighted**: Edges have costs/distances

### Representations
**Adjacency List** (common):
```python
graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A"],
    "D": ["B"]
}
```

### Graph Algorithms
- **BFS (Breadth-First Search)**: Explores level by level — shortest path in unweighted graphs
- **DFS (Depth-First Search)**: Explores as deep as possible first

---

## Time Complexity Summary

| Structure    | Access | Search | Insert | Delete |
|-------------|--------|--------|--------|--------|
| Array        | O(1)   | O(n)   | O(n)   | O(n)   |
| Linked List  | O(n)   | O(n)   | O(1)*  | O(1)*  |
| Stack        | O(n)   | O(n)   | O(1)   | O(1)   |
| Queue        | O(n)   | O(n)   | O(1)   | O(1)   |
| Hash Table   | N/A    | O(1)   | O(1)   | O(1)   |
| BST (avg)    | O(log n)| O(log n)| O(log n)| O(log n)|

*At head/tail with pointer

---

## Practice Questions
1. What is the difference between a stack and a queue?
2. When would you choose a linked list over an array?
3. What makes a hash table efficient for lookups?
4. Describe the difference between BFS and DFS graph traversal.
5. What property defines a Binary Search Tree?
