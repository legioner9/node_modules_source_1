// Для работы с событиями, необходимо подключить модуль 'events'
const fileReader = require ( './readFile.js' );
// Создаем объект ридера
const reader = new fileReader.Reader ();
debugger;
// функция readDataFromFile подключается к файлу, считывает данные и передает в нашу callback функцию
reader.readDataFromFile ( 'file.js', function ( responce ) {
    console.log ( responce );
} );
