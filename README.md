# Data Structures: Trees

![Tree](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Binary_tree.svg/384px-Binary_tree.svg.png "A tree")
A tree is a data structure that can be used to model hierarchical data. It contains:

1. A single root node.
2. Each node may have several other child nodes.
3. Except for the root node, every node has exactly 1 parent node.
4. Each node contains some data (e.g. strings, numbers, etc).

Your task is to implement a general tree in Javascript with the above properties and the data shown in the above picture, and the following methods:

1. A method that takes a callback as a parameter and traverses the entire tree, and executes the given callback on every node.
2. A method that takes some data as a parameter and returns true if the tree contains a node with the given data, and false otherwise.
3. A method that takes 2 nodes as its parameters and adds the 2nd node as a child of the first node if the first node is found in the tree. If the first node isn't present in the tree, this method should throw an error.

_Note: There are broadly 2 ways of implementing the first method. You can either visit every node in a given level first before moving on to the next level, or select a branch of the tree and visit the deepest possible node before backtracking. The former is called a Breadth-First Search, and the latter a Depth-First Search._

When you are done with the first method, use it to `console.log` each node in the tree.

Hint: You can define and instantiate classes in Javascript in the following manner.

```
class Person {
    constructor(name) {
        this.name = name; // These are instance variables and must be set in the constructor in Javascript.
        this.friend = null;
    }

    yawn() {
        console.log(this.name, 'yawns.')
    }
}

const tom = new Person('Tom'); // Creates a new instance of the class Person by calling its constructor
const bob = new Person('Bob');
tom.yawn();
tom.friend = bob;
tom.friend.yawn();
```

# Further: Application
Your company wants to find out which customer is bringing the most business via referrals. If A invites B, and B invites C and D, and D invites E, then A counts as having referred 4 customers.

```
{
    Total: 5,
    "2": "1",
    "3": "2",
    "4": "2",
    "5": "4",
    "9": "8"
}
```
## Task
1. Model the above test data with using trees.
2. Write a function that finds the person with the most number of referrals, and how many people he has referred.
```
Expected output: "1, 4"
```

# Furtherer: Binary Search Tree (BST)
Implement a Binary-Search Tree, as an extension of the Binary Search algorithm that you've previously implemented.

# Furtherest: Trie (Digital Tree)
Implement a trie and use it to model the words in the wordlist at https://starbeamrainbowlabs.com/wordlists/enable1.txt. You might want to test your code with only the words that start with 'a'. Then, given the string "adsor", return list of possible autocompletions. Compare the computing cost of a trie for this problem to using the `.filter()` method.