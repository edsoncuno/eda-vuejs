import CircularLinkedList from '../list/CircularLinkedList';
import NodeFourPointers from './NodeFourPointers';

export default class Base {
    #number_rows;
    #rows;
    constructor(n) {
        if (n <= 0) {
            throw new Error('Base : n <= 0');
        }
        this.#number_rows = n + 1;
        this.#rows = [];
        this.build();
    }
    build() {
        this.fill();
        this.point();
    }
    fill() {
        let number_columns = 1;
        let first = true;
        for (let i = 0; i < this.#number_rows; i++) {
            let newRow = this.llenarRow(new CircularLinkedList(), number_columns);
            this.#rows[i] = newRow;
            if(first === true){
                number_columns = number_columns + 3;
                first = false;
            } else{
                number_columns = number_columns + 4;
            }
        }
    }
    llenarRow(row, number_columns) {
        row.clear();
        for (let i = 0; i < number_columns; i++) {
            let number_random = parseInt(Math.random() * 10);
            row.add(0, new NodeFourPointers(number_random));
        }
        return row;
    }
    point() {

    }
    toString() {
        let output = '';
        for (let i = 0; i < this.#number_rows; i++) {
            if (i === this.number_rows - 1) {
                output = output + this.#rows[i].toString();
            } else {
                output = output + this.#rows[i].toString() + '\n';
            }
        }
        return output;
    }
}