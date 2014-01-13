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
    searchEngine = require('../core'),
    appInfo = {
        "app": package.name,
        "version": package.version,
        "author": package.author,
        "homepage": package.homepage
    };

exports.home = function (req, res, next) {
    res.json(appInfo);
}

/**+++++++++++++++++++++
 * Role : Administrator
 * +++++++++++++++++++++
 *
 * TODO : Authentication
 *
 */
exports.initSearchIndex = function (req, res, next) {

    var initFlag = req.params.flag;

    searchEngine.init(function (msg, err) {
        if (err) console.log(err);
        res.send(msg);
        res.end();
    })
}



