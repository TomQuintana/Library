export interface BookRepository {
  listOfBooks();
  createBook(bookEntry: object);
  findBookByTitle(title: string);
  searchBookById(id: string);
  searchBookByStatus(filterParameter: string);
  modifyBookStatus(id: string, data: object);
  removeBook(id: string);
}

//TODO: definir return
