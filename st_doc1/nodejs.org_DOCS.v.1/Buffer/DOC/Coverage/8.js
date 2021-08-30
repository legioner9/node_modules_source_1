class Foo {
    [Symbol.toPrimitive] () {
        return 'this is a test';
    }
}

const buf = Buffer.from ( new Foo (), 'utf8' );
const str_buf = buf.toString ();
//Buffer(14) [116, 104, 105, 115, 32, 105, 115, 32, 97, 32, 116, 101, 115, 116]
// str_buf: "this is a test"

debugger;