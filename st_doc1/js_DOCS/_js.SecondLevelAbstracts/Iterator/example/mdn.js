'use strict';
'use ndb';

// assignment separate from declaration
{
    const arr = [ 10, 20, 30, 40, 50 ];
    const [ a, b, ...rest ] = arr;
}
// a: 10
// b: 20
// rest: Array(3)
// 	0: 30
// 	1: 40
// 	2: 50
// 	length: 3

// default values
{
    const arr = [ 17 ];
    const [ a = 12, b = 20 ] = arr;
}
// a: 17
// b: 20

// swapping variables
{
    let arr = [ 1, 3 ];
    let [ a, b ] = arr;
    [ b, a ] = [ a, b ];
    arr = [ a, b ];
}
// arr: Array(2)
//  0: 3
//  1: 1
//  length: 2

const fibb = ( n ) => {
    if ( !( n === n ^ 0 || n >= 3 ) ) return 'n not correctly';
    let a = 1, b = 1;
    for ( let i = 3 ; i <= n ; i++ ) {
        [ a, b ] = [ b, a + b ];
    }
    return b;
};

const arr = [];
for ( let i = 3 ; i < 13 ; i++ ) {
    arr.push ( fibb ( i ) );
}

// object destructing

{
    const obj = {
        p: 34,
        q: true,
    };
    const { p, q } = obj;
}
// p: 34
// q: true

{
    let user = {
        name: 'John',
        years: 30,
    };

    let { name, years: age, isAdmin = false } = user;
}

// Unpacking fields from objects passed as function parameter
{
    const o = {
        id: 42,
        name: 'dims',
        setUser: {
            age: 27,
            city: 'Kras',
        },
    };
    const userId = ( { id } ) => id;

    const userInfo = ( {
                           name, setUser: { age },
                       } ) => ( {
        name,
        age,
    } );
    const o1 = userId ( o );
    const o2 = userInfo ( o );
}
// settings a functions parameter's default value
{
    const sfun = ( {
                       a = 'one', ob = {
            x: 0,
            y: 0,
        }, rad = 20,
                   } = {} ) => ( {
        a,
        obx: ob.x,
        oby: ob.y,
        rad,
    } );

    const res_sfun = sfun ( {
                                ob: {
                                    x: 36,
                                    y: 42,
                                },
                                rad: 70,
                            } );
}

// rename fields
{
    const meta = {
        field: 'stage',
    };
    let { field: new_name_field } = meta;
    // new_name_field: "stage"
    const meta_2 = { new_name_field };
    // meta_2:
    // new_name_field: "stage"
}

// iterate values and entries
{
    const arr = [
        {
            a: 1,
            b: 'b1',
        },
        {
            a: 2,
            b: 'b2',
        },
    ];
    let arr_res = [];
    for ( const { a, b } of arr ) { // of iterate arr.values()
        arr_res.push ( [ a, b ] );
    }
    let arr_res_iv = [];
    for ( const { a, b } of arr.values () ) { // iterate arr.values()
        arr_res_iv.push ( [ a, b ] );
    }
    // arr_res_iv: Array(2)
    // 0: (2) [1, "b1"]
    // 1: (2) [2, "b2"]

    let arr_res_ie = [];
    for ( const [ i, { a, b } ] of arr.entries () ) { // iterate arr.entries()
        arr_res_ie.push ( { i, a, b } );
    }
    // arr_res_ie: Array(2)
    // 0: {i: 0, a: 1, b: "b1"}
    // 1: {i: 1, a: 2, b: "b2"}
}
// for object
{
    const o = {
        o1: {
            a: 1,
            b: 'b1',
        },
        o2: {
            a: 2,
            b: 'b2',
        },
    };
    // let arr_res = [];
    // for ( const oKey in o ) {
    //     arr_res.push ( o[oKey] );
    // }
    let arr_res_i1 = [];
    for ( const item of Object.entries ( o ) ) {
        arr_res_i1.push ( item );
    }
    //arr_res_i1: Array(2)
    // 0: (2) ["o1", {a: 1, b: "b1"}]
    // 1: (2) ["o2", {a: 2, b: "b2"}]

    let arr_res_i2 = [];
    for ( const [ key, { a, b } ] of Object.entries ( o ) ) {
        arr_res_i2.push ( [ key, a, b ] );
    }
    //arr_res_i2: Array(2)
    // 0: (3) ["o1", 1, "b1"]
    // 1: (3) ["o2", 2, "b2"]

    const arr_rest_obj_e = [ ...Object.entries ( o ) ];
    // arr_rest_obj_e: Array(2)
    // 0: (2) ["o1", {a: 1, b: "b1"}]
    // 1: (2) ["o2", {a: 2, b: "b2"}]

    const obj_rest_obj_e = { ...Object.entries ( o ) };
    //obj_rest_e: {
    // 0: ["o1", {a: 1, b: "b1"}],
    // 1: ["o2", {a: 2, b: "b2"}]
    // }

    const arr_rest_obj_v = [ ...Object.values ( o ) ];
    //arr_rest_obj_v:[
    // 0: {a: 1, b: "b1"}
    // 1: {a: 2, b: "b2"}
    // ]

    const obj_rest_obj_v = { ...Object.values ( o ) };
    // obj_rest_obj_v:{
    // 0: {a: 1, b: "b1"}
    // 1: {a: 2, b: "b2"}
    // }

}

// computed property name
{
    const key = 'k';
    const o = { [key]: 'prop' };
    let { [key]: pr } = o;
    //o: {k: "prop"}
    // pr: "prop"

}
// destruct from __proto__
{
    const o = { own_prop: 'bul' };
    o.__proto__.proto_prop = 'mul';
    const { own_prop: a, proto_prop: b } = o;
    // a: "bul"
    // b: "mul"
    // o: {own_prop: "bul"}
    debugger
}