/**
 * REST API
 */
var config = require('../../config');

exports.version = function(req, res, next){
    res.json({'api-version': config.get('api:version')});
};

exports.search = function (req, res, next) {
    res.json({"query": "sample-data"});
};