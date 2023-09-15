import express, {Application} from 'express'

export default class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = '8000';
  }

  listen() {
    this.app.listen( this.port, () => {
      console.log('Servidor corriendo ');
    });
  }
}
