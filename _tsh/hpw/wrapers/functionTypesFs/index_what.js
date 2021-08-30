const functionTypesFs = {
    pathFunctions: {
        names: [
            'access',
            'chmod',
            'chown',
            'exists',
            'lchmod',
            'lchown',
            'lstat',
            'mkdir',
            'open',
            'readdir',
            'readlink',
            'rmdir',
            'stat',
            'truncate',
            'unlink',
            'utimes'
        ],
        wrapper: pathFunctionsWrapper,
        hasSyncCounterpart: true
    },
    stringPathFunctions: {
        names: [
            'mkdtemp'
        ],
        wrapper: stringPathFunctionsWrapper,
        hasSyncCounterpart: true
    },
    pathFunctionsWithNative: {
        names: [
            'realpath'
        ],
        wrapper: pathFunctionsWithNativeWrapper,
        hasSyncCounterpart: true
    },
    pathNonSyncFunctions: {
        names: [
            'createReadStream',
            'createWriteStream',
            'unwatchFile',
            'watch',
            'watchFile'
        ],
        wrapper: pathFunctionsWrapper,
        hasSyncCounterpart: false
    },
    fileFunctions: {
        names: [
            'appendFile',
            'readFile',
            'writeFile'
        ],
        wrapper: fileFunctionsWrapper,
        hasSyncCounterpart: true
    },
    twoPathFunctions: {
        names: [
            'copyFile',
            'link',
            'rename',
            'symlink'
        ],
        wrapper: twoPathFunctionsWrapper,
        hasSyncCounterpart: true
    }
};

// EXAMPLE
const { _require } = require ( 'st_require' );

const _node = _require ( '_node' );


sandboxedFs.bind = ( path, allowTmp = true ) => {
    const wrapped = Object.assign ( {}, _node.fs );

    for ( const typeName of Object.keys ( functionTypes ) ) {
        const type = functionTypes[typeName];
        for ( const name of type.names ) {
            const fn = fs[name];
            if ( !fn ) continue;
            wrapped[name] = type.wrapper ( fn, path, allowTmp );
            if ( type.hasSyncCounterpart ) {
                const syncName = name + 'Sync';
                wrapped[syncName] = type.wrapper ( fs[syncName], path, allowTmp );
            }
        }
    }
};

module.exports = functionTypesFs;
