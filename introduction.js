
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

bookList.previousElementSibling.querySelector("p").innerHTML += "<br>Too cool for everyone else"

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
    console.log(value)
})
//this version means that the buttons aren't messed up when we add and delete the li elements