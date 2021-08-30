const obj = { 'a': 1, 'b': 'bb', 'c': { 'd': 'dd' } };
const map = new Map ( Object.entries ( obj ) );
debugger
map.forEach ( ( value, key, map ) => console.log ( {
                                                       key,
                                                       value
                                                   } ) );

