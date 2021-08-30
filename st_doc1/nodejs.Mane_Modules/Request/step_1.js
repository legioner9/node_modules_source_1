const request = require ( 'request' );

request ( 'https://utro.ru/', function ( error, response, body ) {
    debugger;
    console.log ( 'error:', error ); // Print the error if one occurred
    console.log ( 'statusCode:', response && response.statusCode ); // Print the response status code if a response was received
    console.log ( 'body:', body ); // Print the HTML for the Google homepage.
} );