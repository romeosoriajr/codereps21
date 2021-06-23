function ListNode (val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function reverseBetween (head, left, right) {
  if (!head) return null;

  const dummy = new ListNode(0);
  dummy.next = head;
  let pre = dummy;

  //go to the head where reversal should start
  for (let i=1; i < left; i++) {
    pre = pre.next;
  }

  let start = pre.next;
  let follow = start.next;

  for (let i=1; i <= right-left; i++) {
    start.next = follow.next;
    follow.next = pre.next;
    pre.next = follow;
    follow = start.next;
  }

  return dummy.next;
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

console.log(reverseBetween(one, 2, 4))
