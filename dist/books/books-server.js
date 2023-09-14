import express from 'express';
export default class Server {
    app;
    port;
    constructor() {
        this.app = express();
        this.port = '8000';
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo ');
        });
    }
}
//# sourceMappingURL=books-server.js.map