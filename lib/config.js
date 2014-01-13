/**
 *  Application Config
 *
 *
 *  Team Cah Angon
 *  2013
 */
var config = require('nconf'), envi;

var SIConfig = function() {
    config.argv().env('_');
    envi = config.get('NODE:ENV') || 'development';
    config.file(envi, 'config/' + envi + '.json');
};

SIConfig.prototype.get = function (key) {
    return config.get(key);
}

module.exports = new SIConfig();
