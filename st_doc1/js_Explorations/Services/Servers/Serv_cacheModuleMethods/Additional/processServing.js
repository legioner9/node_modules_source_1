process.on('warning', warning => {
    console.dir(warning);
    process.exit(0);
});

process.on('SIGTERM', () => {
    worker_.terminate()
        .then(code => console.log({code}))
        .catch(e => {
            if (e) console.error(e)
        });
});