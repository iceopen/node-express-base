var app = require('express')();
var config = require('./config');
var logger = require("./util/Log4jsUtil");
var apis = require('./apis');
var router = require("./router");

var port = (process.env.VMC_APP_PORT || config.port);
var host = (process.env.VCAP_APP_HOST || 'localhost');

app.use(log4js.connectLogger(log4js.getLogger("http"), {level: 'auto'}));

app.use('/', router);

var server = app.listen(port, function (req, res) {
    logger.info('Listening on port ' + server.address().port);
});

module.exports = app;
