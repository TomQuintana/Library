import { Router } from "express";
import { BookMongoRepository } from "../repository/mongorepository";
import { BookServiceUseCase } from "../../aplicattion/bookServiceUseCase";
import { BookController } from "../controllers/book.controllers";

const route = Router();

const bookRepo = new BookMongoRepository();
//const bookRepo = new BookSqlRepository()

const bookServiceUseCase = new BookServiceUseCase(bookRepo);
const bookCtrl = new BookController(bookServiceUseCase);

route.get('/', bookCtrl.bringAllBooks);
route.post('/create', bookCtrl.createNewBook);
route.get('/filter/:parameter', bookCtrl.filterBook);
route.put('/modify/:bookId', bookCtrl.modifyBook);
route.delete('/remove/:bookId', bookCtrl.removeBook);

export default route;
