/** +++++++++++
 *  Routes
 * ++++++++++++
 *
 * Team Cah Angon
 * 2013
 *
 * MIT License
 */

var package = require('../../package'),
    appInfo = {
        "app": package.name,
        "version": package.version,
        "author": package.author,
        "homepage": package.homepage
    };

exports.home = function (req, res, next) {
    res.json(appInfo);
}