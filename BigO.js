// Example #1 : Using Performance
// // Using built-in performance for messuring the performance of the code.
// // As the size of input is increasing the code is running slower and slower:
// const nemo = ["nemo"];
// const everyone = [
//   "gurgle",
//   "marlin",
//   "dory",
//   "gill",
//   "bloat",
//   "peach",
//   "nemo",
//   "bubbles",
//   "deb",
//   "jacques",
//   "bruce",
//   "anchor",
//   "chum",
//   "crush",
//   "squirt",
//   "nigel",
// ];
// const largeArray = new Array(100000).fill("nemo");

// function findNemo(array) {
//   let t0 = performance.now();
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === "nemo") {
//       console.log("Found Nemo!!!!");
//     }
//   }
//   let t1 = performance.now();
//   console.log("Call to findNemo function took " + (t1 - t0) + " Milliseconds");
// }

// findNemo(largeArray);




// Example #2 : O(n)
// // In this example Big O is O(n) --> Linear Time
// // Means that as the input size increases, the number of operations increases linearly.
// let arr = ['nemo'];
// let bigArray = new Array(1000).fill('nemo');
// function findNemo (array) {
//   for(let i = 0; i<array.length; i++){
//     if(array[i]==='nemo'){
//       console.log('found nemo');
//     }
//   };
// }
// findNemo(bigArray); 




// Example #3 : O(1)
// // in this example Big O is O(1) --> Constant Time
// const boxesArray = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9', 'box10'];
// const compressFirstBox = (boxes) => {
//   console.log(boxes[0]);
// }
// compressFirstBox(boxesArray)


// Example #4 : Round down O(2) to O(1)
// // This function is operating an O(2) operation. We can round them down to O(1) because it is not having so much of effect even if it is O(100).
// const printFirstTwoBoxes = (boxes) => {
//   console.log(boxes[0]); // O(1) 
//   console.log(boxes[1]);// O(1) 
// }




// Exercise #1
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1)
//   a = 50 + 3; //O(1)

//   for (let i = 0; i < input.length; i++) {
//     anotherFunction(); //O(n)
//     let stranger = true; //O(n)
//     a++; //O(n)
//   }
//   return a; //O(1)
// }
// // Big O is 3 + 3n
// // After removing the constants it is just O(n).



// Exercise #2
// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) {
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)

//   }
//   for (let j = 0; j < input; j++) {
//     let p = j * 2; // O(n)
//     let q = j * 2; // O(n) 
//   }
//   let whoAmI = "I don't know"; // O(1)
// }
// // Big O = 4 + 5n
// // We will remove the constants and the Big O is just O(n).
