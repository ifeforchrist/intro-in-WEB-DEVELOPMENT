// OOP object oriented programming
// a class is a blueprint
// a constructor is used to define the properties of an object

class Person{
    constructor(name, age, address){
      this.name = name,
      this.age = age,
      this.address = address
    }
}
const user = new Person("zainba", 20, "agbara")
console.log(user)

const user1 = new Person("ade", 23, "opic")
console.log(user1)


//A  factory function is use to  create an object// exmple below

function Car(name, model, year){
    this.name = name,
    this.model = model,
    this.year = year,
    this.move = function(){
        console.log("this car is moving forward")
    }
}
const car1 = new Car("toyota", "highlander", 2025)
const car2 = new Car("benz", "glk",  2027)
console.log(car2)
console.log(car2.move())