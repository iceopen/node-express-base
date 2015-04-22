var app = require('express')();
var config = require('./config');
var logger = require("./util/Log4jsUtil");
var apis = require('./apis');
var async = require("async");

if (!config.debug) {
    require('newrelic');
}

app.use(log4js.connectLogger(log4js.getLogger("http"), {level: 'auto'}));

app.get("*", function (req, res) {
    res.send('Hell');
})

var server = app.listen(config.port, function (req, res) {
    logger.info('Listening on port ' + server.address().port);
});

module.exports = app;
