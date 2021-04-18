function removeNthFromEnd(head, n) {

  var lead = head;
  var follow = head;

  var count = 0;

  while (count < n) {
    lead = lead.next;
    count += 1;
  }

  if (!lead) return head.next;

  while (lead.next) {
    lead = lead.next;
    follow = follow.next;
  }

  follow.next = follow.next.next;

  return head;

}

function ListNode(val) {
  this.val = val;
  this.next = null;
}
