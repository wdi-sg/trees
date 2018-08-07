class Tree {
    constructor(firstNode) {
        this.firstNode = firstNode;
    }

    executeCallback(node, callback) { //change this to refactor
        if (node === 'first') {
            callback(this.firstNode);
            let firstLayer = this.firstNode.children;

            for (let i=0; i<firstLayer.length; i++) {
                this.executeCallback(firstLayer[i], callback);
            }
        } else {
            callback(node);
            let nextLayer = node.children;

            for (let i=0; i<nextLayer.length; i++) {
                this.executeCallback(nextLayer[i], callback);
            }
        }
    }





    checkForValue(node, value) {
        if (node.value == value) {
            return node;
        } else {
            let nextLayer = node.children;
            for (let i=0; i<nextLayer.length; i++) {
                return this.checkForValue(nextLayer[i], value);
            }
        }
    }

    Has(value) { //checks if there is such value in tree and returns either the Node or false 
        return this.checkForValue(this.firstNode, value);
    }




    checkForNode(currentNode, node) {
        if (currentNode == node) {
            return currentNode;
        } else {
            let nextLayer = currentNode.children;
            for (let i=0; i<nextLayer.length; i++) {
                return this.checkForNode(nextLayer[i], node);
            }
        }
    }

    addNode(oldNode, newNode) { //check if oldNode is in tree and adds newNode to old one 
        let check = this.checkForNode(this.firstNode, oldNode);
        if (check) {
            newNode.parent = oldNode;
            oldNode.children.push(newNode);
        } else {
            console.log("can't find node");
            return 'there is an error';
        }
    }
}

class Node {
    constructor(value) {
        this.parent = null;
        this.children = [];
        this.value = value;
    }
}


// =====================================
//                 TESTS
// =====================================

//LOADING DATA
let firstNode = new Node(1);
let testTree = new Tree(firstNode);

//CHECK ADD NODE
let secondNode = new Node(2);
let thirdNode = new Node(3);
let fourthNode = new Node(4);
let fifthNode = new Node(5);
let sixthNode = new Node(6);
testTree.addNode(firstNode, secondNode);
testTree.addNode(firstNode, thirdNode);
testTree.addNode(secondNode, fourthNode);
testTree.addNode(secondNode, fifthNode);
testTree.addNode(thirdNode, sixthNode);
console.log('check try');
console.log( testTree );

//CHECK FOR EXECUTE CALLBACK
function printTree (node) {
    console.log("uuuu: " + node.value);
}
testTree.executeCallback('first', printTree);


//CHECK FOR VALUE
testTree.Has(1); //true
testTree.Has(2); //true
testTree.Has(9); //false
testTree.Has(11); //false
