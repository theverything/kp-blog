var ghost = require('ghost');
var config = require('./config');

ghost(config).then(function (ghostServer) {
    ghostServer.start();
});
