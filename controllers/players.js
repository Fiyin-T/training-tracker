
const Player = require('../models/player')

module.exports = {
    index,
    show,
    new: newPlayer,
    create,
    edit,
    update
}

function index(req, res) {
    Player.find({}, function(err, players) {
        res.render('players/index', { players })
    })
}

function show(req, res) {
    Player.findById(req.params.id, function(err, player) {
        res.render('players/show', { player })
    })
}

function newPlayer(req, res) {
    res.render('players/new')
}

function create(req, res) {
    const player = new Player(req.body)
    player.save(function(err) {
        if (err) {
            return res.redirect('players/new')
        }
    })
    console.log(player)
    res.redirect('/players')
}

function edit(req, res) {
    Player.findById(req.params.id, function(err, player) {
        console.log(req.body)
        res.render('players/edit', { player })
    })
}

function update(req, res) {
    Player.findByIdAndUpdate(req.params.id, req.body, function(err, player)  {
        player.save(function(err) {
            console.log(req.body)
        })
        res.redirect('/players/' + req.params.id)
    })
}