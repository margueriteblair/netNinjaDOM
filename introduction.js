
// let titles = document.getElementsByClassName("title")
// //returns a pseudo array 
// let lis = document.getElementsByTagName("li")
// //lis array is returned
// for (let i = 0; i < titles.length; i++) {
//     console.log(titles[i])
// }

// titles.forEach(function(item){
//     console.log(item)
// })
// console.log(Array.isArray(titles)) //this will give a boolean whether titles is an array or not
// //for each does not work on titles because titles is not an array titles is an HTML collection, array methods won't work
// //but we can turn titles into an array!

// console.log(Array.isArray(Array.from(titles)))//you can literally just make an array array like that  WTF
// Array.from(titles).forEach(function(item){
//      console.log(item)
// })

const bookList = document.querySelector("#book-list")

console.log(bookList.nextSibling)
console.log(bookList.nextElementSibling)

//we add event listeners to different events. callback functions will

// let h2 = document.querySelector("#book-list h2")
// h2.addEventListener("click", function(event){
//     console.log(event.target)
//     console.log(event)
// })

// let buttons = document.querySelectorAll("#book-list .delete")
// Array.from(buttons).forEach(function(buttons){
//     buttons.addEventListener("click", function(e){
//         const li = e.target.parentElement
//         li.parentNode.removeChild(li)
//     })
// })

// const link = document.querySelector("#page-banner a")
// link.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log(`Navigation to ${e.target.textContent} was prevented`)
// })

//after you fire an event listener, the event bubbles up to the parent element

const list = document.querySelector("#book-list ul")

list.addEventListener("click", function(e){
    if (e.target.className == 'delete') {
        const li = e.target.parentElement;
        list.removeChild(li)
    }
})


const addForm = document.forms["add-book"]
addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const value = addForm.querySelector('input[type="text"]').value
    
    const li = document.createElement("li")
    const bookName = document.createElement("span")
    const deleteBtn = document.createElement("span")

    //add text content to bookname and delete button

    deleteBtn.textContent = "delete"
    bookName.textContent = value;

    //add classes
    bookName.classList.add("name")
    deleteBtn.classList.add("delete")

    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)


})
//this version means that the buttons aren't messed up when we add and delete the li elements

//notes on manipulating attributes:
//book.getAttribute("class") //this will return the elements withthat class name
//book.setAttribute("class", "nameOfNewAttribute") this will change the attribute
//book.hasAttribute('href") will return t/f depending on whether or not the element has that 
//book.removeAttribute("class") this will remove the element(s) with that class name

//hide books 

let hideBox = document.querySelector("#hide")
hideBox.addEventListener("change", function(e){
    if (hideBox.checked === true) {
        list.style.display = "none"
    } else list.style.display = "initial"
})

let searchBar = document.forms["search-books"].querySelector("input")
searchBar.addEventListener("keyup", function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName("li")
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = "block"
        } else {
            book.style.display = "none"
        }
    })

})

const tabs = document.querySelector(".tabs")
const panels = document.querySelectorAll(".panel")
tabs.addEventListener("click", function(e){
    if (e.target.tagName == "LI") {
        const targetPanel = document.querySelector(e.target.dataset.target)

        panels.forEach(function(panel){
            if (panel == targetPanel) {
                panel.classList.add("active")
            } else {
                panel.classList.remove("active")
            }
        })
    }
})
