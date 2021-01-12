function ListNode (val) {
  this.val = val;
  this.next = null;
}

// iterate through list
// add the numbers and if there is any carry from the previous addition
// if the result is more than a single digit, carry value is always 1

function addTwoNumbers (l1, l2) {
  var curr1 = l1;
  var curr2 = l2;

  var dummy = new ListNode(null);
  var curr = dummy;

  var carry = 0;

  while (curr1 || curr2) {
    var num1 = curr1 ? curr1.val : 0;
    var num2 = curr2 ? curr2.val : 0;
    var sum = carry + num1 + num2;

    carry = sum > 9 ? 1 : 0;

    curr.next = new ListNode(sum % 10);
    curr = curr.next;

    if (curr1) {
      curr1 = curr1.next;
    }

    if (curr2) {
      curr2 = curr2.next;
    }

  }

  if (carry > 0) {
    curr.next = new ListNode(carry);
  }

  return dummy.next;
  
}

var two = new ListNode(2);
var four = new ListNode(4);
var three = new ListNode(3);

two.next = four;
four.next = three;

var five = new ListNode(5);
var six = new ListNode(6);
var four2 = new ListNode(4);

five.next = six;
six.next = four2;

console.log(addTwoNumbers(two, five));
