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
 *            wasRead:
 *              type: boolean
 *            bookCover:
 *              type: string
 *          example:
 *              title: "Magos de los Dioses"
 *              author: "Graham Hancock"
 *              wasRead: by default is false
 *              bookCover: by default a standart img or img that user pass
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
 *     summary: Modify necessary fields of books, like title, author, was Read and book Cover
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
