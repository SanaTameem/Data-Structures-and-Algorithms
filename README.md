## Algorithms

An algorithm is a step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem. Algorithms take inputs, process them through a series of well-defined steps, and produce outputs.

## Data Structures

Data structures are specialized formats for organizing, processing, and storing data. They enable efficient access and modification of data. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.

## Big O Asymptotic Analysis

Good code can be described by two characteristics:

- **Readable**
- **Scalable:** This means that as the input size increases, the code should not slow down significantly.

Big O notation is the language we use to discuss how long an algorithm takes to run. We can compare two algorithms using Big O notation to determine which is better.

We want to know when we increase the input size, how much more time the algorithm will take to run. Big O notation can measure this for us.

While we can measure the performance of code using `performance`, due to variations in the power of CPUs in different computers, the better way for measuring performance is using Big O notation.

You can check `Example #1` in `BigO.js` for using `performance` for measuring.

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="./images/Big-O chart.png" alt="Big O chart">
</div>

## Types of Big O

### O(n)

- The first type of Big O notation is O(n).
- O(n) is the most common one.
- It is called Linear Time, which means that as the input size increases, the number of operations increases linearly.
- You can check `Example #2` in `BigO.js` for O(n).

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="./images/O(n) graph.png" alt="O(n) graph">
</div>

### O(1)

- Another Big O notation is O(1).
- O(1) is an excellent Big O notation.
- It is called Constant Time.
- It means that the number of operations is constant. As the input size increases, the number of operations remains the same.
- You can check `Example #3` in `BigO.js` for O(1).

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="./images/O(1) graph.png" alt="O(1) graph">
</div>
<br>

- We can round down even O(100) to just O(1) because it's constant.
- You can check `Example #4` in `BigO.js` for O(2), which we will count as O(1) in calculating Big O.