class DoublyLikedListNode {
    constuctor(value, previous, next) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class DoublyLinkedList {
    head = null;
    tail = null;

    insertBegin(value) {
        if (this.head === null) {
            const node = new DoublyLikedListNode(value, null, null);
            this.head = node;
            this.tail = node;
        } else {
            const node = new DoublyLikedListNode(value, null, this.head);
            this.head.previous = node;
            this.head = node;
        }
    }
}