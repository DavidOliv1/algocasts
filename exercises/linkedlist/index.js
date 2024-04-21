// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      node = node.next;
      count++;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let node = this.head;

    while (node.next) {
      node = node.next;
    }

    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previousNode = this.head;
    let currentNode = this.head.next;

    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }

  insertLast(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    // solution 1:
    // if(!this.head.next) {
    //     this.head.next = node;
    //     return;
    // }

    // let nextNode = this.head.next;

    // while(nextNode.next) {
    //     nextNode = nextNode.next;
    // }

    // nextNode.next = node;

    // solution 2:
    const lastNode = this.getLast();
    lastNode.next = node;
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let count = 0;

    let node = this.head;
    while (node) {
      if (count === index) {
        return node;
      }

      node = node.next;
      count++;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // solution 1:
    // let previousNode = this.head;
    // let node = this.head.next;
    // let counter = 1;

    // while(node) {
    //     if(index === counter) {
    //         previousNode.next = node.next;
    //         return;
    //     }

    //     previousNode = node;
    //     node = node.next;
    //     counter++;
    // }

    // solution 2:
    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) return;
    previousNode.next = previousNode.next.next;
  }

  insertAt(data, index) {
    const node = new Node(data, this.head);

    if (index === 0) {
      this.head = node;
      return;
    }

    // solution 1:
    // let previousNode = this.head;
    // let currentNode = this.head.next;
    // let counter = 1;

    // while(currentNode) {
    //     if(index === counter) {
    //         previousNode.next = node;
    //         node.next = currentNode;
    //     }

    //     previousNode = currentNode;
    //     currentNode = currentNode.next;
    //     counter++;
    // }

    // previousNode.next = node;

    // solution 2:
    const previousNode = this.getAt(index - 1);
    if (!previousNode) {
      const last = this.getLast();
      last.next = node;
      return;
    }
    const currentNode = previousNode.next;

    previousNode.next = node;
    node.next = currentNode;
  }

  forEach(fn) {
    let node = this.head;
    let index = 1;

    while (node) {
      fn(node, index++);
      node = node.next;
    }
  }

  // [Symbol.iterator]() {
  //     let i = 0;
  //     return {
  //         next: () => {
  //             if(i < this.size()) {
  //                 return {
  //                     done: false,
  //                     value: this.getAt(i++),
  //                 }
  //             } else {
  //                 return {
  //                     done: true,
  //                     value: undefined,
  //                 }
  //             }
  //         }
  //     }
  // }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
