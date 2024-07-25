// const strings= ['a', 'b', 'c', 'd'];
// const numbers = [1,2,3,4,5];
// // Variable array is somewhere in memory and the computer knows it.
// // When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// //Access
// console.log(strings[2]); //O(1) --> Because it does not matter how much the length of the array is, it is just reading the value at a specific index which will take one step.

// //push or adding to the end
// strings.push('e'); //O(1) --> Because it does not matter how much the length of the array is, it is just adding something to the end of array which will take one step.

// //pop or deleting from the end
// strings.pop(); //O(1)
// strings.pop();

// //unshift or adding to the beginning
// strings.unshift('x'); //O(n) --> because when we are adding a new item to the beginning of an array all the indexes of the other items will be changed.

// //splice (adding or deleting from the middle)
// strings.splice(2, 0, 'alien'); //O(n) --> Because we will start from a specific index and then delete or insert something and the rest of the item's indexes will be changed. It will be O(n/2) but we are removing constants as the Big O rule #2 is saying.

// console.log(strings);



const person = {
  name: "Alice",
  greet: function() {
    console.log(this);
    console.log(`Hello, my name is ${this.name}`);
  }
};

person["name"] = "Sana";
console.log(person.length)