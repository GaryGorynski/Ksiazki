
let authors = [];
let genres = [];
let booklist = [];


class Author  {
    constructor(authorfname, authorlname, authorid) {
    this.authorfname = authorfname;
    this.authorlname = authorlname;
    this.authorid = authorid;
}

  get authorFullName () {
    return `${this.authorfname} ${this.authorlname}`;
  }
}

class Genre {
    constructor(genre, genreid) {
        this.genre = genre;
        this.genreid = genreid;
    }
}
class Book {
  
     constructor(title, bookid, released, authorid, genre){
        this.title = title;
        this.bookid = bookid;
        this.released = released; 
        this.authorid = authorid;
        this.genre = genre;
    
       
    
        
    }
}
class UI {
   addAuthor() {
        const authorcreator = document.getElementById('book-creator__author');
        const newOption = document.createElement('option');
        newOption.value = authors[authors.length - 1].authorid;
        newOption.innerHTML = authors[authors.length - 1].authorFullName;
        // newOption.innerHTML = `<option value="${authors[authors.length-1].authorid}">${authors[authors.length-1].authorlname}</option>`;
      authorcreator.appendChild(newOption);             
    }

   addGenre() {
      const genrecreator= document.getElementById('book-creator__genre');
      const newOption = document.createElement('option');
      newOption.innerHTML = `<option value="${genres[genres.length-1].genreid}">${genres[genres.length-1].genre}</option>`;
      genrecreator.appendChild(newOption);
   }

  clearFields() {
        const title = document.getElementById('title').value = '';
        const bookid = document.getElementById('bookid').value = '';
        const released = document.getElementById('released').value = '';
    }
    addBook(book){
      const bookAuthor = authors.find(author => author.authorid === book.authorid);
        const list = document.getElementById('table__body');
        const row = document.createElement('tr'); 
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.bookid}</td>
        <td>${book.released}</td>
        <td>${bookAuthor.authorfname}</td>
        <td>${bookAuthor.authorlname}</td>
        <td>${book.authorid}</td>
        <td>${book.genre}</td>
        <td>${book.genreid}</td>
        <td><a href="" class="delete">X</a></td>
        `;
        list.appendChild(row);         
    }
}




//submit author 
document.getElementById('author-form').addEventListener('submit', function(e){
    const authorfname = document.getElementById('authorfname').value;
    const authorlname = document.getElementById('authorlname').value;
    const authorid = document.getElementById('authorid').value;

    const author = new Author(authorfname, authorlname, authorid);
    const ui = new UI();
 
    authors.push(author);
    ui.addAuthor();
    e.preventDefault();

    

})

//submit genre
document.getElementById('genre-form').addEventListener('submit', function(e){
    const genre = document.getElementById('genre').value;
    const genreid = document.getElementById('genreid').value;

    const genred  = new Genre(genre, genreid);
    const ui = new UI();
  genres.push(genred);
  ui.addGenre();
    e.preventDefault();
})


// Book create
document.getElementById('book-creator').addEventListener('submit', function(e) {
  e.preventDefault();
  console.log({ e });
  const formData = new FormData(e.target);
  const title = formData.get('title');
  const id = formData.get('id');
  const released = formData.get('released');
  const authorid = formData.get('author');
  const genre = formData.get('genre');
//     const title = document.getElementById('title').value;
//     const bookid = document.getElementById('bookid').value;
//     const released = document.getElementById('released').value;
//     const author = /*'nie umiem tu przypisać autora' */authors[0];
//     const genre = /* 'nie umiem tu przypisać gatunku' */'dsfdfs'
    


  const book = new Book(title, id, released, authorid, genre);

  const ui = new UI();
 

// //Methods
booklist.push(book);
ui.addBook(book); 
ui.clearFields();
console.log(book)
})