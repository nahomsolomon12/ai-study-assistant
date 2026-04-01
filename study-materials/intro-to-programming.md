# Introduction to Programming

## What is Programming?
Programming is the process of writing instructions (code) that a computer can execute to perform specific tasks. A program is a set of these instructions written in a programming language.

## Key Concepts

### Variables
A variable is a named storage location in memory that holds a value. Variables have:
- **Name**: An identifier used to reference the value
- **Type**: The kind of data stored (number, text, boolean, etc.)
- **Value**: The actual data stored

```python
# Python example
age = 25          # integer variable
name = "Alice"    # string variable
is_student = True # boolean variable
```

### Data Types
Common data types include:
- **Integer (int)**: Whole numbers (e.g., 1, 42, -7)
- **Float**: Decimal numbers (e.g., 3.14, -0.5)
- **String (str)**: Text enclosed in quotes (e.g., "Hello")
- **Boolean (bool)**: True or False values
- **List/Array**: Ordered collection of values

### Control Flow
Control flow determines the order in which code executes.

#### Conditionals (if/else)
```python
temperature = 75

if temperature > 80:
    print("It's hot outside!")
elif temperature > 60:
    print("It's a nice day.")
else:
    print("It's cold outside!")
```

#### Loops
**For loop** — iterates over a sequence:
```python
for i in range(5):
    print(i)  # prints 0, 1, 2, 3, 4
```

**While loop** — repeats while a condition is true:
```python
count = 0
while count < 3:
    print(count)
    count += 1
```

### Functions
A function is a reusable block of code that performs a specific task.

```python
def greet(name):
    return f"Hello, {name}!"

message = greet("Bob")
print(message)  # Hello, Bob!
```

**Key parts of a function:**
- `def` keyword to define it
- **Parameters**: Input values the function accepts
- **Return value**: Output the function produces

### Comments
Comments are notes in code ignored by the computer, used to explain logic:
```python
# This is a single-line comment

"""
This is a
multi-line comment
"""
```

## Debugging
Debugging is the process of finding and fixing errors (bugs) in code.

**Types of errors:**
- **Syntax error**: Code violates language rules (e.g., missing colon)
- **Runtime error**: Code crashes during execution (e.g., dividing by zero)
- **Logic error**: Code runs but produces wrong results

## Algorithms
An algorithm is a step-by-step procedure to solve a problem. Good algorithms are:
- **Correct**: Produces the right output
- **Efficient**: Uses minimal time and memory
- **Clear**: Easy to understand

### Example: Finding the Maximum Value
```python
def find_max(numbers):
    max_val = numbers[0]
    for num in numbers:
        if num > max_val:
            max_val = num
    return max_val

print(find_max([3, 1, 9, 2, 7]))  # 9
```

## Practice Questions
1. What is the difference between a variable and a constant?
2. Write a function that takes two numbers and returns their sum.
3. What type of error occurs when you try to access an index that doesn't exist in a list?
4. Explain the difference between a for loop and a while loop.
5. What does it mean for an algorithm to be efficient?
