function mergeKLists (lists) {
  if (!lists.length) return null;

  return lists.reduce(helper);

  function helper (head1, head2) {

    const dummyNode = new ListNode(null);
    var currNode = dummyNode;

    var curr1 = head1;
    var curr2 = head2;

    while (curr1 && curr2) {

      if (curr1.val < curr2.val) {
        currNode.next = curr1;
        curr1 = curr1.next;
      } else {
        currNode.next = curr2;
        curr2 = curr2.next;
      }
      currNode = currNode.next;
    }

    currNode.next = curr1 ? curr1 : curr2;

    return dummyNode.next;

  }

}
