const utils = require ( 'util' );

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

ServHand_i1.help = `SimpleHttp ( handle, servPort = 3004, hostName = '127.0.0.1' )`;
ServHand_i1.call = () => console.log ( ServHand_i1 );
module.exports = ServHand_i1;