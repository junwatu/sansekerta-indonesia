/**
 *  Application Server
 *
 *
 */
var express = require('express'),
    server = express(),
    api = require('./routes/api'),
    routes = require('./routes');

server.get('/', routes.home);
server.get('/api', api.version);
server.post('/api/search/:sanskekerta',api.search);

server.listen(3000, function(){
    console.log('server berjalan pada 3000');
});
