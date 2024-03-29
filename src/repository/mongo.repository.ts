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

  async SearchBookByStatus(status: string) {
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
