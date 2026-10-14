// a callback function is a function that take in another function as an argument
// an argument is the actual value
const posts = [
    {title : "Entertainment", body : "Peller flamboyant wedding"},
    {title : "Entertainment", body : "tyla concert in lagos cancelled"}
]

function getPosts(){
    setTimeout(()=>{
        let output = ""
        posts.forEach((post)=>{
            output += `<p>${post.title} ${post.body}</>`
        })
        document.body.innerHTML = output
    }, 1000)
}
function createPost(post, Callback){
    setTimeout(()=>{
     posts.push(post)
     callback()
    }, 5000)
}

createPost({title : "movies", body : "merlin"},
    getPosts())


function createPost(post, cb){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post)
            const error = false
            if(!error){
                resolve()
            }else{
                reject("something went wrong")
            }
        }, 2000)
    })

}    
async function inIt(){
    await createPost({title: "Sport", 
    body: "Chelsea signed morgen Ranger for a british record fee of £11M"}), getPosts()
        
}
inIt()



const students = [
    {name : "lukes", age : 15},
    {name : "john", age : 45},
    {name : "ife", age : 25, address : "agbara"},
    {name : "marma", age : 19, heigth : 1.34}

]
students.forEach((p)=>{
  console.log(`${p.name} ${p.age}`)
})