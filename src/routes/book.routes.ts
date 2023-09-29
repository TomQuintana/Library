import { Router } from "express";
import { bringAllBooks, registerBook } from "../controllers/book.controllers";

const route = Router();

route.post('/register', registerBook);
route.get('/', bringAllBooks);

export default route;
