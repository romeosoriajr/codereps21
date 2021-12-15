function insertionSortList(head) {
  const dummy = new ListNode(null);

  let curr = head;

  while (curr) {
    const node = curr;
    curr = curr.next;

    let alt = dummy;
    while (alt.next && alt.next.val < node.val) alt = alt.next;

    node.next = alt.next;
    alt.next = node;
  }

  return dummy.next;
}



