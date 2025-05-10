// Notes:
  // There are 3 ways to insert node in linked list:
  // 1) start 
  // 2) end
  // 3) index
  // Further there are two types of index:
  // 1) start from 0
  // 2) start from 1


// Normal Function: 
    // Used to perform a task or return a value.
    // this refers to the calling context (e.g., window or undefined in strict mode).
// Constructor Function: 
    // Used to create and initialize objects.
    // this refers to the newly created object.


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
  
// let a = new Node(200)
// console.log(a)

// function base node 
function node(data, next = null){
  // console.log(data,"ad");
  this.data = data
  this.next = next
}


let head = new node(45)
let ele = new node(25)
head.next = ele
let newNode = new node(35)

// Insert at Start 
// newNode.next = head
// head = newNode
// console.log(head)

// Insert at end 
function insertend(list, tail){
  for (const key in list) {
    if (list[key].next == null) {
      list[key].next = tail
    }
  }
}
// insertend(head,newNode)
// console.log(head)

// Insert at index 
let index = 1
let name = new node('ptm')
function insertIndex(list, name, i){
  let counter = 0
  for (const key in list) {
    console.log(list[key],"d");
    // if(counter == (i-1)){
    //   let d = list[key]
      // list[key].data = name.data
      // list[key].next = name
      // list[key].next.next = d
      // return
      // console.log(list[key]);
    // }
    // counter++
  }
  // console.log(head);
}

function traverse(list){
  console.log(list.data);
  if(list.next != null){
    traverse(list.next)
  }
}
// traverse(head)

insertIndex(head, name, index)