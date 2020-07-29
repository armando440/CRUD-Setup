var express = require ('express');
var router = express.Router();

router.get ('/', function (req, res){
    res.send('Cars home page')
});

module.exports = router;