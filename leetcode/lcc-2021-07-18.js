class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function reverseKGroup(head, k) {
  let count = 0;
  let kthNode = head;

  while (kthNode && count != k) {
    kthNode = kthNode.next;
    count++;
  }

  if (count == k) {
    kthNode = reverseKGroup(kthNode, k);

    while (count-- > 0) {
      let temp = head.next;
      head.next = kthNode;
      kthNode = head;
      head = temp;
    }

    head = kthNode;
  }

  return head;
}

const one = new ListNode(1);
const two = new ListNode(2);
const three = new ListNode(3);
const four = new ListNode(4);
const five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

console.log(reverseKGroup(one));
