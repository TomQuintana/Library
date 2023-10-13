import { Router } from "express";
import { bringAllBooks, filterBook, modifyBook, registerBook, removeBook } from "../controllers/book.controllers";

const route = Router();

route.get('/', bringAllBooks);
route.get('/filter/:parameter', filterBook);
route.post('/register', registerBook);
route.put('/modify/:bookId', modifyBook);
route.delete('/remove/:bookId', removeBook);

export default route;
