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

export {
  registerBook
};
