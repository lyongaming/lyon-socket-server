const http = require("http");
const path = require("path");

const express = require("express");
const socketio = require("socket.io");

const Sockets = require("./sockets");

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.server = http.createServer(this.app);
        this.io = socketio(this.server, { /* config */ });
    }

    setMiddlewares() {
        // Deploy public dir
        this.app.use(express.static( path.resolve( __dirname, "../public" ) ));
    }

    configSockets() {
        new Sockets(this.io);
    }

    start() {

        this.setMiddlewares();
        this.configSockets();

        this.server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`)
        })

    }

}

module.exports = Server;