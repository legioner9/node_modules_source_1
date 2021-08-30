debugger;
const encodingOps = {
    utf8: {
        encoding: 'utf8',
        encodingVal: encodingsMap.utf8,
        byteLength: byteLengthUtf8,
        write: ( buf, string, offset, len ) => buf.utf8Write ( string, offset, len ),
        slice: ( buf, start, end ) => buf.utf8Slice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfString ( buf, val, byteOffset, encodingsMap.utf8, dir )
    },
    ucs2: {
        encoding: 'ucs2',
        encodingVal: encodingsMap.utf16le,
        byteLength: ( string ) => string.length * 2,
        write: ( buf, string, offset, len ) => buf.ucs2Write ( string, offset, len ),
        slice: ( buf, start, end ) => buf.ucs2Slice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfString ( buf, val, byteOffset, encodingsMap.utf16le, dir )
    },
    utf16le: {
        encoding: 'utf16le',
        encodingVal: encodingsMap.utf16le,
        byteLength: ( string ) => string.length * 2,
        write: ( buf, string, offset, len ) => buf.ucs2Write ( string, offset, len ),
        slice: ( buf, start, end ) => buf.ucs2Slice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfString ( buf, val, byteOffset, encodingsMap.utf16le, dir )
    },
    latin1: {
        encoding: 'latin1',
        encodingVal: encodingsMap.latin1,
        byteLength: ( string ) => string.length,
        write: ( buf, string, offset, len ) => buf.latin1Write ( string, offset, len ),
        slice: ( buf, start, end ) => buf.latin1Slice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfString ( buf, val, byteOffset, encodingsMap.latin1, dir )
    },
    ascii: {
        encoding: 'ascii',
        encodingVal: encodingsMap.ascii,
        byteLength: ( string ) => string.length,
        write: ( buf, string, offset, len ) => buf.asciiWrite ( string, offset, len ),
        slice: ( buf, start, end ) => buf.asciiSlice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfBuffer ( buf,
                            fromStringFast ( val, encodingOps.ascii ),
                            byteOffset,
                            encodingsMap.ascii,
                            dir )
    },
    base64: {
        encoding: 'base64',
        encodingVal: encodingsMap.base64,
        byteLength: ( string ) => base64ByteLength ( string, string.length ),
        write: ( buf, string, offset, len ) => buf.base64Write ( string, offset, len ),
        slice: ( buf, start, end ) => buf.base64Slice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfBuffer ( buf,
                            fromStringFast ( val, encodingOps.base64 ),
                            byteOffset,
                            encodingsMap.base64,
                            dir )
    },
    hex: {
        encoding: 'hex',
        encodingVal: encodingsMap.hex,
        byteLength: ( string ) => string.length >>> 1,
        write: ( buf, string, offset, len ) => buf.hexWrite ( string, offset, len ),
        slice: ( buf, start, end ) => buf.hexSlice ( start, end ),
        indexOf: ( buf, val, byteOffset, dir ) =>
            indexOfBuffer ( buf,
                            fromStringFast ( val, encodingOps.hex ),
                            byteOffset,
                            encodingsMap.hex,
                            dir )
    }
};
debugger;