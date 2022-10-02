
const apikey = '1754917dd2ca4926861e624ab4f65d64';

let input = document.getElementById("search");
let button = document.getElementById("go");

function searchCityName() {
    let cityName = input.value;
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apikey}`)
    .then(function(res){
    return res.json()
    })
    .then(function(res){
        // replace numbers with res lat and res lon
        searchCityInfo(res[0].lat, res[0].lon);
        //console.log(res);
        //console.log(res[0].lat)
        //console.log(res[0].lon)
    })
}

function searchCityInfo(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apikey}&exclude=hourly,minutely,alerts&units=imperial`)
    .then(function(res){
        return res.json()
        })
        .then(function(res){
            // weather data on html here
            console.log(res);
            console.log(res.current.temp);
            console.log(res.current.wind_speed);
            console.log(res.current.humidity);
            let tempEl = document.getElementById("temp");
            tempEl.textContent = res.current.temp;
            let windEl = document.getElementById("wind");
            windEl.textContent = res.current.wind_speed;
            let humidityEl = document.getElementById("humidity");
            humidityEl.textContent = res.current.humidity;
        })
}

button.addEventListener("click", searchCityName) 