const ObjectDeepOptoins = (obj, opt = false) => {
    if ( opt === true ) debugger;
    console.dir({ obj }, { showHidden: true, depth: 20, colors: true });

};
ObjectDeepOptoins.help = `ObjectDeepOptoins = () => {}`;

ObjectDeepOptoins.call = () => console.log ( ObjectDeepOptoins );

module.exports = ObjectDeepOptoins;
