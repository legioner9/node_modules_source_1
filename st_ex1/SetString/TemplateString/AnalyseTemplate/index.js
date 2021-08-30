// const AnalyseTemplate = function ( args ) {
//     debugger
//     return arguments;
//
// };
const AnalyseTemplate = function ( strings, ...variables ) {
    return {
        strings,
        variables,
    };
}
AnalyseTemplate.help = `ModuleFunc = () => {}`;

AnalyseTemplate.call = () => console.log ( AnalyseTemplate );

module.exports = AnalyseTemplate;