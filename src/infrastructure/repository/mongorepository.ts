import bookModel from "../models/book.model";
import { BookRepository } from "../../domain/book.repository";

export class BookMongoRepository implements BookRepository {

  async createBook(bookEntry: object) {
    const book = await bookModel.create(bookEntry);
    return book;
  }

  async listOfBooks() {
    const readBooksStatus = {wasRead: true};
    const unReadBooksStatus = {wasRead: false};

    const readBooksPromise = bookModel.countDocuments(readBooksStatus);
    const unReadBooksPromise = bookModel.countDocuments(unReadBooksStatus);
    const allBooksPromise = bookModel.find();

    const [readBooks, unReadBooks, allBooks] = await Promise.all([readBooksPromise, unReadBooksPromise , allBooksPromise]);

    return {
      readBooks,
      unReadBooks,
      allBooks
    };
  }

  async findBookByTitle(title: string) {
    const searchedBook = await bookModel.findOne({title});
    return searchedBook;
  }

  async searchBookByStatus(status: string) {
    const bookByStatus = await bookModel.find({wasRead: status});
    return bookByStatus;
  }

  async searchBookById(bookId: string) {
    const bookResultById = await bookModel.findById(bookId);
    return bookResultById;
  }

  async modifyBookStatus(id: string, data: object) {
    const bookModified= await bookModel.findByIdAndUpdate(id, data);
    return bookModified;
  }

  async removeBook(id: string) {
    const bookDeleted = await bookModel.findByIdAndDelete(id);
    return bookDeleted;
  }
}
