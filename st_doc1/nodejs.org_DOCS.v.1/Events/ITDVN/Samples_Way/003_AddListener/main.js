'use strict';

let count = 0;
const print = () => {
    count++;
    console.log ( 'Click - ', count );
};

// Для работы с событиями, необходимо подключить модуль 'events'

const emt = new (require ( 'events' )).EventEmitter;

// метод on и addListener добавляют обработчик на событие
emt.on ( 'click', print );
emt.addListener ( 'click', print );

// добавив обработчик с помощью метода once, обраюотчик сработает только один раз и будет удален
emt.once ( 'click', print );

// Вызов обработчиков 
emt.emit ( 'click' );
emt.emit ( 'click' );



