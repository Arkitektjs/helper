/**
 * Check if platform is windows.
 *
 * @method isWindows
 * @return {Boolean} Returns true if the platform is windows and false otherwise.
 */
module.exports = () => 'win32' === process.platform;
