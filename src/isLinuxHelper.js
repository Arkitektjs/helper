/**
 * Check if platform is linux.
 *
 * @method isLinux
 * @return {Boolean} Returns true if the platform is linux and false otherwise.
 */
module.exports = () => 'linux' === process.platform;
