function isPalindrome(head) {

  var fast = head;
  var slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  if (fast) {
    slow = slow.next;
  }

  var head2 = reverse(slow);

  while (head2) {
    if (head.val != head2.val) {
      return false;
    }

    head = head.next;
    head2 = head2.next;
  }

  return true;

  function reverse(head) {

    var previous = null;
    var curr = head;
    while (curr) {
      var temp =curr.next; // maintain the original next;
      curr.next = previous; //set next to the previous node;
      previous = curr; //move the previous node as the current;
      curr = temp; // jump to the original next;
    }

    return previous;
  }

}
