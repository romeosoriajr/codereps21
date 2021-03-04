function getIntersectionNode(headA, headB) {
  if (!headA || !headB) return null;

  var currA = headA;
  var currB = headB;

  while (currA !== currB) {
    currA = !currA ? headA : currA.next;
    currB = !currB ? headB : currB.next;
  }

  return currA;

}
