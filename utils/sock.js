var sockJsInner = function(sockJsServer){

    sockJsServer.on('connection', function(conn) {
        //var browser = redis.createClient();
        //browser.subscribe('online');
        //
        //browser.on("message", function(channel, message){
        //    conn.write(message);
        //});

        conn.write('{"asdasdasd":"asdasdasd"}');

        conn.on('/*', function(message) {
            conn.write('sdasdas');
            winston.info('ssss');
        });
        conn.on('/info', function(message) {
            conn.write('sdasdas');
            winston.info('ssss');
        });
        conn.on('close', function() {});
    });
};

module.exports = sockJsInner;

