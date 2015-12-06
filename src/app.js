/* ----- styles ----- */
require('./less/all.less');

/* ----- library ----- */
module.exports = window.jQuery = window.$ = require('./js/lib/jquery-2.1.4.min.js');
require('./js/lib/howler.min.js');
window.queue = require('./js/main.js');