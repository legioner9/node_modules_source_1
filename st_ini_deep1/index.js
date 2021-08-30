const {_require} = require('st_require')
const Deep = _require ( 'st_ex1_deep1_' );

const l_log = Deep.SetLogical.LogicalDebug.L_log;
const l_log_deb = Deep.SetLogical.LogicalDebug.L_log_deb;
const l_deb = Deep.SetLogical.LogicalDebug.L_deb;
const l_fsLog = Deep.SetLogical.LogicalDebug.L_fsLog;
const l_fsLogErr = Deep.SetLogical.LogicalDebug.L_fsLogErr;
const l_stack = Deep.SetLogical.LogicalDebug.L_stack;

const dirDeepOptions = Deep.SetConsole.ConsoleDir.DirDeepOptions

module.exports = {
    l_log,
    l_log_deb,
    l_deb,
    l_fsLog,
    l_fsLogErr,
    l_stack,

    dirDeepOptions,
};
