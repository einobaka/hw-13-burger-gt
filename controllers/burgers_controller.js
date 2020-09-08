const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        const burg = {
            burger: data
        }
        // console.log(burg);
        res.render('index', burg)
    })
});

router.post('/api/burgers', (req, res) => {
    // console.log(req.body)
    burger.insertOne(`burger_name, devoured`, [`${req.body.name}', '${req.body.devoured}`], (res) => {
        // console.log(res);
    })
});

router.put('/api/burgers/:id', (req, res) => {

    const burgID = req.params.id;
    const burgStatus = req.body.devoured;
    burger.updateOne(burgID, burgStatus, (res) => {
        // console.log(res);
    });
});

module.exports = router;