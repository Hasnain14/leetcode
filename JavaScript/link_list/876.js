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

    midVal = () => {
           
        if(this.head == null || this.head.next == null){
            this.head.value = null
        }

        let current = this.head;
        let count = 1;

            while(current.next != null){
                count++;
                current = current.next;
            }

            let count_temp = 0;

            if(count % 2 == 0){
                count_temp = parseInt(count/2) ;
            }else{
                count_temp = parseInt(count/2) + 1;
            }

            current = this.head;
            while(count > count_temp){                
                count--;
                current = current.next;
            }

            this.head = current;

    }

   

    printList = () =>{
        let current = this.head;
    
        while(current){
            console.log(current.value);
            current = current.next;
        }
    }
}


list = new linkList();

list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
list.addNode(6);


list.midVal();
list.printList();