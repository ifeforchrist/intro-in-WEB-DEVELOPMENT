let name1 = "john"
var name2 = "joseph"
const name3 = "mike"

name1 = "porro"

// name3 = "rodri"

console.log(name1)
console.log(name3)


let name = "musa"
function myName(name){
    name = "john"
     return name
}
console.log(myName())
console.log(name)


let food = "beans"
function cooler(){
    food = "yam"
    return "i love + food "
}
console.log(cooler())
console.log(food)


function greeting(name){
    return  "hi, goodmorning " + name
}
console.log(greeting("Augustine"))




function greet(){
    name = "Augustine"
    return name
}
console.log(greet("Augustine"))



let students = [
  {name: "Giesle", age: 20, address: "agbara", salary: 7000},
  {name: "Augustine", age: 22, address: "ipersin", salary: 5000},
  {name: "luka", age: 26, address: "morogo", salary: 2000},
  {name: "ebube", age: 19, address: "lekki", salary: 9000},
] 
console.log(students[0])
console.log(students[2].name)


for (let i = 0; i < students.length; i++){
    let totalAge = 0
    totalAge += students[i].age
}
console.log(totalAge)

for(let i = 0; i < students.length; i++){
    console.log(students[i])
} 


// data type are primitive and reference
// exmaple of primative are number, string, boolean, null
//  example of reference are function, array, object

let age = 20
age = 30
console.log(age)


let plate = rice
plate = yam
console.log(plate)


// STRING METHOD
let price = 500
 result = price.toString()
console.log(typeof result)


let figure = 10.66666666
let val = figure.toFixed(3)
console.log( val)


let gadget = "iphone 17"
let totalNumber = gadget.length
console.log(totalNumber)

let country = "luxemborg"
let positionLetter = country.charAt
console.log(positionLetter)

let amount = 70.89
let ans = amount.toPrecision()
console.log(ans)


let words = "   hippopotamus  "
console.log(words.length)
console.log(words.charAt())
let newLength = words.trim()
console.log(newLength.length)
let upper = words.toUpperCase()
let lower = words.toLowerCase()
console.log(lower)
console.log(upper)


function swapLetter(input){
    let swapped = ""
    for(let i = 0;  i < input.length; i++){
        let char = input[i]
        if (char == char.toUpperCase()){
            swapped += char.toLowerCase()
        }else{
            swapped += char.toUpperCase()
        }
    }
    return swapped
}
let input = "The Brown Old Fox"

let word = " thE gIRL is FiNe "
let results = swapLetter(word)
console.log(result)
let output = swapLetter(input)
console.log(output)


let bottleone = fanta
let bottletwo = coke
let bottlethree = empty

let swap = ""





const numbers = [9, 11, 3, 7, 19, 12, 10]
for(let i =0; i < numbers.length;  i++ ){
    for(let j = 0; j < numbers.length-1; j++){
      if(numbers[j]>numbers[j+1]){
        let temp = numbers[j]
        numbers[j] = numbers[j+1]
        numbers[j+1] = temp
      }  
    }
}
console.log(numbers)


const num = [3,9,34,8,5,]
for (let i =1; i<num.length; i++){
    if(num[i]  % 2 ==1){
        console.log(num[i])
    }
}

const digit = 9
let answers = digit %2
console.log(answers)


const number = [3,9,34,8,5,]
for (let i =1; i<number.length; i++){
    if(number[i]  % 2 !==0){
        console.log(number[i])
    }
}

// a callback function is function that take in  another function as an augerment that is expected to run later
// a asynchronocus is waiting period in javascript

function calculation(a, b, opertion){
    return opertion(a, b)
}
function addition(num1, num2){
    return num1 + num2
}
function multply(num1, num2){
    return num1 + num2
}
let result = calculation(10, 2, addition)
console.log(result)

let answered = calculation(10, 8, multply)
console.log(answered)

function frad(a){
    return function (c, d){
        return a*d
    }
}
let value = frad(5)
let answer =  value(4)

console.log(answer)

function user(callback){
    console.log("processing...")

    return function (name){
        callback(name)
    }
}
const displayUser = user(function(name){
    console.log(`welcome ${name}`)
})
displayUser("ife")


const api = async()=>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    let result = await response.json()
    console.log(result)
}
api()