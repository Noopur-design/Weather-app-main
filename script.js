const apikey = "0a193e9e494f775de7fc2c94de8fed8b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon=  document.querySelector(".weather-icon")

async function checkweather(city) {

    if (city.trim() === "") {
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".error").style.display = "none";
        document.querySelector(".content").style.display = "block";
        return;}



    const response = await fetch(apiUrl +city + `&appid=${apikey}`);

if(response.status == 404){
    document.querySelector(".error").style.display ="block";
     document.querySelector(".weather").style.display ="none";
     document.querySelector(".content").style.display = "none";
}else{
    var data = await  response.json();



    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + " °C";  
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/hr ";
    
    
    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
     else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
     }
     else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
     }
     else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
     }
     else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
     }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
     }


     document.querySelector(".weather").style.display = "block";
     document.querySelector(".error").style.display ="none";
     document.querySelector(".content").style.display ="none";

}
}


   
searchbtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
})

searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkweather(searchBox.value);
    }
});

