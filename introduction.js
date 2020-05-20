// //dom == document object model
// //tree of elements/nodes 
// //the nodes represent every html element on your webpage
// //javascript lets us interact with the DOM
// //we can CHANGE html elements, add CSS styling, create new HTML elements, attach event listeners to elements


// //while jquery can be used for a lot of this stuff, we can use pure vanilla javascript
// //we'll be creating a mini reading list application


// //ids are an attribute we use for html elements 

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

let books = document.querySelector("#book-list li .name")
books = document.querySelectorAll("#book-list li .name")
Array.from(books).forEach(function(book){
    console.log(book)
})