/**
 * Log a message to the console prefixed by the LOG_PREFIX
 * @param  {...any} str string(s) to print
 */
const log = (...str) => { console.log(`${LOG_PREFIX} ${!Array.isArray(str) ? str : str.concat(', ')}`) };

/**
 * Are we on the home page of yt?
 * @returns {Boolean} true if on home page
 */
const onHomePage = () => /.*youtube\.com\/$/.test(document.location.href);