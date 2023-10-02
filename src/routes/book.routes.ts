import { Router } from "express";
import { bringAllBooks, filterBook, registerBook } from "../controllers/book.controllers";

const route = Router();

route.get('/', bringAllBooks);
route.get('/filter/:parameter', filterBook); //TODO: document endpoint
route.post('/register', registerBook);

export default route;
