function getDecimalValue(head) {
  let curr = head;

  let result = 0;
  while (curr) {
    result = (result << 1) + curr.val;
    curr = curr.next;
  }

  return result;
}

