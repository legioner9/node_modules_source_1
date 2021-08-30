// const AnalyseTemplate = function ( args ) {
//     debugger
//     return arguments;
//
// };
const SinteseTemplate = function ( resOfAnalise ) {
    const Raw = resOfAnalise.strings.raw;
    const Var = resOfAnalise.variables;
    return String.raw ( { raw: Raw }, ...Var );

};
SinteseTemplate.help = `ModuleFunc = () => {}`;

SinteseTemplate.call = () => console.log ( SinteseTemplate );

module.exports = SinteseTemplate;