var http = require('http'),
    morgan = require('morgan'),
    //sockjs = require('sockjs'),
    express = require('express'),
    //redis = require('redis'),
    config = require('./config'),
    app = express();
    //middleware = require('./middleware')(app, express);

//var mongoose = require('./utils/mongoose');
var logger = require('./utils/log');

//var sockjs = require('sockjs');
//var sockJsServer = sockjs.createServer();
//var sockJsInner = require('./utils/sock.js');

//sockJsInner(sockJsServer);

var server = http.createServer(app);

//sockJsServer.installHandlers(server, {prefix: '/stream'});

server.listen(config.get('port'), function(){
    logger.debug('Express server listening on port ' + config.get('port'));
});

app.use(morgan("combined", { "stream": logger.stream }));


//logger(mongoose);
//var uri = 'mongodb://localhost';
//mongoose.connect(uri);
//var db = mongoose.connection;
//
//
//db.on('error', console.error);
//db.on('open', function() {
//    // Здесь действия с монгой.
//});
