const isWindows = require('./isWindowsHelper.js');

/**
 * Get current user directory.
 *
 * @method getUserHome
 * @return {String} Returns true if the platform is windows and false otherwise.
 */
module.exports = () => process.env[isWindows() ? 'USERPROFILE' : 'HOME'];
