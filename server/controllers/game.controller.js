const { Game } = require('../models/game.model');
const { Player } = require('../models/player.model');
const {res} = require("express");

// CREATE
module.exports.createGame = (req, res) => {
    const { number, players } = req.body;
    Game.create({
     number,players
    })
        .then(game => res.json(game))
        .catch(err => res.status(400).json(err));
}

//READ ALL
module.exports.getAllGames = (req, res) => {
    Game.find({}).populate("players")
        .then(games => res.json(games))
        .catch(err => res.json(err))
}

module.exports.getOneGame = (req, res) => {
    Game.findOne({_id: req.params.id}).populate("players")
        .then(game => res.json(game))
        .catch(err => res.json(err))
}

module.exports.deleteGame = (req, res) => {
    Game.deleteOne({_id: req.params.id})
        .then(deleteConfirmation =>res.json(deleteConfirmation))
        .catch(err =>res.json(err))
}