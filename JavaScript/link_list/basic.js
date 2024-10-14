
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

    addToPosition = (data , position) => {
        const newNode = new node(data);
        
        if(position == 1){
            let temp = this.head
            this.head = newNode;
            this.head.next = temp;
        }else{
          let current = this.head;
          let i = 1;

          while(i<=position && current){
           
            if (position == i) {

                // console.log(current)
                newNode.next = current.next;
                current.next = newNode;

                return;
            }else{
                current = current.next;
                i++;
            }
          }
        }
    }

    removeNode = (data) => {
        if(!this.head){
            console.log("list empty")
        }else{
            if (this.head.value == data) {
                this.head = this.head.next;
                this.length--;
                return;

            }else{
                let current = this.head;

                while(current != null){
                  let  temp = current.next;
                    if(temp.value === data){
                        current.next = temp.next;
                        return;
                    }else{
                        current = current.next;
                    }
                }
            }
        }
    }

    findNode = (data) => {
        let current = this.head;
        let position = 1;

        if(!current){
            console.log("empty List")
        }else{
            if(current.value == data){
                console.log(position);
                return;
            }else{
                while(current){
                    if(current.value == data){
                        console.log(position);
                        return;
                    }else{
                        current = current.next;
                        position++;
                    }
                }
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
list.addNode(5);
list.addNode(6);
list.addNode(7);
list.addNode(8);
list.addNode(10);
list.addNode(1);
// list.printList();

console.log("adding at position....")
list.addToPosition(4,1);
list.addToPosition(9,3);
list.printList();

console.log("removing....")
list.removeNode(4);
list.removeNode(7);
list.printList();

console.log("finding....")
list.findNode(10);
// list.printList();