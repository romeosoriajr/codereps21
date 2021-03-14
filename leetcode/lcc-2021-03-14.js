function ListNode (val) {
  this.val = val;
  this.next = null;
}

function swapNodes (head, k) {
  
  var arr = [];
  var currNode = head;

  while (currNode) {
    arr.push(currNode);
    currNode = currNode.next;
  }

  [arr[k-1], arr[arr.length-k]] = [arr[arr.length-k], arr[k-1]];

  for (let i=0; i < arr.length-1; i++) {
    var currNode = arr[i];
    var nextNode = arr[i+1];
    currNode.next = nextNode;
  }

  var lastNode = arr[arr.length-1];
  lastNode.next = null;

  return arr[0];
}


var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
var five = new ListNode(5);

one.next = two;
two.next = three;
three.next = four;
four.next = five;

swapNodes(one, 2);

var curr = one;

console.log(`-result-`)
while(curr) {
  console.log(curr.val);
  curr = curr.next;
}
