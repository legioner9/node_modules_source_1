// simple hello

const write = s => process.stdout.write(s);

process.stdin.on('data', chunk => {
    write(`\nHello, ${chunk.toString().trim()}!\n\n`);

});
