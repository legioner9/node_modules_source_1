const ObjectDeepOptions = (obj, opt = false) => {
    if ( opt === true ) debugger;
    console.dir({ obj }, { showHidden: true, depth: 20, colors: true });

};
ObjectDeepOptions.help = `ObjectDeepOptoins = () => {}`;

ObjectDeepOptions.call = () => console.log ( ObjectDeepOptions );

module.exports = ObjectDeepOptions;
