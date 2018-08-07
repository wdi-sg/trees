class Tree {
  constructor(node) {
    this.root = node;
  }

  addNode(parentNode, newNode) {
    if (parentNode.leftNode === null) {
        parentNode.leftNode = newNode;
        newNode.papa = parentNode;
        return true
    } else if (parentNode.rightNode === null) {
        parentNode.rightNode = newNode;
        newNode.papa = parentNode;
        return true
    } else {
        console.log('ERROR, PARENT HAS NO SLOTS LEFT');
        return false
    }
  }

  has(data) {
    let level = [this.root]

    while (level.length > 0) {
      let counter = level.length;
      let holder = [];

      for (let i = 0; i < level.length; i++) {
        if (level[i].data === data) {
            return true;
        } else {
            if (level[i].leftNode !== null) { holder.push( level[i].leftNode ) };
            if (level[i].rightNode !== null) { holder.push( level[i].rightNode ) };
        }
      }

      level = level.concat(holder);

      for (let j = 0; j < counter; j++) {
        level.shift();
      }
    }

    return false;
  }

  doSomething( callBackFunction ) {
    let level = [this.root]

    while (level.length > 0) {
      let counter = level.length;
      let holder = [];

      for (let i = 0; i < level.length; i++) {
        if (level[i].leftNode !== null) { holder.push( level[i].leftNode ) };
        if (level[i].rightNode !== null) { holder.push( level[i].rightNode ) };

        callBackFunction(level[i]);
      }

      level = level.concat(holder);

      for (let j = 0; j < counter; j++) {
        level.shift();
      }
    }
  }
}

class Node {
  constructor(data) {
    this.leftNode = null;
    this.rightNode = null;
    this.papa = null;
    this.data = data;
  }
}

function createTree() {
  let rootNode = new Node(0);
  let tree = new Tree(rootNode);

  let level = [rootNode];

  for (let i = 1; i < 50; i += 2) {
    tree.addNode( level[0], new Node(i) );
    tree.addNode( level[0], new Node(i + 1) );

    level.push( level[0].leftNode, level[0].rightNode );
    level.shift();
  }
  return tree;
}

const tree = createTree();
console.log(tree.has(30));
console.log(tree.has(80));

function changeNodeData(node) {
  node.data += 10;
}

tree.doSomething( changeNodeData );
console.log(tree.has(0));
console.log('root data: ', tree.root.data);
console.log(tree.root);
