import { MongoRepository } from "../repository/mongo.repository";

export class BookUseCase {

  mongoRepository = new MongoRepository();
  
  public registerBook = async({title, author, wasRead}: {title: string, author: string, wasRead?: boolean}) => {

    const verifyIfBookExist = await this.isBookExisted(title);

    if(verifyIfBookExist) {
      throw new Error('The book is already saved');
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
    const book = await this.searchBookByTittle(tittle);
    return book;
  };

}
