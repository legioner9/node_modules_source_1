const ArrMapEntries = (map , opt = false) => {
    if ( opt === true ) debugger;
    let resArr = [];
    for ( let [ key, value ] of map.entries () ) {
        resArr.push ( [ key, value ] );
    }
    return resArr;
};
ArrMapEntries.help = `ModuleFunc = () => {}`;

ArrMapEntries.call = () => console.log ( ModuleFunc );

module.exports = ArrMapEntries;