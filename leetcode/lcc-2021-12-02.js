function oddEvenList(head) {
  if (!head || !head.next) return head;
  const oddHead = head;
  const evenHead = head.next;

  let oddCurr = oddHead;
  let evenCurr = evenHead;

  while (oddCurr.next && evenCurr.next) {
    oddCurr.next = evenCurr.next;
    evenCurr.next = evenCurr.next.next;

    oddCurr = oddCurr.next;
    evenCurr = evenCurr.next;
  }

  oddCurr.next = evenHead;

  return oddHead;
}
