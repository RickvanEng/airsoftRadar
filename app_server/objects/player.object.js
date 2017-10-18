module.exports.newPlayerObject = function () {

    var player = new Object();

    player.playerId = null;
    player.socket = null;
    player.socketGroup = null;
    player.name = null;
    player.isReady = false;
    player.location = null;

    return Player;
};