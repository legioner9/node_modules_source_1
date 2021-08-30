function singlAddOnceEvent ( stream, id, callback ) {
    if ( !stream._events[id] ) stream.once ( id, callback );
    else {
        if ( !(stream._events[id] instanceof Array) ) {
            if ( !(stream._events[id].toString() === callback.toString()) ) stream.once ( id, callback );
        }
        else {
            const id_arr = stream._events[id];
            const result = id_arr.filter ( item => item.toString() === callback.toString() );
            if ( !result ) stream.once ( id, callback );
        }
    }
}
singlAddOnceEvent.help = `ModuleFunc = () => {}`;

singlAddOnceEvent.call = () => console.log ( singlAddOnceEvent );

module.exports = singlAddOnceEvent;