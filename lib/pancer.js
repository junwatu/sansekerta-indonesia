/** ++++++++++++++++++++
 *  Application Server
 *  ++++++++++++++++++++
 *
 *  Team Cah Angon
 *  2013
 */
var express = require('express'),
    server = express(),
    api = require('./routes/api'),
    routes = require('./routes'),
    config = require('./config');

server.get('/', routes.home);
server.get('/api', api.version);
server.post('/api/search/:sanskekerta', api.search);

server.listen(config.get('server:port'), function () {
    console.log('Server berjalan pada ' + config.get('server:port'));
});
