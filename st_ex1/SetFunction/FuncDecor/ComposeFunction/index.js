const ComposeFunction = ( ...fns ) => x => {
    if ( fns.length === 0 ) return x;
    const fn = fns.pop ();
    try {
        const res = fn ( x );
        if ( fns.length === 0 ) return res;
        return ComposeFunction ( ...fns ) ( res );
    }
    catch (e) {
        console.log ( `error from ComposeFunction fn.name :: ${ fn.name } , arguments :: ${ x }  ` );
        throw e;
    }
};

ComposeFunction.help = `ModuleFunc = () => {}`;

ComposeFunction.call = () => console.log ( ComposeFunction );

module.exports = ComposeFunction;