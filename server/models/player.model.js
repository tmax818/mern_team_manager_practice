const mongoose = require('mongoose');
Schema = mongoose.Schema
const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            "Name is required"
        ],
        minLength: [3, 'Name should be at least three characters']
    },
    position: {
        type: String,
        required: [false]
    },
    status: {
        type: String
    },
    game: {
        type: Schema.Types.ObjectId,
        ref: "Game"
    }
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

