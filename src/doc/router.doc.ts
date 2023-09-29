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
 * /api/books/:
 *  get:
 *    summary: Obtain all books
 *
 */
