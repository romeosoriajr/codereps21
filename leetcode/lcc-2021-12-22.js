function reorderList(head) {
  const midNode = getMidNode(head);
  const nextMid = midNode.next;
  midNode.next = null;
  let secondHead = reverse(nextMid);

  let firstHead = head;
  let firstNext = null;

  while (firstHead && secondHead) {
    firstNext = firstHead.next;
    firstHead.next = secondHead;

    firstHead = secondHead;
    secondHead = firstNext;
  }

  function getMidNode(head) {
    let slow = head;
    let fast = head;

    while (fast.next && fast.next.next) {
      fast = fast.next.next;
      slow = slow.next;
    }

    return slow;
  }

  function reverse(head) {
    let prev = null;
    let curr = head;
    let next = null;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    return prev;
  }
}
