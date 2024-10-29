
//   Definition for singly-linked list.
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    const addNodes = (node1: ListNode | null, node2: ListNode | null, carry: number) => {
       if(node1 === null && node2 === null && carry === 0) return null;

       let sum = carry;
       if(node1 != null){
        sum += node1.val;
        node1 = node1.next;
       }
       if(node2 != null){
        sum += node2.val;
        node2 = node2.next;
       }

        let newNode = new ListNode(sum%10);

        // Recursively add the next digits and carry
        newNode.next = addNodes(node1, node2, Math.floor(sum / 10))

        return newNode
    }

    // Start the recursive addition with initial carry 0
    return addNodes(l1, l2, 0)
}