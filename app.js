let inp = document.querySelector(".inp");
let weatherIcon = document.querySelector(".weatherIcon");
let temperatura = document.querySelector(".temp");
let wind = document.querySelector(".wind");
let btn = document.querySelector('.btn')
let description = document.querySelector('.description')

btn.addEventListener("click", (event) => {
    event.preventDefault();
})

const weather = (city) => {
fetch(`https://goweather.herokuapp.com/weather/%7B${city}%7D`)
    .then((response) => response.json())
    .then((data) => {
        description.textContent = data.description
        temperatura.textContent = data.temperature;
        wind.textContent = data.wind;
        
        if(data.description == 'Sunny'){
            weatherIcon.src = "./img/sun.png" 
        } else if(data.description == 'Partly cloudy'){
            weatherIcon.src = "./img/clouds.png"
        } else if(data.description == 'Light rain shower'){
            weatherIcon.src = "./img/drizzle.png"
        } else if(data.description == 'Rain'){
            weatherIcon.src = "./img/rain.png"
        } else if(data.description == 'Snow'){
            weatherIcon.src = "./img/snow.png"
        } else if(data.description == 'Patchy rain nearby'){
            weatherIcon.src = "./img/mist.png"
        } else{
            weatherIcon.src = "./img/weather-app.png"
        }
        // console.log(data);
    })
    .catch((error) => console.error(error));
}


btn.addEventListener("click", () => {
    const city = inp.value.trim();
    if (city !== "") {  
      weather(city);
    }
  });