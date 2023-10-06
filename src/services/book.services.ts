import { MongoRepository } from "../repository/mongo.repository";

export class BookUseCase {

  mongoRepository = new MongoRepository();

  public registerBook = async({title, author, wasRead}: {title: string, author: string, wasRead?: boolean}) => {
    const verifyIfBookExist = await this.isBookExisted(title);

    if(verifyIfBookExist) {
      return new Error('The book is already saved');
    }

    const newBook = {
      title,
      author,
      wasRead
    };

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
    let isBookexist = false;

    const book = await this.searchBookByTittle(tittle);

    book ? isBookexist = true : isBookexist = false;
    
    return isBookexist;
  };

  public filterBookByParamenter = async (filterParameter: string) => {
    const bookResult = await this.mongoRepository.SearchBookByStatus(filterParameter);
    return bookResult;
  };

  public modifyBookById = async (id: string, data: object) => {
    const bookModified = await this.mongoRepository.modifyBookStatus(id, data);
    return bookModified;
  };

}
