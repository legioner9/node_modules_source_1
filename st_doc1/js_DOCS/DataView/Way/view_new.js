const buf = new ArrayBuffer(8);
const views = [];

views.push(new DataView(buf));
views.push(new DataView(buf, 2));
views.push(new DataView(buf, 5));

debugger;
for (let i = 0; i < buf.byteLength; i++) {
    views[0].setInt8(i, i);
}


