const SM = () => ( new Date () ).getSeconds () + '.' + ( new Date () ).getMilliseconds ();
SM.help = `ModuleFunc = () => {}`;

SM.call = () => console.log ( ModuleFunc );

module.exports = SM;