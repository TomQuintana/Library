import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import SwaggerUi from 'swagger-ui-express';
import morgan from 'morgan';
import { options } from '../doc/swagger';
import bookRoute from '../routes/book.routes';
import conectarDB from '../config/mongoDb';
export default class Server {
    app;
    port;
    paths;
    spect;
    constructor() {
        this.app = express();
        this.port = '3000';
        this.spect = swaggerJSDoc(options);
        this.paths = {
            book: '/api/books',
            docs: '/api/docs'
        };
        this.middlewares();
        this.conectDB();
        this.routes();
    }
    middlewares() {
        this.app.use(express.json());
        this.app.use(morgan('dev'));
        this.app.use(this.paths.docs, SwaggerUi.serve, SwaggerUi.setup(this.spect));
    }
    async conectDB() {
        await conectarDB();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en:', this.port);
        });
    }
    routes() {
        this.app.use(this.paths.book, bookRoute);
    }
}
//# sourceMappingURL=books-server.js.map