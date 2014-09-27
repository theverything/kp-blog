var path = require('path');
var ghost = require('ghost');

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    ghostServer.start();
});


docker build -t nodeapp .
docker run -it -e NODE_ENV=production -p 80:2368 --link kpdb:kpdb --rm nodeapp /bin/bash
