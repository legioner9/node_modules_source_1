const fs = require('fs');
const path = require('path');

const main = async () => {
    const stream = fs.createReadStream(path.join(__dirname, 'read.txt'), 'utf-8');
    for await (let chunk of stream) {
        console.log({chunk});
    }

    const d = fs.promises.readFile(path.join(__dirname, 'read.txt'), 'utf-8');
    console.log({data_0: d}); // d is the Promise
    await d.then(data => { // data is all content of file
        console.dir({data});
        debugger;
    }, e => console.dir(e.message));

};
main().catch(e => console.error(e));

const asyncIterable = {
    [Symbol.asyncIterator]() {
        return {
            i: 0,
            next() {
                if (this.i < 3) {
                    return Promise.resolve({
                        value: this.i++,
                        done: false
                    });
                }

                return Promise.resolve({done: true});
            }
        };
    }
};