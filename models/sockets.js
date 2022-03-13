class Sockets {
    
    constructor(io) {
        this.io = io;
        this.setSocketEvents();
    }

    setSocketEvents() {
        this.io.on("connection", socket => {

            socket.on("to-server", data => {
                console.log(data);
                this.io.emit("from-server", data);
            });

        });
    }

}

module.exports = Sockets;