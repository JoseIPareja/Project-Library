const book1 = {
    title: "Harry Potter",
    author: "JK Rowling",
    pages: 350,
}

const book2 = {
    title: "Naruto",
    author: "Kishimoto",
    pages: 40,
}

let myLibrary = [book1, book2];

// OBJECT BOOK CONSTRUCTOR
function bookGenerator(title, author) {
    this.title = title,
    this.author = author;
}

// FUNCTION FOR ADDING A BOOK TO ARRAY

const title = document.querySelector('.title');
const author = document.querySelector('.author');

function addBookToLibrary() {
    let book = new bookGenerator(title.value, author.value);
    myLibrary.push(book);
    console.log(myLibrary);
}

document.querySelector('.addbutton').addEventListener('click', addBookToLibrary);
console.log(myLibrary);

// Loop myLibrary & Display on maincontent

