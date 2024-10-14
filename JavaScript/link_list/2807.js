class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class linkList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addNode = (data) => {
        const newNode = new node(data);
    
        if(!this.head){
            this.head = newNode;
        }else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = newNode;
            // this.next = head;
        }
        this.size++;
        return this;
    }

    GCD = (a,b) => {
       let n = Math.min(a,b);
       let m = Math.max(a,b);
       
     for (let i = n; i > 0; i--) {
        if (( m % i ) == 0 && (n % i ) == 0) {
            return i;
        }
    }   
    }

    greatestCommonDivisor = () => {
            let current = this.head;

            if(current.next == null){
                return this.head;
            }

            while(current.next != null){
                let  temp = current.next;
                 let temp_GCD =  this.GCD(temp.value,current.value);
                //  console.log(temp_GCD)
                    const newNode = new node(temp_GCD);
                //  let newNode = newList.addNode(temp_GCD);
                //  console.log(newNode)
                 newNode.next = current.next;
                 current.next = newNode;

                current = current.next.next;

              }
          
    }

   

    printList = () =>{
        let current = this.head;
    
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}


console.log("adding at start....")
list = new linkList();
list.addNode(18);
list.addNode(6);
// list.addNode(10);
// list.addNode(3);
// list.addNode(3);
// list.addNode(3);
// list.printList();

list.greatestCommonDivisor();
list.printList();

//   leet ans

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// GCD = (a,b) => {
//     let n = Math.min(a,b);
//     let m = Math.max(a,b);
    
//   for (let i = n; i > 0; i--) {
//      if (( m % i ) == 0 && (n % i ) == 0) {
//          return i;
//      }
//  }   
// }
// var insertGreatestCommonDivisors = function(head) {
//  let current = head;

//          if(head === null){
//              return this.head;
//          }

//          while(current.next != null){
//              let  temp = current.next;
//               let temp_GCD =  GCD(temp.val,current.val);
//              //  console.log(temp_GCD)
//                  const newNode = new ListNode(temp_GCD);
//              //  let newNode = newList.addNode(temp_GCD);
//              //  console.log(newNode)
//               newNode.next = current.next;
//               current.next = newNode;

//              current = current.next.next;

//            }

//            return head;
// };