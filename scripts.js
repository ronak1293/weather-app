const apikey="05ff405f114380288ea90de339cfec7b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";



const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

searchbtn.addEventListener("click",()=>{
  checkWeather(searchbox.value);

})



async function checkWeather(city){
  const response=await fetch(apiurl+city+`&appid=${apikey}`);

  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";
  }
  else{

    let data=await response.json();
  document.querySelector(".city").innerHTML=data.name;
  document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
  document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
  document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
  
  //change img according to whther

  if(data.weather[0].main=="Clouds"){
    weatherIcon.src="weather-app-img/images/clouds.png"
  }
  else if(data.weather[0].main=="Clear"){
    weatherIcon.src="weather-app-img/images/clear.png"
  }
  else if(data.weather[0].main=="Rain"){
    weatherIcon.src="weather-app-img/images/rain.png"
  }
  else if(data.weather[0].main=="Drizzle"){
    weatherIcon.src="weather-app-img/images/drizzle.png"

  }
  else if(data.weather[0].main=="Mist"){
    weatherIcon.src="weather-app-img/images/mist.png"

  }
  document.querySelector(".weather").style.display="block";
  document.querySelector(".error").style.display="none";

  }
}

