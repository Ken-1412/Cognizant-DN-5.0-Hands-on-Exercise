# 📊 Module 2 — Data Structures and Algorithms

> **In simple words:** If programming is cooking, then data structures are your kitchen tools (pots, pans, knives) and algorithms are your cooking techniques (chopping, frying, baking). You need both to make good food — I mean, good software. 😄

---

## 🎯 Why Does This Matter?

Here's a real scenario: You're building an e-commerce app with **1 million products**. A customer searches for "laptop." Do you:

- **Option A:** Check every single product one by one? (That's 1 million checks 😬)
- **Option B:** Use a smart search that finds it in about 20 checks? (That's binary search 🚀)

This module taught me how to pick the right tool for the job and how to **think about performance** before writing code.

---

## 🗂️ What I Built (7 Real-World Projects)

Each exercise simulates a **real business problem** — not some textbook theory.

---

### 📦 Exercise 1: Inventory Management System

> **The Problem:** An online store needs to add, update, and delete products quickly.

**What I learned:**
- How `ArrayList` and `HashMap` store data differently
- Why `HashMap` gives you O(1) lookups (insanely fast!)
- When to use which data structure

```
ArrayList → Great when you need ordered data and loop through everything
HashMap   → Great when you need to find things FAST by a key (like product ID)
```

> 📁 `src/exercise01/inventory/`

---

### 🔍 Exercise 2: E-Commerce Search

> **The Problem:** How do you search through thousands of products efficiently?

**What I learned:**
- **Linear Search** → Check one by one. Simple but slow. O(n)
- **Binary Search** → Jump to the middle, eliminate half each time. O(log n)

```
Linear Search:  [1] [2] [3] [4] [5] [6] [7] [8] → Check ALL of them 😩
Binary Search:  [1] [2] [3] [4] [5] [6] [7] [8] → Check middle, go left or right 🎯
```

> ⚠️ **Important:** Binary search only works on **sorted** data. Always sort first!

> 📁 `src/exercise02/search/`

---

### 📋 Exercise 3: Sorting Customer Orders

> **The Problem:** An e-commerce site needs to sort orders by price for reporting.

**What I learned:**
- **Bubble Sort** → Compares neighbors and swaps. Easy to understand, but slow for large data. O(n²)
- **Quick Sort** → Picks a pivot and partitions. Much faster! O(n log n) on average

```
Bubble Sort:  [5, 3, 8, 1] → Compare & swap neighbors → Very slow for big lists
Quick Sort:   [5, 3, 8, 1] → Pick pivot, partition    → Way faster!
```

> 💡 **When to use what:** Use Bubble Sort only for learning or tiny datasets. For real apps, always go with Quick Sort (or Java's built-in `Arrays.sort()` which uses a variant of Quick Sort).

> 📁 `src/exercise03/sorting/`

---

### 👥 Exercise 4: Employee Management System

> **The Problem:** Manage employees using arrays — add, search, update, delete.

**What I learned:**
- How arrays work at a low level
- The cost of inserting/deleting in the middle of an array (everything shifts!)
- Time complexity of basic operations:

| Operation | Time Complexity | Why |
|-----------|----------------|-----|
| Access by index | O(1) | Jump straight to the position |
| Search by name | O(n) | Have to check each element |
| Insert at end | O(1) | Just add at the next slot |
| Delete from middle | O(n) | Everything after it shifts left |

> 📁 `src/exercise04/employee/`

---

### ✅ Exercise 5: Task Management System

> **The Problem:** Build a to-do list where tasks can be added/removed dynamically.

**What I learned:**
- How **Linked Lists** work (each node points to the next one)
- Why linked lists are great for frequent insertions/deletions
- The difference between arrays and linked lists:

```
Array:        [Task1 | Task2 | Task3 | Task4]  ← Fixed size, fast access
Linked List:  Task1 → Task2 → Task3 → Task4   ← Dynamic size, fast insert/delete
```

> 📁 `src/exercise05/linkedlist/`

---

### 📚 Exercise 6: Library Management System

> **The Problem:** Search for books by title — efficiently.

**What I learned:**
- Implemented both Linear and Binary search for book titles
- Compared their performance side by side
- Understood why **sorting + binary search** beats linear search every time for large datasets

> 📁 `src/exercise06/library/`

---

### 📈 Exercise 7: Financial Forecasting

> **The Problem:** Predict future values using recursive calculations.

**What I learned:**
- How **recursion** works (a function calling itself)
- When recursion is elegant vs. when it's a trap (stack overflow!)
- Optimization techniques to avoid redundant calculations

```
Recursion in a nutshell:
  "To understand recursion, you must first understand recursion." 😄

But seriously:
  forecast(5) = forecast(4) + growth
  forecast(4) = forecast(3) + growth
  ...until you hit the base case
```

> 📁 `src/exercise07/forecasting/`

---

## 🧭 How to Run These Exercises

1. **Open** this module folder in **IntelliJ IDEA**
2. **Navigate** to any exercise folder (e.g., `src/exercise01/inventory/`)
3. **Find** the main file (usually named `*Management.java`, `*Demo.java`, or similar)
4. **Right-click** → **Run** (or press `Shift + F10`)
5. **Read** the console output to see the results!

Or if you prefer the command line:
```bash
cd src/exercise01/inventory
javac InventoryManagement.java Product.java
java inventory.InventoryManagement
```

---

## 🔑 Key Concepts Cheat Sheet

| Concept | What It Means | Example |
|---------|--------------|---------|
| **O(1)** | Constant time — doesn't matter how much data you have | HashMap lookup |
| **O(n)** | Linear time — grows with data size | Linear search |
| **O(log n)** | Logarithmic — grows very slowly | Binary search |
| **O(n²)** | Quadratic — avoid for large data! | Bubble sort |
| **O(n log n)** | Best practical sorting speed | Quick sort |

---

## 💡 What I Took Away

- Always **think about performance** before coding — "Will this work with 1 million records?"
- Pick the **right data structure** for each problem (HashMap vs. ArrayList vs. LinkedList)
- Binary search is your best friend, but **only works on sorted data**
- Recursion is powerful but can eat memory — always have a base case!

---

## ✍️ Author

**Ketan Singh**

> *"DSA isn't about memorizing algorithms. It's about developing the instinct to pick the right tool for the job."*
