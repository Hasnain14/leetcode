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

    deleteDuplicates = () => {
            let current = this.head;

            while(current != null && current.next != null){
                let  temp = current.next;
                  if(temp.value === current.value){
                      current.next = temp.next;
                    //   return;
                  }else{
                      current = current.next;
                  }
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
list.addNode(1);
list.addNode(2);
list.addNode(2);
list.addNode(3);
list.addNode(3);
// list.printList();

list.deleteDuplicates();
list.printList();

