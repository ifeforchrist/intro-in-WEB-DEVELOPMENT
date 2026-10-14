const recipeInput = document.getElementById("recipe")
const btn  = document.getElementById("btn")
const result = document.getElementById("result")

const apiKey = "95hWaKRMcJU2UXuA3JNOctWy7MddaG7B1fZPjpQy"

async function findRecipe(){
    const title = recipeInput.value.trim()
    if(title == ""){
        result.style.display = "block"
        result.innerHTML = "<p>please type a recipe name</p>"
        return;
    } 

    const url = `https://api.api-ninjas.com/v2/recipe?title=${encodeURIComponent(title)}`

try{
    result.style.display = "block"
    result.innerHTML = "<p>loading....</p>"

    const find = await fetch(url,{
        headers:{"X-api-Key":apiKey}
    })

    if(!find.ok){
        result.innerHTML = "<p>Error: check url or apiKey</p>"
        return;
    }
    const data = await find.json()
    if(data.length == 0){
        result.innerHTML = "<p> No recipe found"
        return;
    }
    const recipe = data[0]
    result.innerHTML = `
    <h3>${recipe.title}</h3>
    <p><strong>ingredients:</strong><br>${recipe.ingredients}</p>
    <p><strong>instructions:</strong><br>${recipe.instructions}</p>`
   }catch(error){
  console.error(error)
  result.innerHTML = "<p>Error fetching recipe</p>"
   }
   
}
btn.addEventListener("click", findRecipe)
