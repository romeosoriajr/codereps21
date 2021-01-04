class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
function mergeTwoLists (l1, l2) {

  var dummyHead = new ListNode(0);
  var currNode = dummyHead;

  var curr1 = l1;
  var curr2 = l2;

  while (curr1 && curr2) {

    if (curr1.val <= curr2.val) {
      currNode.next = curr1;
      curr1 = curr1.next;
    } else {
      currNode.next = curr2;
      curr2 = curr2.next;
    }

    currNode = currNode.next;
  }

  if (curr1) {
    currNode.next = curr1;
  }

  if (curr2) {
    currNode.next = curr2;
  }

  return dummyHead.next;

}
