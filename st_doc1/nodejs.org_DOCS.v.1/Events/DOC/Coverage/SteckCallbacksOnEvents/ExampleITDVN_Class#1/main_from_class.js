// Для работы с событиями, необходимо подключить модуль 'events'

const myEmitCaller = require ( './ClassMyEmitCaller' );
// Создаем объект ридера

const caller = new myEmitCaller ();

caller.callFirst( 'init str', ( d ) => console.log ( d ) );
