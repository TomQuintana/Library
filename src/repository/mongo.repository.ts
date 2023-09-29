import bookModel from "../models/book.model";

export class MongoRepository {

  async createBook(bookEntry: object)/* : Promise<any> */ {
    const book = await bookModel.create(bookEntry);
    return book;
  }

}
