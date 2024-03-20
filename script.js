function getWeather() {
    let location = document.getElementById("location").value
    console.log("getting weather for city : " + location);
    const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2d0abadf28f4c24129fb4b49b93514bc`);
    data.then(res => res.json()).then(data => {
        document.getElementById("cityName").innerHTML = +data.name
        document.getElementById("humidity").innerHTML = "humidity " + data.main.humidity + "%";
        document.getElementById("description").innerHTML = data.weather[1]
        document.getElementById("country").innerHTML = data.sys.country;
        document.getElementById("temp").innerHTML = data.main.temp
        document.getElementById("feelLike").innerHTML = data.main.feels_like
        document.getElementById("maxTemp").innerHTML = data.main.temp_max
        document.getElementById("minTemp").innerHTML = data.main.temp_min
        document.getElementById("sunRise").innerHTML = data.sys.sunrise
        document.getElementById("sunSet").innerHTML = data.sys.sunset
        document.getElementById("wind").innerHTML = data.wind.speed
        document.getElementById("deg").innerHTML = data.wind.deg
    }).catch(
        console.log("cannot fetch weather")
    );

}