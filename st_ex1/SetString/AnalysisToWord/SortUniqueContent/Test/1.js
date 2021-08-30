const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
// const analyseTemplate = Ex.SetString.TemplateString.AnalyseTemplate;
const sortUniqueContent = Ini.sortUniqueContent;

const s = 'Hello World, here we are!';
debugger
const w1 = sortUniqueContent ( s );
/// ["hello", "world", "here", "we", "are"]
const w2 = sortUniqueContent ( s + s );
/// ["hello", "world", "here", "we", "are"]