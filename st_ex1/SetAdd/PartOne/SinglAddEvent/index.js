function singlAddEvent ( stream, id, callback ) {
    if ( !stream._events[id] ) stream.on ( id, callback );
    else {
        if ( !(stream._events[id] instanceof Array) ) {
            if ( !(stream._events[id].toString() === callback.toString()) ) stream.on ( id, callback );
        }
        else {
            const id_arr = stream._events[id];
            const result = id_arr.filter ( item => item.toString() === callback.toString() );
            if ( !result ) stream.on ( id, callback );
        }
    }
}
singlAddEvent.help = `ModuleFunc = () => {}`;

singlAddEvent.call = () => console.log ( singlAddEvent );

module.exports = singlAddEvent;