import { Router } from "express";
import { registerBook } from "../controllers/book.controllers";

const route = Router();

route.post('/register', registerBook);

export default route;
