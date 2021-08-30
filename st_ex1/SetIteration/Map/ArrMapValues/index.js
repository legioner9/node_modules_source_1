const ArrMapValues = (map , opt = false) => {
    if ( opt === true ) debugger;
    let resArr = [];
    for ( let value of map.values () ) {
        resArr.push (  value );
    }
    return resArr;
};
ArrMapValues.help = `ModuleFunc = () => {}`;

ArrMapValues.call = () => console.log ( ArrMapValues );

module.exports = ArrMapValues;