function splitListToParts(head, k) {
  const result = new Array(k).fill(null);
  let length = 0;

  let node = head;

  while (node) {
    length++;
    node = node.next;
  }

  const n = Math.floor(length / k);
  let r = length % k;

  let currNode = head;
  let prevNode = null;

  for (let i = 0; currNode && i < k; i++, r--) {
    result[i] = currNode;

    //keep moving down the linked list to get to the next head;
    for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
      prevNode = currNode;
      currNode = currNode.next;
    }

    prevNode.next = null;
  }

  return result;
}

