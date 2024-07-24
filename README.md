## Algorithms

An algorithm is a step-by-step procedure or set of rules designed to perform a specific task or solve a particular problem. Algorithms take inputs, process them through a series of well-defined steps, and produce outputs.

## Data Structures

Data structures are specialized formats for organizing, processing, and storing data. They enable efficient access and modification of data. Common data structures include arrays, linked lists, stacks, queues, trees, and graphs.

## Operations on Data Structures:
- **Access:** 
Retrieving or reading the value stored in a specific position within the data structure.
Search:

- **Insertion:** Adding a new value into the data structure.

- **Deletion**: Removing a value from the data structure.

- **Updation:** Modifying an existing value in the data structure.

- **Traversal:** Visiting all the elements of the data structure in a systematic order.

- **Search:** Finding the presence of a specific value in the data structure.

- **Sorting:** Arranging the elements of the data structure in a specified order (e.g., ascending or descending).


## Characteristics of good code :

Good code can be described by two characteristics:

- **Readable**
- **Scalable:**
  - **_Time Complexity_** : Which means that as the input size increases, the code should not slow down significantly.
  - **_Space Complexity_**: Refers to the amount of memory space an algorithm requires to execute in relation to the input size.
    <br>

## What causes space complexity?

- Variables
- Data Structures
- Function Call
- Allocations

## What skills interviewer is looking for:

- Analytic Skills - How can you think through problems and analyze things?
- Coding Skills - Do you code well, by writing clean, simple, organized, readable code?
- Technical knowledge - Do you know the fundamentals of the job you're applying for?
- Communication skills: Does your personality match the companies’ culture?

## Step By Step through a problem:

1. When the interviewer says the question, write down the key points at the top (i.e. sorted
   array). Make sure you have all the details. Show how organized you are.
2. Make sure you double check: What are the inputs? What are the outputs?
3. What is the most important value of the problem? Do you have time, and space and memory,
   etc.. What is the main goal?
4. Don't be annoying and ask too many questions.
5. Start with the naive/brute force approach. First thing that comes into mind. It shows that
   you’re able to think well and critically (you don't need to write this code, just speak about it).
6. Tell them why this approach is not the best (i.e. O(n^2) or higher, not readable, etc...)
7. Walk through your approach, comment things and see where you may be able to break things.
   Any repetition, bottlenecks like O(N^2), or unnecessary work? Did you use all the information
   the interviewer gave you? Bottleneck is the part of the code with the biggest Big O. Focus on
   that. Sometimes this occurs with repeated work as well.
8. Before you start coding, walk through your code and write down the steps you are going to
   follow.
9. Modularize your code from the very beginning. Break up your code into beautiful small pieces
   and add just comments if you need to.
10. Start actually writing your code now. Keep in mind that the more you prepare and understand
    what you need to code, the better the whiteboard will go. So never start a whiteboard
    interview not being sure of how things are going to work out. That is a recipe for disaster.
    Keep in mind: A lot of interviews ask questions that you won’t be able to fully answer on time.
    So think: What can I show in order to show that I can do this and I am better than other
    coders. Break things up in Functions (if you can’t remember a method, just make up a function
    and you will at least have it there. Write something, and start with the easy part.
11. Think about error checks and how you can break this code. Never make assumptions about the
    input. Assume people are trying to break your code and that Darth Vader is using your
    function. How will you safeguard it? Always check for false inputs that you don’t want. Here is
    a trick: Comment in the code, the checks that you want to do… write the function, then tell the
    interviewer that you would write tests now to make your function fail (but you won't need to
    actually write the tests).
12. Don’t use bad/confusing names like i and j. Write code that reads well.
13. Test your code: Check for no params, 0, undefined, null, massive arrays, async code, etc… Ask
    the interviewer if we can make assumption about the code. Can you make the answer return
    an error? Poke holes into your solution. Are you repeating yourself?
14. Finally talk to the interviewer where you would improve the code. Does it work? Are there
    different approaches? Is it readable? What would you google to improve? How can
    performance be improved? Possibly: Ask the interviewer what was the most interesting
    solution you have seen to this problem
15. If your interviewer is happy with the solution, the interview usually ends here. It is also
    common that the interviewer asks you extension questions, such as how you would handle the
    problem if the whole input is too large to fit into memory, or if the input arrives as a stream.
    This is a common follow-up question at Google, where they care a lot about scale. The answer
    is usually a divide-and-conquer approach — perform distributed processing of the data and only
    read certain chunks of the input from disk into memory, write the output back to disk and
    combine them later.
