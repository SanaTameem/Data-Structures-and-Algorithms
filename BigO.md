## Big O Asymptotic Analysis

Big O notation is the language we use to discuss how long an algorithm takes to run. We can compare two algorithms using Big O notation to determine which is better.

We want to know when we increase the input size, how much more time the algorithm will take to run. Big O notation can measure this for us.

While we can measure the performance of code using `performance`, due to variations in the power of CPUs in different computers, the better way for measuring performance is using Big O notation.
<br>

```
Example #1 : Using Performance
As the size of input is increasing the code is running slower and slower:

const nemo = ["nemo"];

const everyone = ["gurgle", "marlin", "dory", "gill", "bloat", "peach", "nemo", "bubbles", "deb", "jacques", "bruce", "anchor", "chum", "crush", "squirt", "nigel"];

const largeArray = new Array(100000).fill("nemo");

function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found Nemo!!!!");
    }
  }
  let t1 = performance.now();
  console.log("Call to findNemo function took " + (t1 - t0) + " Milliseconds");
}

findNemo(largeArray);
```

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="../images/Big-O chart.png" alt="Big O chart" style="width: 100%">
</div>

## Types of Big O

### O(n)

- The first type of Big O notation is O(n).
- O(n) is the most common one.
- It is called Linear Time, which means that as the input size increases, the number of operations increases linearly.
  <br>

```
Example #2 : O(n)
In this example Big O is O(n) which means that as the input size increases, the number of operations increases linearly.

let arr = ['nemo'];
let bigArray = new Array(1000).fill('nemo');
function findNemo (array) {
  for(let i = 0; i<array.length; i++){
    if(array[i]==='nemo'){
      console.log('found nemo');
    }
  };
}
findNemo(bigArray);

```

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="../images/O(n) graph.png" alt="O(n) graph" style="width: 100%">
</div>

### O(1)

- Another Big O notation is O(1).
- O(1) is an excellent Big O notation.
- It is called Constant Time.
- It means that the number of operations is constant. As the input size increases, the number of operations remains the same.
  <br>

```
Example #3 : O(1)
in this example Big O is O(1) or Constant Time.

const boxesArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10'];
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
}
compressFirstBox(boxesArray);
```

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="../images/O(1) graph.png" alt="O(1) graph" style="width: 100%">
</div>
<br>

- We can round down even O(100) to just O(1) because it's constant.
  <br>

```
Example #4 : Round down O(2) to O(1)
The big O is O(2) in this example but we can round it down to O(1) because it is not having so much of effect even if it is O(100).

const printFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]);// O(1)
}
```

<br>

### O(n^2) :

- This O(n^2) is called quadratic time.
- This Big O is horrible.
- In nested loops instead of adding the different inputs we are multipying the loops. We are using one variable of (n) and the Big O is O(n\*n) which means O(n^2).
  <br>

```
Example #5 : O(n^2) :
Print All Pairs of an array :
The Big O of this example is O(n^2).

const boxes = ['a', 'b', 'c', 'd', 'e'];
const printAllArrayPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + " , " + array[j])
    }
  }
}

printAllArrayPairs(boxes);
```

<div style="display: flex; width: 500px; justify-content: center;">
  <img src="../images/O(n^2) graph.png" alt="O(1) graph" style="width: 100%">
</div>

## Big O Rule Book:

- ### Rule #1 - Worst Case :
  Means we have to think about the worst scenario.
  <br>

```
Example #6 : Worst Case:
nemo is in the last. although we have the (break) statement but in the worst case the function will run (n) times.

const everyone2 = ["gurgle", "marlin", "dory", "gill", "bloat", "peach", "bubbles", "deb", "jacques", "bruce", "anchor", "chum", "crush", "squirt", "nigel", "nemo"];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log('Function running')
    if (array[i] === "nemo") {
      console.log("Found Nemo!!!!");
      break;
    }
  }
}

findNemo(everyone2);
```

- ### Rule #2 - Remove Constants :
  Means we have to remove all the numbers as they do not have so much of effect when the input size is so large.
  <br>

```
Example #7 : Remove Constants :
The Big O will be O(2 + n/2 + 100) but we are removing the constants which is becoming O(n).

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  var middleIndex = Math.floor(items.length / 2); //O(1)
  var index = 0; //O(1)
  while (index < middleIndex) { //O(n/2)
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    //O(100)
    console.log("hi");
  }
}
```

- ### Rule #3 - Different terms for inputs :
  Means we have to think about the different inputs. It Means different inputs should have different variables. If the loops were coming one after another we are simply adding, but if loops were nested we are multiplying.
  <br>

```
Example #8 : Different Terms for input : adding :

const compressBoxes = (boxes1, boxes2) => {
  boxes1.forEach(box => { //O(n)
    console.log(box);
  });

  boxes2.forEach(box => {//O(m)
    console.log(box)
  });
}
// In this example the boxes1 and boxes2 are different inputs and they came one after the other, So the Big O will be O(n + m).
```

```
Example #9 : Different Terms for input : multiplying :

const compressBoxes2 = (boxes1, boxes2) => {
  boxes1.forEach(box => { //O(n)
    console.log(box);
    boxes2.forEach(box => { //O(m)
      console.log(box)
    });
  });
}
// In this example the boxes1 and boxes2 are different inputs and one is nested inside the other, so the Big O is  O(n*m).
```

- ### Rule #4 : Drop Non Dominants :
  Means we are removing the terms that are not the most important and keeping the one which is the most dominant.
  <br>

```
Example #10 : Drop non dominant terms :
The Big O here is O(n + n^2) but we are removing the n because it is non-dominant and n^2 is more powerful than it. So the Big O is becoming O(n^2).

const printAllNumbersThenAllPairs = (array) => {
  console.log("These are the numbers : ");
  for (let i = 0; i < array.length; i++) { //O(n)
    console.log(array[i]);
  }

  console.log("These are sum of the pairs : ");
  for (let i = 0; i < array.length; i++) { //O(n*n)
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + " + " + array[j] + " = " + (array[i] + array[j]));
    }
  }
};

printAllNumbersThenAllPairs([1, 2, 3, 4, 5]);
```
