var app = require('express')();
var config = require('./config');
var logger = require("./util/Log4jsUtil");
var apis = require('./apis');
var async = require("async");
var port = (process.env.VMC_APP_PORT || config.port);
var host = (process.env.VCAP_APP_HOST || 'localhost');
if (!config.debug) {
    require('newrelic');
}

app.use(log4js.connectLogger(log4js.getLogger("http"), {level: 'auto'}));

app.get("*", function (req, res) {
    res.send('Hell');
});

var server = app.listen(port, function (req, res) {
    logger.info('Listening on port ' + server.address().port);
});

module.exports = app;
