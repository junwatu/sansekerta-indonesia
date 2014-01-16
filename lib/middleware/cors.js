/**
 * Created by equan on 1/15/14.
 */

// CORS

exports.cors = function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }
}