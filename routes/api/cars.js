const express = require ('express');
const router = express.Router();
const{
    readCars
} = require('../../data/cars');

router.get ('/', async function (req, res){
     const data = await readCars();
    res.send(data)
});

module.exports = router;