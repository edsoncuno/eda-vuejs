export class CircularLinkedList {
    #DEFAULT_VALUE = { value: null, next: {} };
    #last;
    #size;

    constructor() {
        this.#last = this.#DEFAULT_VALUE;
        this.#size = 0;
    }

    add(index, newNode) {
        if (index < 0 || index > this.#size) {
            throw new Error("add: index<0 || index>size");
        } else if (this.#size == 0) {
            this.#last = newNode;
            newNode.next = newNode;
        } else if (index == 0) {
            newNode.next = this.#last.next;
            this.#last.next = newNode;
        } else if (index == this.#size) {
            newNode.next = this.#last.next;
            this.#last.next = newNode;
            this.#last = newNode;
        } else {
            let previusNode = this.#findByIndex(index - 1);
            newNode.next = previusNode.next;
            previusNode.next = newNode;
        }
        this.#size++;
    }

    remove(index) {
        if (index < 0 || index > (this.#size - 1)) {
            throw new IllegalArgumentException("remove: index <0 || index > (size-1)");
        } else if (index == 0) {
            if (this.#size == 1) {
                this.clear();
            } else {
                this.#last.next = this.#last.next.next;
            }
        } else if (index == this.#size - 1) {
            let previousNode = this.#findByIndex(index - 1);
            previousNode.next = this.#last.next;
            this.#last = previousNode;
        } else {
            let previousNode = this.#findByIndex(index - 1);
            previousNode.next = previousNode.next.next;
        }
        this.#size--;
    }

    toArray() {
        let newArray = [];
        if (this.#last.value === null) {
            return newArray;
        } else {
            let currentNode = this.#last.next;
            for (let i = 0; i !== this.#size; i++) {
                newArray.push(currentNode.value);
                currentNode = currentNode.next;
            }
            return newArray;
        }
    }

    toString() {
        let str = '['
        if (this.#last.value === null) {
            return str + ']';
        } else {
            let currentNode = this.#last.next;
            for (let i = 0; i !== this.#size; i++) {
                str = str + String(currentNode.value) + ',';
                currentNode = currentNode.next;
            }
            return str + ']';
        }
    }

    clear() {
        this.#last = { value: null, next: {} };
        this.#size = 0;
    }

    #findByIndex(index) {
        let currentNode = this.#last.next;
        for (let i = 0; i !== this.#size; i++) {
            if (i == index) {
                return currentNode;
            } else {
                currentNode = currentNode.next;
            }
        }
    }
}