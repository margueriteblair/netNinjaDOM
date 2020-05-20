
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
console.log(bookList.parentNode)
console.log(bookList.parentElement.parentElement)

console.log(bookList.children)