import { MongoRepository } from "../repository/mongo.repository";

export class BookUseCase {

  mongoRepository = new MongoRepository();
  
  public registerBook = async({title, author}: {title: string, author: string}) => {
    const newBook = {
      title,
      author
    };
    const bookCreated = await this.mongoRepository.createBook(newBook);
    return bookCreated;
  };

  public getAllBooks = async() => {
    const allBooks = await this.mongoRepository.bringAllBooks();
    return allBooks;
  };

}
