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
    facets = ['sansekerta', 'bahasa'],
    batch = null,
    batchFileName = '../data/sample/p.json';

exports.init = function (callback) {
    fs.readFile(batchFileName, 'utf8', function (err, data) {
        if (err) {
            console.log('Error: ' + err);
        }

        batch = data;

        searchEngine.index(batch, batchFileName, facets, function (msg) {
            callback(msg);
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