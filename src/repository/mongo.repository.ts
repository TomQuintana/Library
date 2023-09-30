import bookModel from "../models/book.model";

export class MongoRepository {

  async createBook(bookEntry: object)/* : Promise<any> */ {
    const book = await bookModel.create(bookEntry);
    return book;
  }

  async bringAllBooks() {
    const allBooks = await bookModel.find();
    return allBooks;
  }

  async findBookByTitle(title: string) {
    const searchedBook = await bookModel.findOne({title});
    return searchedBook;
  }
}
