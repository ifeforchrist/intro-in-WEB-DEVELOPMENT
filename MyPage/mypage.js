const menuBtn =document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")

menuBtn.addEventListener("click", function(){
    navLinks.classList.toggle("active")

})
const links = document.querySelectorAll(".nav-links a")
links.forEach((links) =>{
    links.addEventListener("click", () =>{
        navLinks.classList.remove("active")

    })

})

const  scrollTop = document.getElementById("scrollTop")
window.addEventListener("scroll", function(){
    if(window.scrollY > 300){
        scrollTop.classList.add("show")
    }else{
        scrollTop.classList.remove("shoe")
    }
})
scrollTop.addEventListener("click", function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth"
    })
})

const form = document.getElementById("contactForm")
form.addEventListener("submit", function(event){
   event.preventDefault()
   const name = document.getElementById("name").value.trim()
   const email = document.getElementById("email").value.trim()
   const message = document.getElementById("message").value.trim()

   const nameError = document.getElementById("nameError")
   const emailError = document.getElementById("emailError")
   const messageError = document.getElementById("messageError")

   const successMessage = document.getElementById("successMessage")


   nameError.textContent = ""
   emailError.textContent = ""
   messageError.textContent = ""
   successMessage.textContent = ""

   let valid = true;
   if(name == ""){
    nameError.textContent = "please enter name"
    valid = false
   }


   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   if(email == ""){
     emailError.textContent = "please enter your email"
     valid = false
   }else if(!emailPattern.test(email)){
      emailError.textContent = "please enter your email"
      valid = false
   }


   if(message == ""){
    messageError.textContent = "please enter your message"
    valid = false
   }
   
   if(valid){
    successMessage.textContent = "message sent successfull"
    contactForm.reset()
   }



})