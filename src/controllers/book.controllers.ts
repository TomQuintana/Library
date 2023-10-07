import { Request, Response } from "express";
import { BookUseCase } from "../services/book.services";

const bookUseCase = new BookUseCase();

const registerBook = async (req: Request, res: Response) => {
  try {
    const newBook = await bookUseCase.createNewBook(req.body);

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
    const allBooks = await bookUseCase.getAllBooks();
    res.send({allBooks});

  } catch (error) {
    console.log(error);
  }
};

const filterBook = async (req: Request, res: Response) => {
  const bookResult = await bookUseCase.filterBookByParamenter(req.params.parameter);
  return res.send({bookResult});
};

const modifyBook = async (req: Request, res: Response) => {
  const {id} = req.params;
  const {body} = req;

  const bookResultModified = await bookUseCase.modifyBookById(id, body);
  return res.json({msg: `Book "${bookResultModified?.title}" modified`});
};


export {
  registerBook,
  bringAllBooks,
  filterBook,
  modifyBook
};
