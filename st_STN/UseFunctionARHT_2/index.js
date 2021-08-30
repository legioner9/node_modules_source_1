const Arht = require ( 'st_ini_arht' );
const atOut_2 = Arht.atOut_2;
debugger
const fn = () => {
    debugger
    const ENV = atOut_2.at ( fn );
    fn.l_fsLog ( ENV.MODE, 'fn.l_fsLog => RUN main tread', ENV.MODULE.path );
    fn.l_deb ( ENV.MODE );
    fn.l_log ( ENV.MODE, 'fn.l_log => RUN main tread' );
    fn.l_log_deb ( ENV.MODE, 'fn.l_log_deb => RUN main tread' );
    fn.dirDeepOptoins ( ENV );
    debugger
};
atOut_2.prop ( fn );
atOut_2.out ( fn, module );
fn.mode.logFs = true;
fn.mode.log = true;
fn.mode.deb = true;
fn.mode.debLog = true;

debugger
fn ();
