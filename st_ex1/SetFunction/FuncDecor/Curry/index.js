const Curry = (fn, ...par) => {
    const curried = (...args) => (
        fn.length > args.length ?
            Curry(fn.bind(null, ...args)) :
            fn(...args)
    );
    return par.length ? curried(...par) : curried;
};

Curry.help = `ModuleFunc = () => {}`;

Curry.call = () => console.log ( Curry );

module.exports = Curry;