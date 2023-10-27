import { Request, Response } from "express";
import { BookUseCase } from "../services/Book-Service/bookUseCase";

const bookUseCase = new BookUseCase();

const registerBook = async (req: Request, res: Response) => {
  const bookData = req.body;


  try {
    const newBook = await bookUseCase.createNewBook(bookData);

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


const bringAllBooks = async (req: Request, res: Response) => {
  
  try {
    const booksInformation = await bookUseCase.getAllBooks();
    res.send({booksInformation});

  } catch (error) {
    console.log(error);
  }
};

const filterBook = async (req: Request, res: Response) => {
  const bookResult = await bookUseCase.filterBookByParamenter(req.params.parameter);
  return res.send({bookResult});
};

const modifyBook = async (req: Request, res: Response) => {
  const {bookId} = req.params;
  const {body} = req;
  

  const bookResultModified = await bookUseCase.modifyBookById(bookId, body);

  if (!bookResultModified) {
    return res.status(400).json({
      msg: "The past id does not correspond to any book"
    });
  }

  return res.json({bookResultModified});
};

const removeBook = async (req:Request, res: Response) => {
  const { bookId } = req.params;
  const bookRemove = await bookUseCase.removeBookById(bookId);

  if (!bookRemove) {
    return res.status(400).json({
      msg: "The past id does not correspond to any book"
    });
  }

  return res.json({bookRemove});

};


export {
  registerBook,
  bringAllBooks,
  filterBook,
  modifyBook,
  removeBook
};
