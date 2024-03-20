function getWeather() {

    let location = document.getElementById("location").value
    console.log("getting weather for city : " + location);
    const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2d0abadf28f4c24129fb4b49b93514bc`);
    data.then(res => res.json()).then(data => {

        //getting static fields and persoming object mnanipulation//
        document.getElementById("city").innerHTML = + data.name
        document.getElementById("humidity").innerHTML = "humidity " + data.main.humidity + "%";
        document.getElementById("description").innerHTML = data.weather[0].description
        document.getElementById("icon").innerHTML = data.weather[0].icon
        document.getElementById("country").innerHTML = data.sys.country;
        document.getElementById("temp").innerHTML = data.main.temp + "<span>&#8451;</span>"
        document.getElementById("feelLike").innerHTML = data.main.feels_like + "<span>&#8451;</span>"
        document.getElementById("maxTemp").innerHTML = data.main.temp_max + "<span>&#8451;</span>"
        document.getElementById("minTemp").innerHTML = data.main.temp_min + "<span>&#8451;</span>"

        document.getElementById("wind").innerHTML = data.wind.speed + "m/s"
        document.getElementById("deg").innerHTML = data.wind.deg + "&deg"

        //get sunrise time with Date

        let sunRise = data.sys.sunrise;
        const rise = new Date(sunRise * 1000)
        console.log("with time", date.toTimeString());
        document.getElementById("sunRise").innerHTML = rise

        //get sunset time with Date//

        let sunSet = data.sys.sunrise;
        const set = new Date(sunRise * 1000)
        document.getElementById("sunSet").innerHTML = set



        //dynamically calling icons into html with a link//
        let icon = data.weather[0].icon;
        let iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.getElementById("icon").innerHTML = `<img src="${iconUrl}" alt="Icon">`;
    }).catch(
        console.log("cannot fetch weather")
    );

}