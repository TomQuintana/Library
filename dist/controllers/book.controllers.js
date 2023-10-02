import { BookUseCase } from "../services/book.services";
const bookUseCase = new BookUseCase();
const registerBook = async (req, res) => {
    try {
        const book = await bookUseCase.registerBook(req.body);
        return res.send({ book });
    }
    catch (error) {
        console.log(error);
    }
};
const bringAllBooks = async (req, res) => {
    try {
        const allBooks = await bookUseCase.getAllBooks();
        res.send({ allBooks });
    }
    catch (error) {
        console.log(error);
    }
};
const filterBook = async (req, res) => {
    const bookResult = await bookUseCase.filterBookByParamenter(req.params.parameter);
    return res.send({ bookResult });
};
const modifyBook = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const bookResultModified = await bookUseCase.modifyBookById(id, body);
    return res.json({ msg: `Book "${bookResultModified?.title}" modified` });
};
export { registerBook, bringAllBooks, filterBook, modifyBook };
//# sourceMappingURL=book.controllers.js.map