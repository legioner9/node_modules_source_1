// Для работы с событиями, необходимо подключить модуль 'events'
const fs = require ( 'fs' );
const my_path = require ( 'path' );
const fileReader = require ( './ClassReadFile' );
// Создаем объект ридера
const file_to = my_path.join ( __dirname, 'Files', 'to.txt' );
const file_from = my_path.join ( __dirname, 'Files', 'from.txt' );

const reader = new fileReader ();
debugger;
// функция readDataFromFile подключается к файлу, считывает данные и передает в нашу callback функцию
reader.readDataFromFile ( file_from, function ( data ) {
    console.log ( data );
    fs.writeFile ( file_to, data, e => {
        if ( e ) throw e;
        console.log ( 'File is write' );
    } );
} );
debugger;
