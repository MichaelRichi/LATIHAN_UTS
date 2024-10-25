var express = require('express');
var router = express.Router();

var mainController = require("../controllers/main");
router.get('/kontak', mainController.kontak);

/* GET home page. */
router.get('/', mainController.index);

module.exports = router;
