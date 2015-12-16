var express = require('express');
var baseName = "/base";
var router = express.Router();
var site = require('./controllers/site');
router.get('*', site.index);
module.exports = router;
