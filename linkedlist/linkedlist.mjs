import Node from './node.mjs';

class LinkedList {
  constructor() {
    this.head = null;
  }

  getHead() {
    if (this.head) {
      return this.head.data;
    } else {
      console.log('No head node');
    }
  }

  addHead(data) {
    const newHead = new Node(data);
    if (this.head) {
      newHead.setNext(this.head);
      this.head = newHead;
    } else {
      this.head = newHead;
    }
  }

  removeHead() {
    if (this.head && this.head.getNext) {
      const oldHead = this.head; 
      this.head = oldHead.getNext();
      oldHead.setNext(null);
      return oldHead.data;
    } else if (this.head) {
      this.head = null;
      return thisHead.data;
    } else {
      throw new Error('No head node to remove')
    }
  }

  print() {
    console.log('<Head>')
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.getNext();
    }
    console.log('<Tail>')
  }
}

export default LinkedList;