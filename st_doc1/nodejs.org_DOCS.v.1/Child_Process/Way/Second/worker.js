console.log(`Wo start ${process.pid}`);


process.on("message", message => {

    if (message === 'stop') process.exit(0);

    console.log('Message in worker :: ', message, process.pid,);
    const result_wo = Math.pow(message, message);
    process.send({result_wo});


});
