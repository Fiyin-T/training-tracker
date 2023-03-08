var express = require('express');
var router = express.Router();

const playersCtrl = require('../controllers/players')

router.get('/', playersCtrl.index)
router.get('/new', playersCtrl.new)
router.get('/:id', playersCtrl.show)

router.post('/', playersCtrl.create)

router.get('/:id/edit', playersCtrl.edit)
router.put('/:id/update', playersCtrl.update)


module.exports = router;
