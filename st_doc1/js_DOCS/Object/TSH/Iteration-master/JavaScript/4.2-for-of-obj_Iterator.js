'use strict';

let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined) {
            // инициализация состояния итерации
            this.current = this.from;
        }

        if (this.current <= this.to) {
            return {
                done: false,
                value: this.current++
            };
        } else {
            // очистка текущей итерации
            delete this.current;
            return {
                done: true
            };
        }
    }

};

for (let num of range) {
    alert(num); // 1, затем 2, 3, 4, 5
}

// Произойдёт вызов Math.max(1,2,3,4,5);
alert( Math.max(...range) ); // 5 (*)