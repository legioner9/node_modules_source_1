// path модуль ядра, обеспечивающий обработку и преобразование путей к файлам
var path = require ( 'path' );

// С помощью метода basename можно получить имя файла с расширением
var filename = path.basename ( __filename );
console.log ( 'Current file: ', filename );

// path.resolve - метод преобразующий относительный путь в абсолютный
console.log ( path.resolve ( './test' ) );

// метод возвразает расширение файла
var extension = path.extname ( __filename );
console.log ( 'Current file, has', extension, 'extensions!' );

// path.isAbsolute проверяет, является ли путь абсолютным
var abs = path.isAbsolute ( __dirname );
console.log ( 'path.isAbsolute(', __dirname, ') - ', abs );
console.log ( 'path.isAbsolute(', 'public/myProject/test', ') - ', path.isAbsolute ( 'public/myProject/test' ) );
const sep = path.sep; // '\'
const pars_path = path.parse ( __dirname );
// {base: "ITDVN_examles_Way"
// dir: "D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Path"
// ext: ""
// name: "ITDVN_examles_Way"
// root: "D:\"}

const pr_1 = process.env.PATH;
// Prints: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

const pr_2 = process.env.PATH.split ( path.delimiter );
// Returns ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']

const pa_1 = path.relative ( 'D:\\Node_Projects v.2\\Node_Docs\\Practice\\_', 'D:\\Node_Projects v.2\\Node_Docs\\nodejs.org_DOCS\\Vm' );
// Returns: "..\..\nodejs.org_DOCS\Vm"
const pa_2 = path.resolve ( '/003_Console_program_(Presentation).pdf' ); // "D:\003_Console_program_(Presentation).pdf"
const pa_3 = path.resolve ( 'Root','003_Path_1.js' ); // "D:\Node_Projects v.2\Node_Docs\Root\003_Path_1.js"
debugger;
