const books_form = document.getElementById("addbook_form")
const title_box = document.getElementById("title_box");
const author_box = document.getElementById("author_box");
const pages_box = document.getElementById("pages_box");
const check_read = document.getElementById("read");
const books_box = document.getElementById("books");
const form_container = document.getElementById("form_container")
const add_btn = document.getElementById("add_btn");
const body_box = document.querySelector("body");
const card_checks = document.querySelectorAll(".card_check");

add_btn.addEventListener("click",
()=>{
    form_container.style.display = "block";
}
);

// body_box.addEventListener("click",
// ()=>{
//     form_container.style.display = "none";
// }
// );

const books = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}



books_form.addEventListener("submit",
    (event) => {
        event.preventDefault();
        let title = title_box.value;
        let author = author_box.value;
        let pages = parseInt(pages_box.value);
        let read = check_read.checked;

        let newBook = new Book(title, author, pages, read);
        books.push(newBook);
        displayData();
    }
)



function displayData() {
    books_box.innerHTML = "";
    for(let i=0;i<books.length;i++)
    {
        let currentBook = books[i];
        let read_status = "Not Read";
        let read_class  = "notRead";
        if(currentBook.read===true)
        {
            read_status = "Read";
            read_class = "finishRead";
        }
        let book = `
        <div class="book">
            <h2 class="card_style">${currentBook.title}</h2>
            <h2 class="card_style">${currentBook.author}</h2>
            <h2 class="card_style">${currentBook.pages}</h2>
            <h2 class="card_check ${read_class}" value="${currentBook.read} onclick="toggle()">${read_status}</h2>
            <h2 class="card_btn">Remove</h2>
        </div>
        `;

        books_box.innerHTML+= book;

    }
}



function toggle(event) {
    console.log(event.target.parentNode.childNodes[7].value);
    // console.log(event.target.parentNode.childNodes[1].innerText);
}



















