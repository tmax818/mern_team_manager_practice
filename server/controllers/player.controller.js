const { Player } = require('../models/player.model');
const { Game } = require('../models/game.model');
const {res, request} = require("express");

// CREATE
module.exports.createPlayer = (req, res) => {
    const { name, position, status, game } = req.body;
    Player.create({
        name,
        position,
        status,
        game
    })
        .then(player => {
            Game.findOneAndUpdate({_id: game._id}, {$push: {players: player._id}})
                .then(res => console.log(res))
            res.json(player)
        })
        .catch(err => res.status(400).json(err));
}

//READ ALL
module.exports.getAllPlayers = (req, res) => {
    Player.find({})
        .then(players => res.json(players))
        .catch(err => res.json(err))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then(deleteConfirmation =>res.json(deleteConfirmation))
        .catch(err =>res.json(err))
}

module.exports.updatePlayer = (req, res) => {

    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true} )
        .then(updatePlayer => res.json(updatePlayer))
        .catch(err => res.json(err))
}