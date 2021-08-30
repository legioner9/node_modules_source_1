let p = {
    writable: true,
};
Object.defineProperties ( Object.prototype,
                          {
                              'AppendChainPrototype': p,
                          } );

/**
 *** Object.appendChain(@object, @prototype)
 *
 * Присоединяет первый неродной прототип цепочки к новому прототипу.
 * Возвращает @object (если он был примитивным значением, оно будет преобразовано в объект).
 *
 *** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
 *** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
 *
 * Присоединяет первый не родной прототип цепочки к родному объекту Function.prototype, затем присоединяет
 * new Function(["@arg"(s)], "@function_body") к этой цепочке.
 * Возвращает функцию.
 *
 **/

Object.prototype.AppendChainPrototype = function ( oChain, oProto ) {
    if ( arguments.length < 2 ) {
        throw new TypeError ( 'Object.appendChain - Not enough arguments' );
    }
    if ( typeof oProto === 'number' || typeof oProto === 'boolean' ) {
        throw new TypeError ( 'second argument to Object.appendChain must be an object or a string' );
    }

    let oNewProto = oProto,
        oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor ( oChain );

    for ( let o1st = this.getPrototypeOf ( o2nd ) ;
          o1st !== Object.prototype && o1st !== Function.prototype ;
          o1st = this.getPrototypeOf ( o2nd )
    ) {
        o2nd = o1st;
    }

    if ( oProto.constructor === String ) {
        oNewProto = Function.prototype;
        oReturn = Function.apply ( null, Array.prototype.slice.call ( arguments, 1 ) );
        this.setPrototypeOf ( oReturn, oLast );
    }

    this.setPrototypeOf ( o2nd, oNewProto );
    return oReturn;
};

module.exports = {};