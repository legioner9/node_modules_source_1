'use strict';
const { cbTimeout, curry } = require ( 'st_ini' );

const fn = () => {
    console.log ( 'Callback from from timer' );
};

const timer = curry ( cbTimeout );
timer ( 2000 ) ( fn );
debugger;
const timer2s = timer ( 2000 );
timer2s ( fn );
