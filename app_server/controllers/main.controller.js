var path = require('path');
var group = require('../objects/group.object');

var sendResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
}

module.exports.mainReponse = function (req, res) {
    var group1 = group.newGroup();
    console.log(group1.name);
    group1.test();
    return sendResponse(res, 200, { "status": "succes", "value": "Yesssss" });
};