var path = require('path');
var team = require('../objects/team.object');

var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.mainReponse = function (req, res) {
    //var team1 = team.newTeam();
    console.log('yes');
    return sendResponse(res, 200, { "status": "succes", "value": "Yesssss" });
};