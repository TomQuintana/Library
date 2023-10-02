import { Router } from "express";
import { bringAllBooks, filterBook, modifyBook, registerBook } from "../controllers/book.controllers";
const route = Router();
route.get('/', bringAllBooks);
route.get('/filter/:parameter', filterBook);
route.post('/register', registerBook);
route.put('/modify/:id', modifyBook);
export default route;
//# sourceMappingURL=book.routes.js.map