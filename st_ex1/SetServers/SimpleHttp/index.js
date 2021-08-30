const http = require ( 'http' );
const utils = require ( 'util' );

// const hostName = '127.0.0.1';
// const servPort = 3004;
//

function SimpleHttp ( handle, servPort = 3004, hostName = '127.0.0.1' ) {
    const server = http.createServer ( handle );

    server.on ( 'error', ( e ) => {
        if ( e.code === 'EACCES' ) {
            console.log ( `No access to port: ${ servPort }` );
        }
        else {
            console.log ( { e } );
        }
    } );
    server.on ( 'clientError', ( err, socket ) => {
        socket.end ( 'HTTP/1.1 400 Bad Request\r\n\r\n' );
    } );

    server.listen ( servPort, hostName,
                    () => console.log ( `Server running at http://${ hostName }:${ servPort }/` ) );
}

function ServHand_i1 ( req, res ) {
    const requestInfo = utils.format ( 'HTTPVersion: %s \nMethod: %s \nStatus code: %s \nMessage: %s \nURL: %s',
                                       // верисия http протокола
                                       req.httpVersion,
                                       // http глагол
                                       req.method,
                                       // статус код
                                       req.statusCode,
                                       // текстовое описание статус кода
                                       req.statusMessage,
                                       // запрашиваемый ресурс
                                       req.url );
    // writeHead - метод позволяет записать в ответ заголовки и статус код
    res.writeHead ( 200, { "Content-Type": "text/plain" } );
    // write - метод позволяет создать тело ответа в виде потока writeable Stream
    res.write ( "Hello World" );
    // end - завершает конфигурациюответа и отправляет его
    res.end ( requestInfo, 'utf8', () => { console.log ( 'finish' ); } );

}

SimpleHttp.help = `SimpleHttp ( handle, servPort = 3004, hostName = '127.0.0.1' )`;
SimpleHttp.call = () => console.log ( SimpleHttp );
module.exports = SimpleHttp;

