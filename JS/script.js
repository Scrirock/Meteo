$("#go").click(function (){
    let city = $("#city");
    meteo(city);
});

function meteo(city){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city.val() + "&units=metric&lang=fr&appid=a60f16c1bbd0df1c3be7109d59a3f46f";
    $.ajax({
        url: url,
        method: "GET",
        dataType: "json"
    })
    .done (function (response){
        $("#ville").html("Ville: " + response.name);
        $("#co").html("Latitude: " + response.coord.lat + " / Longitude: " + response.coord.lon);
        $("#country").html("Pays: " + response.sys.country);
        $("#temperature").html("Température: " + response.main.temp + " degrés Celsius <--> ");
        $("#feelsLike").html("Ressentis: " + response.main.feels_like + " degrés Celsius");
        $("#min").html(" Min: " + response.main.temp_min + " degrés Celsius <--> ");
        $("#max").html("Max: " + response.main.temp_max + " degrés Celsius");
        $("#humidity").html("Humiditée: " + response.main.humidity + " %");
        $("#pressure").html("Pression: " + response.main.pressure);
        $("#description").html("Description: " + response.weather[0].description);
        $("#degree").html("Angle du vent: " + response.wind.deg);
        $("#speed").html("Vitesse du vent: " + response.wind.speed + " km/h");
    })
}