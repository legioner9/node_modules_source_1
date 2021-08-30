const Ex = require ( 'st_ex1' );
const Ini = require ( 'st_ini' );
// const analyseTemplate = Ex.SetString.TemplateString.AnalyseTemplate;
// const sinteseTemplate = Ex.SetString.TemplateString.SinteseTemplate;
const { sinteseTemplate, analyseTemplate } = Ini;

const at = analyseTemplate`Str1 ${ 2 + 4 * 5 } Str2 ${ 5 * 10 }`;

const ts_at = sinteseTemplate ( at );

debugger;
