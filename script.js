// script.js
const apiKey = '037774b08cb54bf18a4212644230108'; // Reemplaza 'TU_CLAVE_DE_API' con tu clave de API de WeatherAPI

const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('cityInput');
const weatherInfo = document.getElementById('weatherInfo');

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city !== '') {
        getWeatherData(city);
    }
});

function getWeatherData(city) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDescription = data.current.condition.text;
            const temperature = data.current.temp_c;
            const humidity = data.current.humidity;

            const weatherHtml = `
                <h2>${city}</h2>
                <p>Descripción del clima: ${weatherDescription}</p>
                <p>Temperatura: ${temperature} °C</p>
                <p>Humedad: ${humidity} %</p>
            `;

            weatherInfo.innerHTML = weatherHtml;
        })
        .catch(error => {
            console.error('Error al obtener datos del clima', error);
            weatherInfo.innerHTML = '<p>No se pudo obtener información del clima para esta ciudad.</p>';
        });
}
