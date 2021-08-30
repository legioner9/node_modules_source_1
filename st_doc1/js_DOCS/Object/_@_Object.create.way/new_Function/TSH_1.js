'use strict';
'use ndb';
// NBase/_Md/_Index/_HPW/Part_I/content/Courses/Fundamentals/funcLambdConextClosure/Function-master/JavaScript/9-this_2.js

// return this (optionally)
const Th_f_1 = function ( a ) {
    this._a = a;
    this.meth = function () {
        return this._a - 10;
    };
};

const RTh_f_1 = new Th_f_1 ( 10 );
// RTh_f_1: Th_f_1
// meth: ƒ ()
// _a: 10

// return lambda
const Th_f_2 = function ( a ) {
    this._a = a;
    const meth = x => {
        return this._a - x;
    };
    return meth;
};

const RTh_f_2 = new Th_f_2 ( 10 );
const RRTh_f_2 = RTh_f_2 ( 9 ); // 1

// return function
const Th_f_3 = function ( a ) {
    this._a = a;
    const __a = this._a;
    const meth = function ( x ) {
        return __a - x;
    };
    return meth;
};

const RTh_f_3 = new Th_f_3 ( 10 );
const RRTh_f_3 = RTh_f_3 ( 9 ); // 1

// return object

const Th_f_4 = function ( a ) {
    this._a = a;
    const __a = this._a + 5;
    const res_obj = {
        _a: __a,
        ret_lambda: () => this._a,
        ret_function: function () {
            return this._a;
        },
    };
    return res_obj;
};

const RTh_f_4 = new Th_f_4 ( 10 );
const RL = RTh_f_4.ret_lambda (); // 10
const RF = RTh_f_4.ret_function (); // 15
debugger
