const buf = Buffer.from('Triply');

for (const char of buf.values()) {
    console.log({char});
}

for (const [index, code] of buf.entries()) {
    const char = String.fromCharCode(code);
    console.log({index, code, char});
}