const Count = function () {
    this.count = 0;
    this.tick = function () {
        const cn = this.count++;
        debugger;
    };
};

const count = new Count ();
count.tick ();
count.tick ();
count.tick ();
