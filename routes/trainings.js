var express = require('express');
var router = express.Router();

const trainingsCtrl = require('../controllers/trainings')

router.get('/trainings/:id/delete', trainingsCtrl.delete)

router.post('/players/:id/trainings', trainingsCtrl.create)


module.exports = router