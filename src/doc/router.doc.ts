/**
 * @swagger
 * /api/books/create:
 *   post:
 *     summary: Created a new book 
 *     tags:
 *      - Book
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
 *    tags:
 *     - Book
 *
 * /api/books/filter/{wasRead}:
 *  get:
 *    summary: Filter books by status of was read
 *    tags:
 *    - Book
 *
 * /api/books/modify/{id}:
 *   put:
 *     summary: Modify a books status
 *     tags: 
 *      - Book
 *     parameters:
 *       - in: body
 *         name: body
 *         description: "Modify status of wasRead"
 *         schema:
 *          type: object
 *          proporteis: 
 *            title:
 *              type: string
 *            author:
 *              type: string
 *          example:
 *              wasRead: true | false
 *              
 */
