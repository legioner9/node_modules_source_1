// Для работы с событиями, необходимо подключить модуль 'events'

const myEmitCaller = require ( './ClassMyEmitCaller' );
// Создаем объект ридера

const caller = new myEmitCaller ();

caller.callFirst( 'Init Str', ( d ) => console.log ( d ) );
