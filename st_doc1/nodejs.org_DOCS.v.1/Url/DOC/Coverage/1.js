const my_url = require ( 'url' );
const { URL, URLSearchParams, Url, domainToASCII, domainToUnicode, fileURLToPath, format, parse, pathToFileURL, resolve } = require ( 'url' );

const path = 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash';

const myURL = new URL ( 'https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash' );

let {
    hash,
    host,
    hostnamehref,
    origin,
    password,
    pathname,
    port,
    protocol,
    search,
    searchParams,
    username
} = myURL;

const u0 = new URL ( '/foo', 'https://example.org/' ); //u0s: "https://example.org/foo"
const u0s = u0.toString ();

const u0_1 = new URL ( 'https://測試' ); // https://xn--g6w251d/
const u0_1s = u0_1.toString ();

const u0_2 = new URL ( 'foo:Example.com/', 'https://example.org/' );
const u0_2s = u0_2.toString ();

const u1 = new URLSearchParams ( [
                                     [ 'user', 'abc' ],
                                     [ 'query', 'first' ],
                                     [ 'query', 'second' ]
                                 ] );
console.log ( u1.toString () ); // Prints 'user=abc&query=first&query=second'

for ( const item of u1.entries () ) {
    console.log ( item );
}
//(2) ["user", "abc"]
//(2) ["query", "first"]
//(2) ["query", "second"]

const u1_1 = new URLSearchParams ( 'foo=bar&foo=baz' );
for ( const item of u1_1.entries () ) {
    console.log ( item );
}
//(2) ["foo", "bar"]
//(2) ["foo", "baz"]

const u1_2 = new URLSearchParams ( path );
for ( const item of u1_2.entries () ) {
    console.log ( item );
}
//(2) ["https://user:pass@sub.example.com:8080/p/a/t/h?query", "string#hash"]

const u2 = new Url (); // empty url ( prop:null )

const u3 = fileURLToPath ( 'file:///C:/path/' );       // Correct:   C:\path\ (Windows)
const u3_1 = fileURLToPath ( 'file://nas/foo.txt' );     // Correct:   \\nas\foo.txt (Windows)
const u7 = pathToFileURL ( __filename ).href;          // file:///D:/Node_Projects%20v.2/Node_Docs/nodejs.org_DOCS/Url/DOC/1@0.1#my_read.js(Windows)
const u7_1 = pathToFileURL ( __filename ).pathname;            ///D:/Node_Projects%20v.2/Node_Docs/nodejs.org_DOCS/Url/DOC/1@0.1#my_read.js(Windows)

const u4 = format ( myURL, {
    fragment: false,
    unicode: true,
    auth: false
} ); // https://sub.example.com:8080/p/a/t/h?query=string

const u5 = format ( {
                        protocol: 'https',
                        hostname: 'example.com',
                        pathname: '/some/path',
                        query: {
                            page: 1,
                            format: 'json'
                        }
                    } );

// => 'https://example.com/some/path?page=1&format=json';
const u6 = parse ( path );
//{auth: "user:pass"
// hash: "#hash"
// host: "sub.example.com:8080"
// hostname: "sub.example.com"
// href: "https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash"
// path: "/p/a/t/h?query=string"
// pathname: "/p/a/t/h"
// port: "8080"
// protocol: "https:"
// query: "query=string"
// search: "?query=string"
// slashes: true}

const u8 = resolve ( '/one/two/three', 'four' );         // '/one/two/four'
const u9 = resolve ( 'http://example.com/', '/one' );// 'http://example.com/one';

const u10 = domainToASCII ( 'español.com' ); //xn--espaol-zwa.com
const u11 = domainToUnicode ( 'xn--espaol-zwa.com' ); // español.com
const u12 = domainToUnicode ( u10 ); // español.com
debugger;