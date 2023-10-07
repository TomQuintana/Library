import { MongoRepository } from "../repository/mongo.repository";

export class BookUseCase {

  mongoRepository = new MongoRepository();

  public createNewBook= async({title, author, wasRead}: {title: string, author: string, wasRead?: boolean}) => {
    const verifyIfBookExist = await this.isBookExisted(title);

    if(!verifyIfBookExist) {
      return verifyIfBookExist;
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
    let isBookExist = false;

    const book = await this.searchBookByTittle(tittle);

    book === null ? isBookExist = true: isBookExist = false;
    
    return isBookExist;
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
