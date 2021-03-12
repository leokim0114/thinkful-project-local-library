// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const findAuthorById = (authors, id) => {
  for(let key in authors){
    const holo = authors[key];
    const hola = holo.id;
    if(hola === id){
      return holo
    }
  }
}

const findBookById = (books, id) => {
  for(let key in books){
    const holo = books[key];
    const hola = holo.id;
    if(hola === id){
      return holo
    }
  }
}

const partitionBooksByBorrowedStatus = (books) => {
  var hol = [];
  var holu = [];
  var hoi = [holu, hol];
  books.filter(book => {
    book.borrows[0].returned ? hol.push(book) : holu.push(book)
  })
  return hoi
}

const getBorrowersForBook = (book, accounts) => {
  return book.borrows.slice(0, 10)
  .map((borrow)=>{
    const match = accounts.find(account => account.id === borrow.id); 
    return {
      ...match,
      returned: borrow.returned,
    }
  })
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
