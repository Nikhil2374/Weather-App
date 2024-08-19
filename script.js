const apiKey = '1b6537206dc722a241a2cff29af7a5cd';

const getWeather = (city) => {
    document.getElementById('cityname').innerHTML = city;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            const current = response.main;
            const weather = response.weather[0];
            const wind = response.wind;
            const sys = response.sys;

            document.getElementById('cloud_pct').innerHTML = weather.description;
            document.getElementById('feels_like').innerHTML = current.feels_like;
            document.getElementById('humidity').innerHTML = current.humidity;
            document.getElementById('humidity2').innerHTML = current.humidity;
            document.getElementById('max_temp').innerHTML = current.temp_max;
            document.getElementById('min_temp').innerHTML = current.temp_min;
            document.getElementById('sunrise').innerHTML = new Date(sys.sunrise * 1000).toLocaleTimeString();
            document.getElementById('sunset').innerHTML = new Date(sys.sunset * 1000).toLocaleTimeString();
            document.getElementById('temp').innerHTML = current.temp;
            document.getElementById('temp2').innerHTML = current.temp;
            document.getElementById('wind_speed').innerHTML = wind.speed;
            document.getElementById('wind_speed2').innerHTML = wind.speed;
        })
        .catch(err => console.error('Error fetching weather data:', err));
};

document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    getWeather(document.getElementById('city').value);
});

getWeather('Mohali');
