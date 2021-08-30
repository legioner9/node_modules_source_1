const int16 = new Int16Array(2);
int16[0] = 1024;

const int32 = new Uint32Array(34); // 2**32 max volume
// for Unit32Array
const flo32 = new Float32Array(34); // max 1.8 * 10 ** 38 !

for (let i = 0; i < 34; i++) {
    int32[i] = 2 ** i;
    flo32[i] = 2 ** i;
}
debugger;