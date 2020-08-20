
var library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

// a JavaScript function that receives the library object as an
// input and displays the books that can be read (the reading status is true).
// Log the book name, author name and reading status 

booksCanBeRead(library);

function booksCanBeRead(library) {
    const result = library.filter(book => book.readingStatus); 
    //console.log(result);
    console.log(`- - -`);
    result.forEach(book => {
        console.log(`book name: ${book.author}`);
        console.log(`author: ${book.title}`);
        console.log(`reading status: ${book.readingStatus}`);
        console.log(`- - -`);
    }); 
}

