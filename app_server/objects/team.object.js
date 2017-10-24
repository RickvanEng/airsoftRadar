// function team() {
//     this.players = 'hallo';
// }

module.exports.newteam = function () {

    var team = new Object();

    team.name = 'Agoge';
    team.ID = null;
    team.players = [];
    team.inGame = false;
    

    team.addPlayer = function(player) {
        console.log("add player function");
    }

    team.removePlayer = function(player) {
        console.log("removes a player from the team");
    }
    
    team.getPlayers = function() {
        console.log("returns all players in team");
    }

    team.readyCheck = function() {
        console.log("check if each player in the team is ready");
        //return true of false;
    }

    return team;
};



// var allPlayers = [];
// var playersInQue = [];

// var matchedPlayers = [];
// var matchedPlayersObject = {
//     gameId: null,
//     player1: null,
//     player2: null
// }

// module.exports.playerOnconnect = function (playerOject) {
//     allPlayers.push(playerOject);
// }

// module.exports.playerDisconnect = function (playerOject) {
//     delete allPlayers[playerOject];
// }

// //add the player object to the que array
// module.exports.addPlayerToQue = function (playerObject) {
//     playersInQue.push(playerObject);
// }

// module.exports.matchPlayers = function (player, cb) {
//     if (playersInQue.length > 1) {

//         var players = {
//             player1: player,
//             player2: null
//         }

//         async.forEach(playersInQue, function (opponent, callback) {
//             if (opponent.socket != player.socket) {
//                 players.player2 = opponent;
//             }
//             callback();

//         }, function () {
//             //add players to matched player object
//             matchedPlayersObject.gameId = Math.random();
//             matchedPlayersObject.player1 = players.player1;
//             matchedPlayersObject.player2 = players.player2;

//             //remove player from que list
//             delete playerInQue[players.player1];
//             delete playerInQue[players.player2];

//             //return de matched players
//             cb(players);
//         });
//     }
// };