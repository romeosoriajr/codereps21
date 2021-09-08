function reverseList(head) {
  const newHead = null;

  while (head) {
    const temp = head.next;
    head.next = newHead;
    newHead = head;
    head = temp;
  }

  return newHead;
}
