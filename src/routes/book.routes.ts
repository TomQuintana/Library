import { Router } from "express";
import { registerBook } from "../controllers/book.controllers";

const route = Router();

route.post('/register', registerBook);

/**
 * @swagger
 * /api/books/create:
 *   post:
 *     summary: Created a new book 
 *     parameters:
 *       - in: body
 *         name: body
 *         description: "New Book"
 *         schema:
 *          type: object
 *          proporteis: 
 *            title:
 *              type: string
 *            author:
 *              type: string
 *          example:
 *              title: "Magos de los Dioses"
 *              author: "Graham Hancock"
 *              wasRead: by default is false
 *
 */

export default route;
