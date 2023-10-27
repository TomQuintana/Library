import { MongoRepository } from '../../repository/mongo.repository';

export class BookHelper {
  mongoRepository = new MongoRepository();

  public async isBookExisted(title: string): Promise<boolean> {
    const existingBook = await this.mongoRepository.findBookByTitle(title);
    return !!existingBook; // Return true if a book with the given title exists, false otherwise
  }

  public searchBookByTittle = async (tittle: string) => {
    const resultBook = await this.mongoRepository.findBookByTitle(tittle);
    return resultBook;
  };

  public searchBookId = async (bookId: string) => {
    const bookSearchedById = await this.mongoRepository.searchBookById(bookId);
    if(bookSearchedById === null) {
      return false;
    }
    return true;
  };

// private isBookExisted = async(tittle: string) => {
//     let isBookExist = false;
//
//     const book = await this.searchBookByTittle(tittle);
//
//     book === null ? isBookExist = true: isBookExist = false;
//     
//     return isBookExist;
//   };
}
