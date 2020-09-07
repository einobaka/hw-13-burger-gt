const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data)=> {
        const burg = {
            burger: data
        }
        console.log(burg);
        res.render('index', burg)
    })

});

router.post('/api/burgers', (req, res) => {


});

router.put('/api/burgers/:id', (req, res) => {


});


module.exports = router;