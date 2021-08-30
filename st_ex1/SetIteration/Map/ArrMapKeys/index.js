const ArrMapKeys = (map , opt = false) => {
    if ( opt === true ) debugger;
    let resArr = [];
    for ( let key of map.keys () ) {
        resArr.push (  key );
    }
    return resArr;
};
ArrMapKeys.help = `ModuleFunc = () => {}`;

ArrMapKeys.call = () => console.log ( ArrMapKeys );

module.exports = ArrMapKeys;