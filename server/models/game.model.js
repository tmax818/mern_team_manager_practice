const mongoose = require('mongoose');
Schema = mongoose.Schema;
const GameSchema = new mongoose.Schema({
    number: {
        type: Number,
    },
    players: [{
        type: Schema.Types.ObjectId,
        ref: "Player"
    }]

}, { timestamps: true });
module.exports.Game = mongoose.model('Game', GameSchema);

