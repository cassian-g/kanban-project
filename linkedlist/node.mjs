class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getNext() {
    if (this.next) {
      return this.next;
    }
  }

  setNext(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error('setNext requires a Node instance or null');
    }
  }
}

export default Node;