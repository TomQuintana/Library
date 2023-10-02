import bookModel from "../models/book.model";
export class MongoRepository {
    async createBook(bookEntry) {
        const book = await bookModel.create(bookEntry);
        return book;
    }
    async bringAllBooks() {
        const allBooks = await bookModel.find();
        return allBooks;
    }
    async findBookByTitle(title) {
        const searchedBook = await bookModel.findOne({ title });
        return searchedBook;
    }
    async SearchBookByStatus(status) {
        const bookByStatus = await bookModel.find({ wasRead: status });
        return bookByStatus;
    }
    async modifyBookStatus(id, data) {
        const bookModified = await bookModel.findByIdAndUpdate(id, data);
        return bookModified;
    }
}
//# sourceMappingURL=mongo.repository.js.map