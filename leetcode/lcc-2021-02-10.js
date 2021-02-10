function copyRandomList (head) {

  var curr = head;

  // insert copiedNode between origNode and origNode.next
  while (curr) {
    var origNext = curr.next;
    curr.next = new Node(curr.val);
    curr.next.next = origNext;
    curr = origNext;
  }

  curr = head;

  while (curr) {
    if (curr.random) {
      // curr.next is the copied Node
      // curr.random.next points to copied random node
      curr.next.random = curr.random.next;
    }
    curr = curr.next.next;
  }

  var dummy = new Node(null);

  var copied = dummy;

  while (head) {
    copied.next = head.next;
    copied = copied.next;

    head.next = head.next.next;
    head = head.next;
  }

  return dummy.next;
  
};
