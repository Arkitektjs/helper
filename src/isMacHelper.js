/**
 * Check if platform is mac.
 *
 * @method isMac
 * @return {Boolean} Returns true if the platform is mac and false otherwise.
 */
module.exports = () => 'darwin' === process.platform;
