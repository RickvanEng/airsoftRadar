

module.exports.updateTeams = function(teams) {
    teams[0].socket.emit('team', teams[0].teamName);
};