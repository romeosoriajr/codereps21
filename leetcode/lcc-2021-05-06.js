class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val) {

    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {

      this.tail.next = node;
      this.tail = node;
    }

  }

  values() {

    const result = [];
    let node = this.head;

    while(node) {
      result.push(node.val);
      node = node.next;
    }

    return result;

  }
}
function sortedListToBST (head) {

  if (!head) return null;
  if (!head.next) return new TreeNode(head.val);

  let slow = head;
  let fast = head;
  let prev = null;

  //find the midpoint of the list
  
  while(fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }


  //split the the list into two halves
  prev.next = null;
  console.log('asdf');

  const node = new TreeNode(slow.val);
  node.left = sortedListToBST(head);
  node.right = sortedListToBST(slow.next);
  console.log(node);

  return node;

}

const data = new SinglyLinkedList();
data.add(-10);
data.add(-3);
data.add(0);
data.add(5);
data.add(9);
console.log(data.values())

const BST = sortedListToBST(data.head);
console.log(BST);
