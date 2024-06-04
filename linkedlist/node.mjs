class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }

  getNext() {
    return this.next;
  }

  getPrev() {
    return this.prev;
  }

  setNext(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    }
  }

  setPrev(node) {
    if (node instanceof Node || node === null) {
      this.prev = node;
    }
  }
}

export default Node;
