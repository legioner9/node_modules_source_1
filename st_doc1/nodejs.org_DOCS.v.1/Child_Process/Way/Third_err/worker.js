console.log(`Wo start ${process.pid}`);


process.on("message", message => {

    if (message === 'stop') process.exit(0);

    try {
        treatmentMes(message);

    } catch (e) {
        console.log('err from wo :: ', process.pid, e.message);
        process.send({e});
        process.exit(1);
    }
});


function treatmentMes(mess) {
    console.log('Message in worker :: ', mess, process.pid,);
    const res = Math.pow(mess, mess);
    process.send({res})
}
