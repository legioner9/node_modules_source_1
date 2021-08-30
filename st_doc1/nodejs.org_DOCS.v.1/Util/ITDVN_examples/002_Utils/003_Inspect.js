var utils = require ( 'util' );

var user = {
    name: "Ivan",
    age: 25,
    salary: 10000,
    bonus: 15
};

var objInfo = utils.inspect ( user, true, 2, true );

console.log ( objInfo );

var point = {
    name: "A",
    x: 10,
    y: 20,
    inspect: function () {
        return utils.format ( 'Point %s[%d:%d]', this.name, this.x, this.y );
    }
};

console.log ( point );

const o = {
    a: [ 1, 2, [ [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'test',
        'foo' ] ], 4 ],
    b: new Map ( [ [ 'za', 1 ], [ 'zb', 'test' ] ] )
};
console.log ( utils.inspect ( o, {
    compact: true,
    depth: 5,
    breakLength: 80
} ) );

// { a:
//   [ 1,
//     2,
//     [ [ 'Lorem ipsum dolor sit amet, consectetur [...]', // A long line
//           'test',
//           'foo' ] ],
//     4 ],
//   b: Map { 'za' => 1, 'zb' => 'test' } }

// Setting `compact` to false changes the output to be more reader friendly.

const pr = utils.formatWithOptions ( { colors: true }, 'See object %O', { foo: 42 } );
console.log ( pr );// Returns 'See object { foo: 42 }', where `42` is colored as a number

class Box {
    constructor ( value ) {
        this.value = value;
    }

    [utils.inspect.custom] ( depth, options ) {
        // options (default settings)
        // breakLength: 80
        // colors: false
        // compact: 3
        // customInspect: true
        // depth: 2
        // getters: false
        // maxArrayLength: 100
        // showHidden: false
        // showProxy: false
        // sorted: false

        if ( depth < 0 ) {
            return options.stylize ( '[Box]', 'special' );
        }

        const newOptions = Object.assign ( {}, options, {
            depth: options.depth === null ? null : options.depth + 1,
            colors: true,
            // depth: options.depth === null ? null : options.depth - 1
        } );

        const inner = utils.inspect ( this.value, newOptions );
        return `${ options.stylize ( 'Box', 'special' ) }< ${ inner } >`;
    }
}

const box = new Box ( 543 );

console.log ( utils.inspect ( box ) );

// Returns: "Box< 543 >" // in color style


