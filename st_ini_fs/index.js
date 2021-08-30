const S_Fs = require ( 'st_fs' );

const s_writeFileSync = S_Fs.ConstructFs.FsCreate.writeFileSync
const s_appendFileSync = S_Fs.ConstructFs.FsCreate.appendFileSync
const s_readFileSync = S_Fs.ConstructFs.FsCreate.readFileSync
const s_readdirSync = S_Fs.ConstructFs.FsCreate.readdirSync
const s_stats = S_Fs.ConstructFs.FsCreate.stats
const s_isFile = S_Fs.ConstructFs.FsCreate.isFile
const s_isDirectory = S_Fs.ConstructFs.FsCreate.isDirectory
const s_mkdirSync = S_Fs.ConstructFs.FsCreate.mkdirSync
const s_rmdirSync = S_Fs.ConstructFs.FsCreate.rmdirSync
const s_unlinkSync = S_Fs.ConstructFs.FsCreate.unlinkSync

module.exports = {

    s_writeFileSync,
    s_appendFileSync,
    s_readFileSync,
    s_readdirSync,
    s_stats,
    s_isFile,
    s_isDirectory,
    s_mkdirSync,
    s_rmdirSync,
    s_unlinkSync,

};
