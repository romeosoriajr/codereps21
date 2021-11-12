function removeElements(head, val) {
  let dummy = new ListNode(null);
  dummy.next = head;
  let prevNode = dummy;
  let currNode = head;

  while (currNode) {
    if (currNode.val == val) {
      prevNode.next = currNode.next;
      currNode = currNode.next;
    } else {
      prevNode = currNode;
      currNode = currNode.next;
    }
  }

  return dummy.next;
}
