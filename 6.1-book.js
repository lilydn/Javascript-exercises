const book = {
    name: 'The Cool Duck',
    publishYear: '1990',
    author: 'John Smith',
    numOfPages: 185,
    genre: 'Philosophy', 
}

const bookDescription = (book) => `The book "${book.name}" was written by ${book.author} in the year ${book.publishYear} and it has ${book.numOfPages} pages`;

console.log(bookDescription(book));