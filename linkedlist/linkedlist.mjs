import Node from "./node.mjs";

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  addHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.setPrev(newNode);
      newNode.setNext(this.head);
      this.head = newNode;
    }
  }

  addTail(data) {
    const newNode = new Node(data);
    if (!this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.setNext(newNode);
      newNode.setPrev(this.tail);
      this.tail = newNode;
    }
  }

  removeHead() {
    if (!this.head) {
      return;
    } else {
      let newHead = this.head.getNext();
      if (!newHead) {
        this.head = null;
        this.tail = null;
      } else {
        this.head.setNext(null);
        newHead.setPrev(null);
        this.head = newHead;
      }
    }
  }

  removeTail() {
    if (!this.tail) {
      return;
    } else {
      let newTail = this.tail.getPrev();
      if (!newTail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail.setPrev(null);
        newTail.setNext(null);
        this.tail = newTail;
      }
    }
  }

  removeNodeByData(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        if (current === this.head) {
          this.removeHead();
          break;
        } else if (current === this.tail) {
          this.removeTail();
          break;
        } else {
          let prevNode = current.getPrev();
          let nextNode = current.getNext();
          prevNode.setNext(nextNode);
          nextNode.setPrev(prevNode);
          current.setNext(null);
          current.setPrev(null);
          break;
        }
      } else {
        current = current.getNext();
      }
    }
    return;
  }

  print() {
    console.log('<Head>');
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.getNext();
    }
    console.log('<Tail>');
  }

}

export default LinkedList;
