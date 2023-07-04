class DoublyLinkedListNode {
    constructor(value, previous, next) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyLinkedList {
    head = null;
    tail = null;

    insertBegin(value) {
        if (this.head == null) {
            const node = new DoublyLinkedListNode(value, null, null);
            this.head = node;
            this.tail = node;
        } else {
            const node = new DoublyLinkedListNode(value, null, this.head);
            this.head.previous = node;
            this.head = node;
        }
    }

    insertEnd(value) {
        if (this.head == null) {
            const node = new DoublyLinkedListNode(value, null, null);
            this.tail = node;
            this.head = node;
        } else {
            const node = new DoublyLinkedListNode(value, null, this.tail);
            this.tail.next = node;
            this.tail = node;
        }
    }
    
    removeBegin(){
        if (this.head == null) {
            return undefined;
        } 
        
        const result = this.head.value;
        
        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.previous = null;
        }

        return result;
    }

    removeEnd(){
        const result = this.tail;

        this.tail = this.tail.previous;
        this.tail.next = null;

        return result;
    }
}

class Queue {
    items = new DoublyLinkedList();

    push(value) {
        this.items.insertBegin(value);
    }

    pop() {
        return this.items.removeEnd();
    }

    isEmpty() {
        return this.items.head == null;
    }
}

const sum = (items) => {
    let result = 0;
    
    for (let item of items) {
      result = result + item; 
    }
  
    return result;
};

let list = new DoublyLinkedList();
list.insertBegin(1);
list.insertBegin(2);
list.insertBegin(3);
list.insertBegin(4);

list[Symbol.iterator] = function () {
    return {
        current: this.head,
        next() {
            if (this.current === null) {
                return {
                    done: true
                }
            } else {
                const res = {
                    done: false,
                    value: this.current.value
                }
                this.current = this.current.next;

                return res;
            }
        }
    }
};

console.log(sum(list));