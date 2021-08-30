'use strict';
'use ndb';

{
    const o = {
        set value ( x ) { this.anyOne = x;},
        get anyTwo () {return this.anyOne;}
    };

    o.anyOne = 'tuo';
    const oa = o.anyTwo; // 'tuo'
}
{
    const language = {
        set current ( name ) {
            this.log.push ( name );
        },
        get logUp () {
            return this.log.map ( x => x.toUpperCase () );
        },
        log: [],
    };
    language.current = 'en';
    let a = language.log; // a: (1) ["en"]
    language.current = 'ru';
    a = language.log; //a: (2) ["en", "ru"]
    const a_up = language.logUp; // a_up: (2) ["EN", "RU"]

}
// using a computed property name
{
    const arr_meth = [ 'sum', 'up' ];
    const arr_prop = [ 'a' ];
    const o = {
        [arr_prop[0]]: '',
        set [arr_meth[0]] ( v ) {
            this.a += v;
        }
    };
    o[arr_meth[0]] = 'bb';
    const is = o[arr_prop[0]];
    debugger
    const o2 = { [arr_prop[0]]: '' };
    Object.defineProperty ( o2, arr_meth[0], {
        set: function ( x ) {
            const z = arr_prop[0];
            this[arr_prop[0]] += x;
        }
    } );
    o2[arr_meth[0]] = 'bb';
    const is2 = o2[arr_prop[0]];
    debugger
}
// set

{
    class Example {
        get hello () {
            return 'world';
        }
    }

    const obj = new Example ();
    console.log ( obj.hello );
// "world"

    console.log ( Object.getOwnPropertyDescriptor ( obj, 'hello' ) );
// undefined

    console.log (
        Object.getOwnPropertyDescriptor (
            Object.getPrototypeOf ( obj ), 'hello'
        )
    );
}

{
    const obj = {
        log: [ 'example', 'test' ],
        get latest () {
            if ( this.log.length === 0 ) return undefined;
            return this.log[this.log.length - 1];
        }
    };
    console.log ( obj.latest ); // "test"
}

