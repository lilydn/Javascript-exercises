// create 2 book objects with properties: name, author, year.
const book1 = {
    name: 'The Cool Duck',
    publishYear: '1990',
    author: 'John Smith',
};

const book2 = {
    name: 'The Very Cool Turtle',
    publishYear: '1958',
    author: 'John Wane',
};

// create an empty object bookUtils
const bookUtils = {};

// add to to the bookUtils object a function getFirstPublished
// that recieves 2 books and returns the book with the smaller year
bookUtils.getFirstPublished = function(book1,book2) {
    return book1.publishYear <= book2.publishYear 
    ? book1
    : book2;
};


// add to to the bookUtils object a function setNewEdition
// that recieves a book and an edition year and sets a new property latestEdition with the edition year, or updates an existing one.
bookUtils.setNewEdition = function(book, year) {
    book.latestEdition = year;
};

// add to to the bookUtils object a setLanguage function, 
// that recieves a book and a language and sets a new property language 
// with the language, or updates an existing one.
bookUtils.setLanguage = function(book, language) {
    book.language = language;
};

// add to to the bookUtils object a setTranslation function, that recieves a
// book a language and a translator, and sets a new property of translation,
// which is an object that contains the translator and the language.
bookUtils.setTranslation = function(book, language, translator) {
    book.translation = {
        translator: translator,
        language: language,
    };
};

// add to to the bookUtils object a setPublisher function, that recieves a book
// a name and a location, and sets a new property named publisher, which is an
// object that contains the name and location.
bookUtils.setPublisher = function(book, name, location) {
    book.publisher = {
        name: name,
        location: location,
    };  
};


// add to to the bookUtils object a function isSamePublisher, that recieves 2
// books and checks if the publisher name and location are identical in the 2
// books.
bookUtils.isSamePublisher = function(book1, book2) {
    book1.publisher.name === book2.publisher.name &&
    book1.publisher.location === book2.publisher.location;
}

