const express = require('express');
const { dbConnect, dbDisconnect} = require('../../config/db');

class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        
        this.dbConnect();
        this.middlewares()
        this.routes();
    }

    async dbConnect(){
        await dbConnect();
    }

    middlewares() {
        this.app.use( express.json() );
        this.app.use( express.urlencoded({ extended: true }) );
    }

    routes() {
        this.app.use( '/file', require('../../routes/file'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Server running: ', `http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;
