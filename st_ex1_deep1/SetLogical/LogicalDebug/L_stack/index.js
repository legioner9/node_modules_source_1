const L_stack = ( dev, message, ...args ) => {
    if ( dev.stack ) console.trace ( message, ...args );
};
L_stack.help = `ModuleFunc = () => {}`;

L_stack.call = () => console.log ( L_stack );

module.exports = L_stack;
