import LinkedList from "./linkedlist.mjs";

class Stack {
  constructor(max = Infinity) {
    this.stack = new LinkedList();
    this.size = 0;
    this.max = max;
  }

  isEmpty() {
    return this.size === 0;
  }

  hasRoom() {
    return this.size < this.max;
  }


  peek() {
    return this.stack.getHead();
  }

  push(data) {
    if (this.hasRoom()) {
      this.stack.addHead(data);
      this.size++;
    } else {
      throw new Error('Stack is full');
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    } else {
      const oldHeadData = this.stack.removeHead();
      this.size--;
      return oldHeadData;
    }
  }

  print() {
    return this.stack.print();
  }

}

const sink = new Stack(4);

sink.push('Plate');
sink.push('Bowl');
sink.push('Fork');

console.log(sink.peek());


