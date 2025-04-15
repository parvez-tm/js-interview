// Starting with minimal example
const n1 = {
    data: 100
}

const n2 = {
    data: 200
}

n1.next = n2

//console.log(n1) //Output: { data: 100, next: { data: 200 } }

class Node {
    constructor(value) {
      this.value = value;
      this.next = null; // Reference to the next node
    }
  }
  
let a = new Node(200)
console.log(a)