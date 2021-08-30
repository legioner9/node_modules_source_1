const assert = require('assert'); // assert <- func

const {message} = new assert.AssertionError({
    actual: 1,
    expected: 2,
    operator: 'strictEqual'
});

// Verify error output:
try {
    assert.strictEqual(1, 2);
} catch (err) {
    assert(err instanceof assert.AssertionError);
    assert.strictEqual(err.message, message);
    assert.strictEqual(err.name, 'AssertionError [ERR_ASSERTION]');
    assert.strictEqual(err.actual, 1);
    assert.strictEqual(err.expected, 2);
    assert.strictEqual(err.code, 'ERR_ASSERTION');
    assert.strictEqual(err.operator, 'strictEqual');
    assert.strictEqual(err.generatedMessage, true);
}
debugger;
try {
    //deepEqual Stability: 0 - Deprecated deepEqual Use assert.deepStrictEqual() instead.
    //notEqual Stability: 0 - Deprecated: Use assert.notStrictEqual() instead.
    //notDeepEqual Stability: 0 - Deprecated: Use assert.notDeepStrictEqual() instead.
    //equal Stability: 0 - Deprecated: Use assert.strictEqual() instead

    assert(0 < 4); // true
    assert(4 > 5); // false

    assert.deepStrictEqual({a: 1}, {a: '1'}); // err
    assert.deepStrictEqual({a: 1}, {a: 1}); // true

    assert.notDeepStrictEqual({a: 1}, {a: '1'}); // true
    assert.notDeepStrictEqual({a: 1}, {a: 1}); // err

} catch (e) {
    // console.log(e.code,e.actual,e.operator,e.expected);
    console.log(`${e.code} : %o <${e.operator}> %o`, e.actual, e.expected);
    console.log(e.message);
}

