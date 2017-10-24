module.exports.newPlayer = function () {

    var player = new Object();

    player.playerID = null;
    player.socket = null;
    player.socketGroup = null;
    player.name = null;
    player.joinedTeamID = null;
    player.isReady = false;
    player.coordinates = {
        'latitude': null,
        'longitude':null
    }

    return Player;
};