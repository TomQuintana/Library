import { BookRepository } from "../domain/book.repository";
import { DataNeededForBook } from "../domain/book.interface";

export class BookServiceUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  public getAllBooks = async() => {
    const allBooks = await this.bookRepository.listOfBooks();
    return allBooks;
  };

  public createBook = async (bookData : DataNeededForBook ) => {
    const verifyIfBookExist = await this.isBookExisted(bookData.title);

    if(!verifyIfBookExist) {
      return verifyIfBookExist;
    }

    const newBook = this.generateBookForDb(bookData);

    const bookCreated = await this.bookRepository.createBook(newBook);
    return bookCreated;
  };

  public filterBookByParamenter = async (filterParameter: string) => {
    const bookResult = await this.bookRepository.searchBookByStatus(filterParameter);
    return bookResult;
  };

  public modifyBookById = async (id: string, data: object) => {
    const verifyBookByIdFounded = await this.searchBookId(id);

    if(!verifyBookByIdFounded) {
      return verifyBookByIdFounded;
    }

    try {
      const bookModified = await this.bookRepository.modifyBookStatus(id, data);
      return bookModified;  

    } catch (error) {
      console.log(error);
    }
  };

  public removeBookById = async (id: string) => {
    const bookRemoved = await this.bookRepository.removeBook(id);
    return bookRemoved;
  };

  private async isBookExisted(title: string): Promise<boolean> {
    const existingBook = await this.bookRepository.findBookByTitle(title);
    return !!existingBook; // Return true if a book with the given title exists, false otherwise
  }

  private searchBookByTittle = async (tittle: string) => {
    const resultBook = await this.bookRepository.findBookByTitle(tittle);
    return resultBook;
  };

  private searchBookId = async (bookId: string) => {
    const bookSearchedById = await this.bookRepository.searchBookById(bookId);
    if(bookSearchedById === null) {
      return false;
    }
    return true;
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


  


  //
  
  //
  
}
