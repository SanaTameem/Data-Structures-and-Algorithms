# Array Data Structure:
Definition: An array is a linear data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key.

**Features:**

- Ordered Collection: Elements in an array are stored in a sequential order.

# Static Arrays vs Dynamic Arrays:
- **Static Array:**
  - Fixed size determined at the time of declaration.
  - Memory is allocated at compile time.
  - Size cannot be changed during runtime.
  - Efficient access since elements are stored in contiguous memory locations.

- **Dynamic Array:**
  - Size can grow or shrink during runtime.
  - Memory is allocated at runtime (usually on the heap).
  - Allows adding or removing elements easily.
  - Access can be slightly less efficient due to potential pointer indirection.


# Reference, Context, Instantiation:
- **Reference:**
a reference type refers to a type of data where the value is stored as a reference (or address) to its location in memory, rather than directly storing the data itself.
```
// Example of a reference type: Object

let person1 = {
  name: "Alice",
  age: 30
};

// Assigning person1 to person2, both variables now reference the same object in memory

let person2 = person1;

// Modifying person2 affects person1 because they reference the same object

person2.name = "Bob";

console.log(person1.name); // Outputs: "Bob"
console.log(person2.name); // Outputs: "Bob"
```

- **Context vs Scope :**
  - Scope refers to the visibility and accessibility of variables and functions within a particular part of your code during runtime.
  - Context refers to the value of this keyword within a particular scope. The keyword `this` refers to what object it is inside of.

Global Context:
```
console.log(this); //window object
```

Inside an Object:
```
const person = {
  name: "Alice",
  showThis: function() {
    console.log(this);
  }
};

person.showThis(); // the person object
```

- **Instantiation :**
Instantiation refers to the process of creating instances (or objects) from a class or constructor function.
```
Class Definition :

class Player {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

Instantiation :

let player1 = new Player("Alice", 30);
let player2 = new Player("Bob", 25);
```