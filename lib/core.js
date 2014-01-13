/** ++++++++++++++++++++++++
 *  Searching and Indexing
 *  ++++++++++++++++++++++++
 *
 *
 *  Team Cah Angon
 *  2013
 */

var searchEngine = require('search-index'),
    fs = require('fs'),
    config = require('./config'),
    facets = ['sansekerta', 'bahasa'],
    batch = null,
    batchFileName = config.get('data:sample');

exports.init = function (callback) {
    fs.readFile(batchFileName, 'utf8', function (err, data) {
        if (err) {
            callback(null, err);
            console.log('Error: ' + err);
        }

        batch = data;

        searchEngine.index(batch, batchFileName, facets, function (msg) {
            callback(msg, null);
        });
    });
}

exports.query = function (kata, callback) {
    var query = {
        "query": [kata],
        "facets": ["bahasa"]
    };

    searchEngine.search(query, function (result) {
        callback(result);
    });
}