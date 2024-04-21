// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(record) {
    const node = new Node(record);
    this.children.push(node);
  }

  remove(record) {
    this.children = this.children.filter(node => node.data !== record);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const root = this.root;
    if (!root) return;

    let arr = [];
    arr.push(root);

    while (arr.length) {
      let childrens = arr[0].children;
      arr.push(...childrens);
      let removed = arr.shift();
      fn(removed);
    }
  }

  traverseDF(fn) {
    const root = this.root;
    if (!root) return;

    let arr = [];
    arr.push(root);

    while (arr.length) {
      let childrens = arr[0].children;
      let removed = arr.shift();
      arr.unshift(...childrens);
      fn(removed);
    }
  }
}

module.exports = { Tree, Node };
