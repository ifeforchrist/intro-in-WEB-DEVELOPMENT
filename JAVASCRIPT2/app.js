// document.querySelector
// doucument.querySelectorAll

const title = document.getElementsByTagName("h1")
console.log(title)
const title1 = document.getElementsByClassName("heading")

const lists = document.getElementsByTagName("ul")
console.log(lists)

const create = document.createElement("p")
create.innerHTML = " This is a beautiful time to work"
document.body.appendChild(create)
create.style.backgroundColor = "red"
create.style.fontSize = "30px"
create.style.color = "white"

console.log(create)

const unorderlist = document.createElement("ul")
unorderlist.setAttribute("id", "list")
const rice = document.createElement("li")
const beans =  document.createElement("li")
const malt = document.createElement("li")

rice.innerHTML = "rice"
beans.innerHTML =  "beans"
malt.innerHTML =  "malt"

console.log(unorderlist)