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

    deleteDuplicates = (val) => {
           
        if(this.head == null || this.head.next == null && this.head.value === val){
            this.head.value = null
        }

        let current = this.head;

            while(current.next != null && current != null){
                let  temp = current.next;
                if(this.head.value === val && this.head.next != null){
                    this.head = this.head.next;
                }else if(this.head.next == null && this.head.value == val){
                    this.head.value = null
                }else if(this.head.next === null){
                    return
                }else if(temp.value === val){
                      current.next = temp.next;
                    //   return;
                  }else{
                      current = current.next;
                  }
              }
          return this.head;
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

list.addNode(1);
// list.addNode(1);
// list.addNode(2);
list.addNode(1);


list.deleteDuplicates(1);
list.printList();

// leet code
/*if(head == null || head.next == null && head.val == val){
    head = null
    return head;
}else if(head == null || head.next == null){
    return head
}
   

let current = head;

       while(current != null && current.next != null){
           if(head.val == val && head.next != null){
               head = head.next;
               
           }else if(head.next == null && head.val == val){
                 head = null
                 return head
             }else if(current.next.val == val){
                 current.next = current.next.next;
             }else{
                 current = current.next;
             }
         }
         return head;*/