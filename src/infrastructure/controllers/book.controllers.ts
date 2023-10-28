import { Request, Response } from "express";
import { BookServiceUseCase } from "../../aplicattion/bookServiceUseCase";

export class BookController {
  constructor(private bookServiceUseCase: BookServiceUseCase) {
    this.createNewBook = this.createNewBook.bind(this);
    this.bringAllBooks = this.bringAllBooks.bind(this);
    this.filterBook = this.filterBook.bind(this);
  }

  public bringAllBooks = async (req: Request, res: Response) => {

    try {
      const booksInformation = await this.bookServiceUseCase.getAllBooks();
      res.send({booksInformation});

    } catch (error) {
      console.log(error);
    }
  };

  public createNewBook = async (req: Request, res: Response) => {
    const bookData = req.body;

    try {
      const newBook = await this.bookServiceUseCase.createBook(bookData);

      if (!newBook) {
        return res.status(400).json({
          msg: "The book is already saved"
        });
      }

      return res.send({newBook});

    } catch (error) {
      console.log(error);
    }
  };

  public filterBook = async (req: Request, res: Response) => {
    const bookResult = await this.bookServiceUseCase.filterBookByParamenter(req.params.parameter);
    return res.send({bookResult});
  };

  public modifyBook = async (req: Request, res: Response) => {
    const {bookId} = req.params;
    const {body} = req;

    const bookResultModified = await this.bookServiceUseCase.modifyBookById(bookId, body);

    if (!bookResultModified) {
      return res.status(400).json({
        msg: "The past id does not correspond to any book"
      });
    }

    return res.json({bookResultModified});
  };

  public removeBook = async (req:Request, res: Response) => {
    const { bookId } = req.params;
    const bookRemove = await this.bookServiceUseCase.removeBookById(bookId);

    if (!bookRemove) {
      return res.status(400).json({
        msg: "The past id does not correspond to any book"
      });
    }

    return res.json({bookRemove});

  };

}


//

//

//
//
// export {
//   registerBook,
//   bringAllBooks,
//   filterBook,
//   modifyBook,
//   removeBook
// };
