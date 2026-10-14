let pattern = /hello/
const word = new RegExp("hello")

let test = word.test("hello world")
console.log(test)

let test1 = /hello/.test("hello word")
 console.log(test1)
let test2 = "welcome home".match(/school/)
  console.log(test2)
let test3 = "hi python".replace("python","javascript")
  console.log(test3)

let code = /\d\d\w/.test("a7b")

let startwith = /^good/.test("good morning sir")
 console.log(startwith)
let endwith = /^welcome/.test("you are welcome")
  console.log(endwith)

let sentence = /world$/.test("i am ontop of the world")
 console.log(sentence)
let valid = /\d{3}/.test(701)
 console.log(valid)

const email = /^[\w]+@[\w]+\.\w+$/
let result = email.test("okworifebuche046@gmail.come")
 console.log(result)

const phone = /^0[7-9]\d{9}$/
let tel = phone.test("08109606100")
console.log(tel) 