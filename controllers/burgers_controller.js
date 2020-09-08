const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burg = {
            burger: data
        }
        console.log(burg);
        res.render('index', burg)
    })
});

router.post('/api/burgers', (req, res) => {
    // console.log(req.body)
    burger.insertOne(`burger_name, devoured`, [`${req.body.name}', '${req.body.devoured}`], (res) => {
        res.json(console.log(res));
    })
    // console.log(res)
});

router.put('/api/burgers/:id', (req, res) => {


});


module.exports = router;