// Example #1 : Using Performance
// Using built-in performance for messuring the performance of the code.
// As the size of input is increasing the code is running slower and slower:
const nemo = ["nemo"];
const everyone = [
  "gurgle",
  "marlin",
  "dory",
  "gill",
  "bloat",
  "peach",
  "nemo",
  "bubbles",
  "deb",
  "jacques",
  "bruce",
  "anchor",
  "chum",
  "crush",
  "squirt",
  "nigel",
];
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




// Example #2 : O(n)
// In this example Big O is O(n) --> Linear Time
// Means that as the input size increases, the number of operations increases linearly.
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




// Example #3 : O(1)
// in this example Big O is O(1) --> Constant Time
const boxesArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10'];
const compressFirstBox = (boxes) => {
  console.log(boxes[0]);
}
compressFirstBox(boxesArray);




// Example #4 : Round down O(2) to O(1)
// This function is operating an O(2) operation. We can round them down to O(1) because it is not having so much of effect even if it is O(100).
const printFirstTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]);// O(1)
}




// Example #5 : O(n^2) :
// Print All Pairs of an array :
const boxes = ['a', 'b', 'c', 'd', 'e'];
const printAllArrayPairs = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i] + " , " + array[j])
    }
  }
}

printAllArrayPairs(boxes);




// Exercise #1
// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input.length; i++) {
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}
// Big O is 3 + 3n
// After removing the constants it is just O(n).




// Exercise #2
// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  let a = 5; // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)

  }
  for (let j = 0; j < input; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; // O(1)
}
// Big O = 4 + 5n
// We will remove the constants and the Big O is just O(n).




// Example #6 : Worst Case:
const everyone2 = [
  "gurgle",
  "marlin",
  "dory",
  "gill",
  "bloat",
  "peach",
  "bubbles",
  "deb",
  "jacques",
  "bruce",
  "anchor",
  "chum",
  "crush",
  "squirt",
  "nigel",
  "nemo", // nemo is in the last. although we have the (break) statement but in the worst case the function will run (n) times.
];
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




// Example #7 : Remove Constants :
// The Big O will be O(2 + n/2 + 100) but we are removing the constants which is becoming O(n).
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




// Example #8 : Different Terms for input : adding :
const compressBoxes = (boxes1, boxes2) => {
  boxes1.forEach(box => { //O(n)
    console.log(box);
  });

  boxes2.forEach(box => {//O(m)
    console.log(box)
  });
}
// In this example the boxes1 and boxes2 are different inputs and they came one after the other, So the Big O will be O(n + m).




// Example #9 : Different Terms for input : multiplying :
const compressBoxes2 = (boxes1, boxes2) => {
  boxes1.forEach(box => { //O(n)
    console.log(box);
    boxes2.forEach(box => { //O(m)
      console.log(box)
    });
  });
}
// In this example the boxes1 and boxes2 are different inputs and one is nested inside the other, so the Big O is  O(n*m).




// Example #10 : Drop non dominant terms :
// The Big O here is O(n + n^2) but we are removing the n because it is non-dominant and n^2 is more powerful than it. So the Big O is becoming O(n^2).
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