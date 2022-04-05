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

// CONSTRUCTOR DE OBJETOS, CADA OBJETO = LIBRO
function Book(title, author, pages) {
    this.title = title,
    this.author = author,
    this.pages = pages;
}

// POP UP FUNCTION BOOK
const addbookbutton = document.querySelector('.addbookbutton');

// ARCHIVAR EN myLibrary (Cuando el usuario haga click en agregar)
function addBookToLibrary() {
    let book3 = new (Book);
}

console.log(myLibrary.length+1);

// Loop EN myLibrary, Y DISPLAY EN MAIN CONTENT (Tmb cuando el usuario haga click en agregar)
// CADA ITERACION EN UN DIV CARD NUEVO DENTRO DE MAIN CONTENT
