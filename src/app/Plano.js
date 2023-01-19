import CircularLinkedList from '../list/CircularLinkedList';
import NodeFourPointers from './NodeFourPointers';

export default class Plano {
    #number_rows;
    #number_columns;
    #rows;
    constructor(n) {
        if (n <= 0) {
            throw new Error('Plano : n <= 0');
        }
        this.#number_rows = 3 * n;
        this.#number_columns = 4 * n;
        this.#rows = [];
        this.build();
    }
    build() {
        this.fill();
        this.point();
    }
    fill() {
        for (let i = 0; i < this.#number_rows; i++) {
            let newRow = this.llenarRow(new CircularLinkedList());
            this.#rows[i] = newRow;
        }
    }
    point() {
        let upRowIndex;
        let downRowIndex;
        for (let i = 0; i < this.#number_rows; i++) {
            if (i === 0) {
                upRowIndex = this.#number_rows - 1;
                downRowIndex = i + 1;
            } else {
                if (i === this.#number_rows - 1) {
                    upRowIndex = i - 1;
                    downRowIndex = 0;
                }
                else {
                    upRowIndex = i - 1;
                    downRowIndex = i + 1;
                }
            }
            this.pointUpDown(i, upRowIndex, downRowIndex);
        }
    }
    pointUpDown(currentRowIndex, upRowIndex, downRowIndex) {
        for (let i = 0; i < this.#number_rows; i++) {
            this.#rows[currentRowIndex].get(i).up = this.#rows[upRowIndex].get(i);
            this.#rows[currentRowIndex].get(i).down = this.#rows[downRowIndex].get(i)
        }
    }
    llenarRow(row) {
        row.clear();
        for (let i = 0; i < this.#number_columns; i++) {
            let number_random = parseInt(Math.random() * 10);
            row.add(0, new NodeFourPointers(number_random));
        }
        return row;
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
    toArray() {
        let output = [];
        for (let i = 0; i < this.#number_rows; i++) {
            for (let j = 0; j < this.#number_columns; j++) {
                output.push(this.#rows[i].get(j).object);
            }
        }
        return output;
    }
}