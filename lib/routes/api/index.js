/**+++++++++++++++++
 * REST API
 * +++++++++++++++++
 *
 *
 * Team Cah Angon
 * 2013
 */

var config = require('../../config'),
    searchEngine = require('../../core');

exports.version = function(req, res, next){
    res.json({'api-version': config.get('api:version')});
};

exports.search = function (req, res, next) {

    var query_kata = req.params.kata;

    /**
     * Apa yang terjadi kalo waktu query terlalu lama ?
     */
    searchEngine.query(query_kata, function(result){
        res.json(result);
    });
};

