/**
 * REST API
 */

expors.version = function(){
    res.json({'api':'pancer-v1'});
};

exports.search = function (req, res, next) {
    res.json({"query": "sample-data"});
};