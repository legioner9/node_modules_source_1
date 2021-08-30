const my_path = require ( 'path' );
const {
    basename,
    delimiter,
    dirname,
    extname,
    format,
    isAbsolute,
    join,
    normalize,
    parse,
    posix,
    relative,
    resolve,
    sep,
    toNamespacedPath,
    win32,
} = my_path;

const p1 = basename ( __filename ); // 1@0.1#my_read.js
const p1_11 = basename ( '/foo/bar/baz/asdf/quux.html' );
// Returns: 'quux.html'
const p1_12 = basename ( '/foo/bar/baz/asdf/quux.html', '.html' );
// Returns: 'quux'

const p1_1 = win32.basename ( 'C:\\temp\\myfile.html' );// Returns: 'myfile.html'
const p1_2 = posix.basename ( '/tmp/myfile.html' );// Returns: 'myfile.html'e );

const p2 = delimiter; //";"
const p2_1 = process.env.PATH.split ( my_path.delimiter );
//Array(24)
// 0: "C:\Program Files\nodejs\node_modules\npm\node_modules\npm-lifecycle\node-gyp-bin"
// 1: "D:\Node_Projects v.2\Node_Docs\node_modules\.bin"
// 2: "C:\Program Files\Python37\Scripts\"
// 3: "C:\Program Files\Python37\"
// 4: "C:\Program Files (x86)\Common Files\Intel\Shared Files\cpp\bin\Intel64"
// 5: "C:\Windows\system32"

const p3 = dirname ( '/foo/bar/baz/asdf/quux' );
// Returns: '/foo/bar/baz/asdf'

const p4 = extname ( 'index.html' );
// Returns: '.html'
const p4_1 = extname ( 'index.coffee.md' );
// Returns: '.md'
const p4_2 = extname ( 'index.' );
// Returns: '.'
const p4_3 = extname ( 'index' );
// Returns: ''
const p4_4 = extname ( '.index' );
// Returns: ''

const p5 = format ( {
                        root: 'D:\\',
                        dir: 'D:\\Node\\003_ConosleProgram\\001_Environment',
                        base: '004_Path_2.js',
                        ext: '.js',
                        name: '004_Path_2'
                    } ); //"D:\Node\003_ConosleProgram\001_Environment\004_Path_2.js"

const p5_1 = win32.format ( {
                                root: 'D:\\',
                                dir: 'D:\\Node\\003_ConosleProgram\\001_Environment',
                                base: '004_Path_2.js',
                                ext: '.js',
                                name: '004_Path_2'
                            } ); //"D:\Node\003_ConosleProgram\001_Environment\004_Path_2.js"

const p5_2 = posix.format ( {
                                root: 'D:\\',
                                dir: 'D:\\Node\\003_ConosleProgram\\001_Environment',
                                base: '004_Path_2.js',
                                ext: '.js',
                                name: '004_Path_2'
                            } );// error ! "D:\Node\003_ConosleProgram\001_Environment/004_Path_2.js"

const p6 = isAbsolute ( '/foo/bar' ); // true;
const p6_1 = isAbsolute ( 'foo/bar' ); // false;

const p7 = join ( '/foo', 'bar', 'baz/asdf', 'quux', '..' );
// Returns: ..\foo\bar\baz\asdf\quux
const p7_1 = join ( '../', 'foo', 'bar', 'baz/asdf', 'quux' );
// '..\foo\bar\baz\asdf\quux'
const p7_2 = join ( '../', 'foo', 'bar', 'baz/asdf', 'quux', '/..' );
// "..\foo\bar\baz\asdf"

const p8 = normalize ( 'C:\\temp\\\\foo\\bar\\..\\' );
// Returns: 'C:\\temp\\foo\\';
const p8_1 = win32.normalize ( 'C:////temp\\\\/\\/\\/foo/bar' );
// on Windows: Returns: 'C:\\temp\\foo\\bar';
const p8_2 = posix.normalize ( 'C:////temp\\\\/\\/\\/foo/bar' );
// on POSIX: Returns: 'C:\\temp\\foo\\bar';
// on Windows - error ! : Returns: "C:/temp\\/\/\/foo/bar";

const p9 = parse ( '/home/user/dir/file.txt' );
// On POSIX: Returns:
// { root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }
const p9_1 = parse ( 'C:\\path\\dir\\file.txt' );
// On Windows: Returns:
// { root: 'C:\',
//   dir: 'C:\path\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

const p10 = relative ( '/data/orandea/test/aaa', '/data/orandea/impl/bbb' );
//on POSIX Returns: '../../impl/bbb'; a => b but On Windows ..\..\impl\bbb
const p10_1 = relative ( 'C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb' );
//on Windows Returns: '..\..\impl\bbb'

const p11_1 = resolve ( '/foo/bar', './baz' ); // right to left
//on POSIX Returns: '/foo/bar/baz'; but On Windows "D:\foo\bar\baz"
const p11_2 = resolve ( '/foo/bar', '/tmp/file/' );
//on POSIX Returns: '/tmp/file' On Windows "D:\tmp\file"
const p11_3 = resolve ( 'wwwroot', 'static_files/png/', '../gif/image.gif' );
// If the current working directory is /home/myself/node,
//on POSIX this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
//but On Windows "D:\Node_Projects v.2\Node_Docs\wwwroot\static_files\gif\image.gif"

const p12 = 'foo/bar/baz'.split ( sep ); // win sep: "\" posix sep: "/"
//on POSIX Returns: ['foo', 'bar', 'baz']; but on Win ["foo/bar/baz"]
const p12_1 = 'foo\\bar\\baz'.split ( sep );
//On Windows Returns: ['foo', 'bar', 'baz']
const p12_2 = __filename.split ( sep ); // ["D:", "Node_Projects v.2", "Node_Docs", "nodejs.org_DOCS", "Path", "DOC", "1@0.1#my_read.js"]

const p13 = toNamespacedPath ( __filename ); // "\\?\D:\Node_Projects v.2\Node_Docs\nodejs.org_DOCS\Path\DOC\1@0.1#my_read.js"
const p13_1 = toNamespacedPath ('file' , __filename ); // "\\?\D:\Node_Projects v.2\Node_Docs\file"

debugger;