const btn = document.getElementById("btn")
const cityInput = document.getElementById("city")
const result = document.getElementById("result")

btn.addEventListener("click", getWeather)

async function getWeather() {
    const city = cityInput.value.trim()
    if(cityInput == ""){
        result.innerHTML = "please enter valid city name"
        return
    }


    const apiKey = "5e032a6889de21011d44f7ecd1a1e4f6"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    result.innerHTML = "londing ..."
    
    try{
        const response = await fetch(url)
        const data = await response.json()
        
        if(data.cod == 401){
           result.innerHTML = "invalid api key"
           return
        }
        const temp = data.main.temp
        const humidity = data.main.humidity
        const wind = data.main.wind
        const country = data.main.country
        const description = data.weather[0].description

        result.innerHTML = `
        <h3>${data.name}</h3>
        <p>temperature: ${temp}</p>
        <p>humidity: ${humidity}</p>
        <p>wind: ${wind}</p>
        <p>country: ${country}</p>
        <p>description: ${description}</p>`
    }catch (error){
        console.log(error)
        result.innerHTML = "error fetching data"

    }
}