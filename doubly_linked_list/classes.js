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
}