console.log(`Wo start ${process.pid}`);


process.on("message", message => {
    const result = message / 3;

    process.send(result);

});

