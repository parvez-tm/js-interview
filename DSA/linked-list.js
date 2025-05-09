// Notes:
  // There are 3 ways to insert node in linked list:
  // 1) start 
  // 2) end
  // 3) index
  // Further there are two types of index:
  // 1) start from 0
  // 2) start from 1


// Starting with minimal example
const n1 = {
    data: 100
}

const n2 = {
    data: 200
}

n1.next = n2

// Output: { data: 100, next: { data: 200 } }: simple linked list
// console.log(n1)

class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Reference to the next node
    }
  }
  
let a = new Node(200)
console.log(a)