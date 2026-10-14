const changeBtn = document.getElementById("changeBtn")
const copyBtn = document.getElementById("copyBtn")
const colorCode = document.getElementById("colorCode")

function randomColor(){
    const letters = "0123456789ABCDEF"
    let color = "#"

    for(i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() *16)]
    }
    return color
}

changeBtn.addEventListener("click", function(){
    const color = randomColor()
    document.body.style.backgroundColor = color
    colorCode.textContent = color
})
copyBtn.addEventListener("click", function(){
    navigator.clipboard.writeText(colorCode.textContent)
    alert("copied;", + colorCode.textContent)
})