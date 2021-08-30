const littleEndian = (function () {
    const buffer = new ArrayBuffer(2);
    new DataView(buffer).setInt16(0, 256, true /* littleEndian */);
    // Int16Array uses the platform's endianness.
    debugger;
    return new Int16Array(buffer)[0] === 256;
})();
console.log(littleEndian); // true or false

const buffer = new ArrayBuffer(16);
const dv = new DataView(buffer, 0);

dv.setInt16(1, 42);
dv.getInt16(1); //42
debugger;