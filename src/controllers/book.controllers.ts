import { Request, Response } from "express";
import { BookUseCase } from "../services/book.services";

const bookUseCase = new BookUseCase();

const registerBook = async (req: Request, res: Response) => {
  
  try {
    const book = await bookUseCase.registerBook(req.body);
    return res.send({book});

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

export {
  registerBook,
  bringAllBooks,
  filterBook
};
