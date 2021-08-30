/* TODO: PTR add lifetime to any func  */
function t_f(ms, cb) {
    let tm = setTimeout(() => {
        if (tm) console.log('Time over (((' + tm);
        tm = null;
    }, ms);
    return (...args) => {//return t_f(ms, cb)(...args) before ms time
        if (tm) {
            tm = null;
            cb(...args);
        }
    }
}

const fn = d => console.log(' d = ' + d);

const fn100 = t_f(100, fn);
const fn200 = t_f(200, fn);

setTimeout(() => {
    fn100('first');
    fn200('second');//time life that fn more than 150 ms
}, 150);

/* TODO: PTR add cancelable to any func (kill into wrapper)  */
const cancelable = fn => {
    const wrapper = (...args) => {
        if (fn) return fn(...args);
    };
    wrapper.cancel = () => {
        fn = null;
    };
    return wrapper;
};

const cancel_fn = cancelable(fn);

cancel_fn('first');
cancel_fn.cancel();
cancel_fn('second');// fn is kill into cancel_fn after cancel_fn.cancel()
