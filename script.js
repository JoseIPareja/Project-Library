let myLibrary = [];

// OBJECT BOOK CONSTRUCTOR
function bookGenerator(title, author, read) {
    this.title = title,
    this.author = author,
    this.read = read;
}

// FUNCTION TO ADD A BOOK & DISPLAY IT
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const read = document.querySelector('.checkbox');
const maincontent = document.querySelector('.maincontent');

function addBookToLibrary() {
    let book = new bookGenerator(title.value, author.value, read.checked);
    myLibrary.push(book);
    const card = document.createElement('div');
    card.classList.add('card');
    if (read.checked === true) {
        card.classList.add('yes');
    } else {
        card.classList.add('no');
    }
    card.textContent = myLibrary[myLibrary.length - 1]['title'] + ' by ' + myLibrary[myLibrary.length - 1]['author'];
    maincontent.appendChild(card);
}

document.querySelector('.addbutton').addEventListener('click', addBookToLibrary);
