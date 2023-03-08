
const Player = require('../models/player')
const Training = require('../models/player')

module.exports = {
    create,
    delete: trainingDelete
}

function create(req, res) {
    Player.findById(req.params.id, function(err, player) {
        player.trainings.push(req.body)
        player.save(function(err) {
            res.redirect('/players/' + req.params.id)
        })
    })
}


function trainingDelete(req, res) {
    Player.findById(req.params.id, function(err, player) {
        let idx = player.trainings.indexOf(req.body)
        player.trainings.splice(idx,1)
        console.log(req.body)
        player.save(function(err) {
            res.redirect('/players/' + req.params.id)
        })
    })
}