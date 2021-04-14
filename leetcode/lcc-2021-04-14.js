function ListNode (val, next=null) {
  this.val = val;
  this.next = next;
}
function partition (head, x) {

  var lessDummy = new ListNode(0, null);
  var lessHead = lessDummy;

  var moreDummy = new ListNode(0, null);
  var moreHead = moreDummy;

  var curr = head;

  while (curr) {

    if (curr.val < x) {
      lessDummy.next = curr;
      lessDummy = lessDummy.next;
    } else {
      moreDummy.next = curr;
      moreDummy = moreDummy.next;
    }

    curr = curr.next;
  }

  lessDummy.next = moreHead.next;
  moreDummy.next = null;

  return lessHead.next;

}

var one = new ListNode(1);
var two = new ListNode(2);
var two2 = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
var five = new ListNode(5);

one.next = four;
four.next = three;
three.next = two;
two.next = five;
five.next = two2;

console.log(partition(one, 3));
