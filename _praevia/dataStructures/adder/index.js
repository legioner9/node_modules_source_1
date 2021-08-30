const Adder = class {
    constructor(value) {
        this.value = value;
        this.log = [value];
    }

    add(delta) {
        this.value += delta;
        this.log.push(delta);
        return this;
    }
};

module.exports = Adder;
