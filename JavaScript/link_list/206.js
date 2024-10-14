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


    reverseList = () => {
            let current = this.head;

            if(current.next == null){
                return this.head;
            }

            while(current.next != null){
                

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
list.addNode(1);
list.addNode(2);
// list.addNode(10);
list.addNode(3);
list.addNode(4);
list.addNode(5);
// list.printList();

list.reverseList();
list.printList();

