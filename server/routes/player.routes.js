const PlayerController = require('../controllers/player.controller');

module.exports = function(app){

    app.post('/api/players', PlayerController.createPlayer);
    app.get('/api/players', PlayerController.getAllPlayers);
    app.patch('/api/players/:id', PlayerController.updatePlayer); //update

    app.delete('/api/players/:id', PlayerController.deletePlayer);

}