class LinkedListNode {
    constructor (value, next) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    head = null;

    add (value) {
        this.head = new LinkedListNode(value, this.head);
    }

    insert (index, value) {
        if (this.head === null || index === 0) {
            this.add(value)
        } else {
            let current = this.head;
            while (current.next !== null && index - 1 > 0) {
                current = current.next;
                index = index - 1;
            }
            current.next = new LinkedListNode(value, current.next);
        }
    }

    contains (value) {
        let current = this.head;
        while(current !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    length () {
        let result = 0;
        let current = this.head;

        while(current !== null) {
            result = result + 1;
            current = current.next;
        }

        return result;
    }

    remove () {
        if (this.head === null) {
            return undefined;
        }

        const value = this.head.value;
        this.head = this.head.next;

        return value;
    }

    removeAt (index) {
        if (this.head === null) {
            return undefined;
        } else if (index === 0 || this.head.next === null) {
            return this.remove();
        } else {
            let current = this.head;
            while (current.next.next !== null && index - 1 > 0) {
                current = current.next;
                index = index - 1;
            }
            const value = current.next.value;
            current.next = current.next.next;

            return value;
        }
    }
}

class Stack {
    items = new LinkedList();

    push(value) {
        this.items.add(value);
    }

    pop() {
        return this.items.remove();
    }

    isEmpty() {
        return this.items.head == null;
    }
}

let capitals = new Array(100);

const setCapital = (year, city) => {
    let index = year % capitals.length;
    if(typeof(capitals[index]) === 'undefined') {
        capitals[index] = new LinkedList();
    }

    capitals[index].add({
        key: year,
        value: city
    });
}