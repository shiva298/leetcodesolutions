/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
    You may assume the two numbers do not contain any leading zero, except the number 0 itself.
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
* 
*/

function ListNode(val) {
      this.val = val;
      this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    var sum = 0, carry = 0, res = new ListNode(0),
    res_head = res;
     while(l1 !== null || l2 !== null){
         if(l1 === null){
             sum = l2.val + carry;
             l2 = l2.next;
         }else if(l2 === null){
             sum = l1.val + carry;
             l1 = l1.next;
         }else {
            sum = (l1.val + l2.val + carry);           
            l1 = l1.next;
            l2 = l2.next;             
         }
            carry = parseInt(sum / 10);         
            sum = parseInt(sum % 10);        
            //res.val = sum;
            //console.log("partial result : ", JSON.stringify(res));
            res.next = new ListNode(sum);
            res = res.next;       
    }

    if(carry){
         res.next = new ListNode(carry);
    }    
      console.log( JSON.stringify(res_head.next));
        return res_head.next;
};
var l1 = new ListNode(2);
l1.next = new ListNode(4);
//l1.next.next = new ListNode(3);

var l2 = new ListNode(5);
l2.next = new ListNode(6);
 //l2.next.next = new ListNode(4);

console.log(JSON.stringify(l1));
console.log(JSON.stringify(l2));
addTwoNumbers(l1, l2)