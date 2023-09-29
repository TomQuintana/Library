import express, {Application} from 'express';
import bookRoute from '../routes/book.routes';
import conectarDB from '../config/mongoDb';

export default class Server {
  private app: Application;
  private port: string;
  paths:{ [key: string]: string };

  constructor() {
    this.app = express();
    this.port = '3000';

    this.paths = {
      book: '/api/books'
    };

    this.middlewares();
    this.conectDB();
    this.routes();
  }

  middlewares() {
    this.app.use( express.json() );
  }

  async conectDB() {
    await conectarDB();
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo ');
    });
  }

  routes() {
    this.app.use(this.paths.book, bookRoute);
  }

}
