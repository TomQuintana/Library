import { MongoRepository } from "../repository/mongo.repository";
import { DataNeededForBook } from "./interfaces";

export class BookUseCase {

  mongoRepository = new MongoRepository();

  public createNewBook = async (bookData: DataNeededForBook) => {
    const verifyIfBookExist = await this.isBookExisted(bookData.title);

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

  private searchBookByTittle = async (tittle: string) => {
    const resultBook = await this.mongoRepository.findBookByTitle(tittle);
    return resultBook;
  };

  private isBookExisted = async(tittle: string) => {
    let isBookExist = false;

    const book = await this.searchBookByTittle(tittle);

    book === null ? isBookExist = true: isBookExist = false;
    
    return isBookExist;
  };

  private searchBookId = async (bookId: string) => {
    const bookSearchedById = await this.mongoRepository.searchBookById(bookId);
    if(bookSearchedById === null) {
      return false;
    }
    return true;
  };

  public filterBookByParamenter = async (filterParameter: string) => {
    const bookResult = await this.mongoRepository.SearchBookByStatus(filterParameter);
    return bookResult;
  };

  public modifyBookById = async (id: string, data: object) => {
    const verifyBookByIdFounded = await this.searchBookId(id);
    
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

  //TODO: change any
  private generateBookForDb = (newBookData) => {

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
