import { MongoRepository } from "../repository/mongo.repository";
export class BookUseCase {
    mongoRepository = new MongoRepository();
    registerBook = async ({ title, author, wasRead }) => {
        const verifyIfBookExist = await this.isBookExisted(title);
        if (verifyIfBookExist) {
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
    getAllBooks = async () => {
        const allBooks = await this.mongoRepository.bringAllBooks();
        return allBooks;
    };
    searchBookByTittle = async (tittle) => {
        const resultBook = await this.mongoRepository.findBookByTitle(tittle);
        return resultBook;
    };
    isBookExisted = async (tittle) => {
        const book = await this.searchBookByTittle(tittle);
        return book;
    };
    filterBookByParamenter = async (filterParameter) => {
        const bookResult = await this.mongoRepository.SearchBookByStatus(filterParameter);
        return bookResult;
    };
    modifyBookById = async (id, data) => {
        const bookModified = await this.mongoRepository.modifyBookStatus(id, data);
        return bookModified;
    };
}
//# sourceMappingURL=book.services.js.map