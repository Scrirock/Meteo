document.getElementById("go").addEventListener("click", ()=>{
    let city = document.getElementById("city");
    meteo(city);
});



function meteo(city){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city.value + "&units=metric&lang=fr&appid=a60f16c1bbd0df1c3be7109d59a3f46f";

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = "json";

    xhr.onload = () => {
        if (xhr.status !== 200) {
            return;
        }

        console.log(xhr.response)
        document.getElementById("ville").innerHTML = "Ville: " + xhr.response.name;
        document.getElementById("co").innerHTML = "Latitude: " + xhr.response.coord.lat + " / Longitude: " + xhr.response.coord.lon;
        document.getElementById("country").innerHTML = "Pays: " + xhr.response.sys.country
        document.getElementById("temperature").innerHTML = "Température: " + xhr.response.main.temp + " degrés Celsius <--> ";
        document.getElementById("feelsLike").innerHTML = "Ressentis: " + xhr.response.main.feels_like + " degrés Celsius";
        document.getElementById("min").innerHTML = " Min: " + xhr.response.main.temp_min + " degrés Celsius <--> ";
        document.getElementById("max").innerHTML = "Max: " + xhr.response.main.temp_max + " degrés Celsius";
        document.getElementById("humidity").innerHTML = "Humiditée: " + xhr.response.main.humidity + " %";
        document.getElementById("pressure").innerHTML = "Pression: " + xhr.response.main.pressure;
        document.getElementById("description").innerHTML = "Description: " + xhr.response.weather[0].description;
        document.getElementById("degree").innerHTML = "Angle du vent: " + xhr.response.wind.deg;
        document.getElementById("speed").innerHTML = "Vitesse du vent: " + xhr.response.wind.speed + " km/h";
    }

    xhr.send();
}