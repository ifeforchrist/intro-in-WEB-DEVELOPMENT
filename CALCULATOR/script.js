
const btn = document.getElementById("btn").addEventListener("click", function(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let result = document.querySelector(".result").value
    let operator = document.getElementById("selectOp").value

    switch(operator){
        case "plus":
            result.innerHTML =  +num1 + +num2
            break;
        case "minus":
            result.innerHTML =  num1 - num2
            break;
        case "divide":
            result.innerHTML = num1 / num2
            break;
        case "multply":
            result.innerHTML = num1 * num2
            break; 
        default:
            result.innerHTML = "not a number"       
    }
})
