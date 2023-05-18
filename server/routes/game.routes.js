const GameController = require('../controllers/game.controller');

module.exports = function(app){

    app.post('/api/games', GameController.createGame);
    app.get('/api/games', GameController.getAllGames);
    app.get('/api/games/:id', GameController.getOneGame);
    app.delete('/api/games/:id', GameController.deleteGame);

}