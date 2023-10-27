import { MongoRepository } from "../../repository/mongo.repository";
import { BookHelper } from "../helpers/bookHelper";
import { DataNeededForBook } from "../interfaces";

export class BookUseCase {

  mongoRepository = new MongoRepository();
  bookHelper = new BookHelper();

  public createNewBook = async (bookData: DataNeededForBook) => {
    const verifyIfBookExist = await this.bookHelper.isBookExisted(bookData.title);

    if(!verifyIfBookExist) {
      return verifyIfBookExist;
    }

    const newBook = this.generateBookForDb(bookData);

    const bookCreated = await this.mongoRepository.createBook(newBook);
    return bookCreated;
  };

  public getAllBooks = async() => {
    const allBooks = await this.mongoRepository.bringAllBooks();
    return allBooks;
  };

  public filterBookByParamenter = async (filterParameter: string) => {
    const bookResult = await this.mongoRepository.SearchBookByStatus(filterParameter);
    return bookResult;
  };

  public modifyBookById = async (id: string, data: object) => {
    const verifyBookByIdFounded = await this.bookHelper.searchBookId(id);
    
    if(!verifyBookByIdFounded) {
      return verifyBookByIdFounded;
    }

    try {
      const bookModified = await this.mongoRepository.modifyBookStatus(id, data);
      return bookModified;  

    } catch (error) {
      console.log(error);
    }
  };

  public removeBookById = async (id: string) => {
    const bookRemoved = await this.mongoRepository.removeBook(id);
    return bookRemoved;
  };

  private generateBookForDb = (newBookData: DataNeededForBook) => {

    const book = {
      title: newBookData.title,
      author: newBookData.author,
      wasRead: newBookData.wasRead,
      review: newBookData.review,
      bookCover: newBookData.bookCover,
      notes: newBookData.notes
    };

    return book;
  };

}
