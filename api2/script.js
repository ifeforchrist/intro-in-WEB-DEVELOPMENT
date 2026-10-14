const quoteEl = document.getElementById("quotes")
const authorEl = document.getElementById("author")
const btn = document.getElementById("btn")

async function getQuote(){
    quoteEl.textContent = "loading....."
    authorEl.textContent = ""



    const apikey = "95hWaKRMcJU2UXuA3JNOctWy7MddaG7B1fZPjpQy"
    const url = "https://api.api-ninjas.com/v1/quotes"


    try{
       const response = await fetch(url,
          { headers:{"X-Api-Key": `${apikey}`}}

        ) 

       if(!response.ok){
          throw new Error("API error")
        }

      const data = await response.json()
      const quoteData = data[0]
    
      quoteEl.textContent = `${quoteData.quote}`
      authorEl.textContent = `${quoteData.author}`
    }catch (error){
        quoteEl.textContent = "Failed to load quote, try again"
        authorEl.textContent = ""
        console.error(error)
    }


}
btn.addEventListener("click", getQuote)
getQuote()