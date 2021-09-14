const express = require('express');

const model = require('../Models/index.js');

const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).json({
        statusCode: 200,
        message: "apke laude lagne se bach gaye"
    })
});

module.exports = router;