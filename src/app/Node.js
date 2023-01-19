export class Node {
    #element;
    #next;
    #previous;
    constructor(element) {
        this.#element = element;
    }
    getNext() {
        return this.#next;
    }
    setNext(value) {
        this.#next = value;
    }
    getPrevious() {
        return this.#previous;
    }
    setPrevious(value) {
        this.#previous = value;
    }
    getElement() {
        return this.#element;
    }
    setElement(value) {
        this.#element = value;
    }
}