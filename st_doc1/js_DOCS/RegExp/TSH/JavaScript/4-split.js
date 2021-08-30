'use strict';

const words = s => [ ...new Set ( s
                                      .toLowerCase ()
                                      .replace ( /\W+/g, ' ' )
                                      .trim ()
                                      .split ( /\s/ )
) ];

const s = 'Hello World, here we are!';
debugger
const w1 = words ( s );
const w2 = words ( s + s );

