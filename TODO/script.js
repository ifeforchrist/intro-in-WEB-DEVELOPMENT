const buttonEl = document.querySelector("#button")
const todoList = document.querySelector("#todo_list")

function addTodo(){
    const li = document.createElement("li")
    let inputValue = document.querySelector(".input").value
    const text = document.createTextNode(inputValue)
    li.appendChild(text)

    if(inputValue  = ""){
        alert("please enter a valid input")
    }else{
        todoList.appendChild(li)
    }
    console.log(inputValue)
    document.querySelector(".input").value = "" ;  
    
}
buttonEl.addEventListener("click", addTodo)

