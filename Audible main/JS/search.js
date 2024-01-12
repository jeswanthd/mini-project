// let ress;
//     let searchBooks= async ()=>{
//     ress= await fetch(url);
//     let books=await ress.json();
//       var searchTerm = document.getElementById("searchInput").value.toLowerCase();
//       var matchingBooks = books.filter(function(book) {
//         return book.bookName.toLowerCase().includes(searchTerm);
//       });

//       var bookListElement = document.getElementById("bookList");
//       bookListElement.innerHTML = ""; // Clear previous content

//       matchingBooks.forEach(function(book) {
//         var matchingTitle = document.createElement("a");
//         matchingTitle.style.textDecoration='none';
//         matchingTitle.style.color='black';
//         var ptag=document.createElement("p");
//         matchingTitle.textContent = book.bookName;
//         bookListElement.appendChild(ptag);
//         ptag.appendChild(matchingTitle);
//         // matchingTitle.href="../HTML/view.html?book=" + item.bookName;
//       });
//     };



    
let audioURL1 = "http://localhost:3000/audioorpodcasts";

let ress;
let searchBooks = async () => {
    ress = await fetch(audioURL1);
    let books = await ress.json();
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var matchingBooks = books.filter(function (book) {
        return book.title.toLowerCase().includes(searchTerm);
    });

    var bookListElement = document.getElementById("bookList");
    bookListElement.innerHTML = "";
    matchingBooks.forEach(function (book) {
        var matchingTitle1 = document.createElement("p");
        var matchingTitle = document.createElement("a");
        matchingTitle.textContent = book.title;
        matchingTitle1.appendChild(matchingTitle);
        bookListElement.appendChild(matchingTitle1);
        matchingTitle.href="../HTML/search.html?book="+book.title;
        
    });
}
