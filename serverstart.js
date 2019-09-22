
/*
    Creamos y levantamos un servidor de faye que escucha en el puerto 8000
 */
let http = require('http'),
    faye = require('faye');

let server = http.createServer(),
    bayeux = new faye.NodeAdapter({mount: '/'});

bayeux.attach(server);
server.listen(8000);