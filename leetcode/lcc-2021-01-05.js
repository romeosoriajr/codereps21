function ListNode (val) {
  this.val = val;
  this.next = null;
}


function deleteDuplicates (head) {

  var dummy = new ListNode(null);
  dummy.next = head;

  var fast = head;
  var slow = dummy;

  while (fast) {
    // sets fast as the last repeated element
    while(fast.next && fast.val == fast.next.val) {
      fast = fast.next;
    }

    // there are no duplicates between the slow and fast pointer
    // move both forward;
    if (slow.next === fast) {
      slow = slow.next;
      fast = fast.next;

    // there were duplicates found
    // skip all duplicates by setting slow.next to fast.next
    } else {
      slow.next = fast.next;
      fast = slow.next;
    }

  }

  return dummy.next;

}

var arr = [1,2,3,3,4,4,5];

var root;
var currNode;
for (let i=0; i < arr.length; i++) {
  var node = new ListNode(arr[i]);

  if (!root) {
    root = node;
    currNode = root;
  }

  currNode.next = node;
  currNode = currNode.next;

}

console.log(deleteDuplicates(root));
