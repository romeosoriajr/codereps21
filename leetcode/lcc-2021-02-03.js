function hasCycle (head) {
  if (!head) return false;

  var slow = head;
  var fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow == fast) {
      return true;
    }
  }

  return false;


}
