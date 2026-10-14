// concatertion means joining two or more
// strings together using the arithmtic opertor(+)

let firstName = "kenny"
let lastname = "giwa"
let fullName =  firstName +  ""  + lastname
console.log(fullName)


function add(num1, num2){
    return num1 + num2
}
console.log(add(6, 9))
console.log(add(10, 9))
console.log(add(6, 33))

function substract(num1, num2){
    return num1 - num2
}
console.log(substract(30, 7))

function mutiplication(num1, num2){
    return num1 * num2
}
console.log(mutiplication(30, 7))

function division(num1, num2){
    return num1 % num2
}
console.log(division(30, 7))

function exponal (num1, num2){
    return num1 ^ num2
}
console.log(exponal(30, 7))


const value = Math.random()
console.log(value)


const dateLocaltime = Date.now()
console.log(dateLocaltime)

// if else 


const name = "john"
const email = "johnbosco@gmail.com"
const passwords = "12345"

if(!name || !email  || !password){
    console.log("name, email and password required")
} else{
    console.log("Registration Successful")
}
if (email && password){
    console.log("login Successful")
}else{
    console.log("unable to login")
}


const day = "Friday"
if (day == "sunday"){
    console.log("the first day of the week")
}else if(day == "monday"){
    console.log("the second day of the week")
}else if (day == "tuesday"){
    console.log("the thrid of the week")
}else if (day == "wednesday"){
    console.log("fourth day of the week")
}else if (day == "thurday"){
    console.log("fifth day of the week")
}else if (day == "Friday"){
    console.log("sixth day of the week")
}else if (day == "Saturday"){
    console.log("seventh day of the week")
}




// switch case
const month = "january"
switch(month){
    case "janmary":
    console.log("the first month of the year")
       break
     case "february":
    console.log("the second month of the year")
       break
     case "march":
    console.log("the third month of the year")
       break
     case "apirl":
    console.log("the fourth month of the year")
       break
     case "may":
    console.log("the fifth month of the year")
      break
     case "june":
    console.log("the sixth month of the year")
       break
     case "july":
    console.log("the seventh month of the year")
       break
    case "august":
    console.log("the eight month of the year")
       break
    case "september":
    console.log("the ninth month of the year")
       break
    case "october":
    console.log("the tenth month of the year")
       break
     default:
    console.log("unknown input")
       break   
}

 // == the strict sign
const find = 10 == "10"
const find1 = 10 === "10"
console.log(find)
console.log(find1)


const password = "john"
if (password.length<6){
    console.log("short password")
}else if (password.length >= 6 && password.length <= 12){
    console.log("weak password")
}else {
    console.log("strong password")
}


//anonymous function
let anonymous = function (club){
    club = "PSG"
    return " the current champion is " + club
}
console.log(anonymous())


//Arrow function ()=>{}
 let answer = (a, b)=>{return a+b}
  console.log(answer(7, 5))   


// function expression

let WorldCup = function mySport(country){
    country = " spain"
    return " the  world cup winner is" + country
}
console.log(WorldCup())

// LOOP
for(let i = 0; i<10; i++){
   console.log("I am a web developer", i) 
}



let m = 1
while(i<5){
    console.log(`${i*2}`)
    i++
}

let i = 5
do{
    console.log(i*3)
    i++
} while(i<2)
    
for(let i = 1; i <= 12; i++){
    console.log(`mulyipliplication table ${i}`)
    for(let j = 1; j <= 12; j++){
        console.log(` ${i} x ${j} =  ${i * j}`)
    }
}    


//ARRAY IS THE COLLECTION OF DIFFERENT DATA TYPE WITH SQURE BACKET
const student =["Roqeebat", "Emmanuel", "Ife", "John", "Salaam", "Gisele", "Mariam", "Ebube", "Kingsley", "Nelson", "Tobi", "ifeanyi",
    "Kenny",  "Richard", "luka", "Zainba", "Augustine"]
 console.log(student[4])
 console.log(student.length)
 student[9] = "ferran Torres"
 console.log(student)

// ARRAY METHOD
// 1 PUSH is to add to the array and it will be at the end of the list
student.push("Enzo")
console.log(student)

// pop is to remove an item from the array
student.pop("")
// unshift is to add an item to the array
student.unshift("kylian mbappa")
console.log(student)


const item = ["bread", "milo", "sardine", "pringle", "shortbread"]
//let newpurchase = item.slice(2)
let newpurchase = item.slice(3)
console.log(newpurchase)

const veg = ["spinach", "lettuce", "cabbage", "carrot", "tomato"]
let recipe = veg.splice( 2)
let specie = veg.splice( 2, "cucumber", "pepper")
console.log(recipe)
console.log(specie)


 const words = "university"

  function vowel(a,e,i,ou){
    for (let word = 0; word < word.length; i++) { 
           if (word[i] % 2 === 0 ){
           }
           
    }
  
 }
 console.log(vowel());
 

 let count = "University"

const countVowel = (str) =>{
    let count = 0
    for ( const char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count ++
        }
    }
    return count
}
console.log(countVowel("Univesity"))