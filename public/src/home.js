// Note: Please do not change the name of the functions. The tests use those names to validate your code.

const getTotalBooksCount = books => {

  return books.reduce((acc, book)=>{
    if(book !== undefined){
      acc += 1;
    }
    return acc
  }, 0)
}

const getTotalAccountsCount = accounts => {
  let total = 0;
  accounts.forEach(account => {
    if(account !== undefined){
      total += 1;
    }
  }); 
  return total;
}

const getBooksBorrowedCount = books => {
  let total = 0;
  books.forEach(book => {
    book.borrows.forEach(borrow => {
      if(borrow.returned === false){
        total += 1;
      }
    })
  });
  return total;
}

function getMostCommonGenres(books) {

  const genre = books.map(what => what.genre)
  
  let huh = [];
  let count = {};
  
  genre.forEach((i) => { count[i] = (count[i] || 0) + 1})
  
  for (let key in count) {
    huh.push({
      name: key,
      count: count[key]
    })
  }
  huh.sort((a, b) => b.count - a.count)
  return huh.slice(0, 5)
  
}

const getMostPopularBooks = books => {
  const result = books.map((book)=>{
    let fo = {}
    fo.name = book.title
    fo.count = book.borrows.length
    return fo
  })  
  result.sort((a,b)=> b.count-a.count);
  return result.slice(0, 5)
}

const getMostPopularAuthors = (books, authors) => {

  let ha = []
  for(let i = 0; i < authors.length; i++){
    let ho = {}
    ho.name = `${authors[i].name.first} ${authors[i].name.last}`
    for(let j = 0; j < books.length; j++){
      if(books[j].authorId === authors[i].id){
        ho.count = books[j].borrows.length;
      }
    }
    ha.push(ho)
  }
  ha.sort((a,b)=>b.count-a.count)
  return ha.slice(0,5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
