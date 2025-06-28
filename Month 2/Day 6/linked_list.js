class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



class LinkedList {

    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);

        if (!this.head) {
            this.head = node;
            return
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
    }

    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node
    }


    find(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current
            }
            current = current.next;
        }
        return null
    }

    print() {
        const elements = [];
        let current = this.head;
        while (current) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(" -> "));
    }




}



const ll = new LinkedList();

ll.append(10)
ll.append(20)
ll.append(30)
ll.append(40)
ll.prepend(50)
ll.print()