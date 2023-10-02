import dotenv from 'dotenv';
import Server from './server/books-server';
dotenv.config();
const server = new Server();
server.listen();
//# sourceMappingURL=books-app.js.map