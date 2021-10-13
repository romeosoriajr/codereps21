function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left++;
    right--;
  }

  return s;
}

function reverseWords(s) {
  return s
    .split(" ")
    .map((word) => reverseString([...word]).join(""))
    .join(" ");
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function removeNthFromEnd(head, n) {
  let follow = head;
  let lead = head;

  let count = 1;

  while (count <= n) {
    lead = lead.next;
    count++;
  }

  while (lead.next) {
    lead = lead.next;
    follow = follow.next;
  }

  follow = follow.next.next;

  return head;
}

function lengthOfLongestSubstring(s) {
  let result = 0;
  let seen = {};
  let start = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char in seen) {
      // set the new end
      start = Math.max(start, seen[char]);
    }

    seen[char] = i;

    result = Math.max(result, i - start);
  }

  return result;
}


function palindromeSwap(str) {

  const s = str.split('');

  const n = s.length;
  let count = 0;

  for (let i=0; i < Math.floor(n/2); i++) {
    let left = i;
    let right = n-left-1;

    //move right pointer till we find something that matches left
    while (left < right) {

      if (s[left] == s[right]) {
        break;
      } else {
        right--;
      }
    }

    if (left == right) return -1;

    for (let j=right; j < n-left-1; j++) {
      [s[j], s[j+1]] = [s[j+1], s[j]]
      count++;
    }
  }

  console.log(s)
  return count;

}

console.log(palindromeSwap("geeksfgeeks"))
