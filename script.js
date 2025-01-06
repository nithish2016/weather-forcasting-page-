const apiKey = '4b4c93fc89f6dc710210ec49f21eec2c'; // Replace with your OpenWeather API key
const searchBtn = document.getElementById('searchBtn');
const cityInput = document.getElementById('city');
const locationElement = document.getElementById('location');
const descriptionElement = document.getElementById('description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windElement = document.getElementById('wind');

searchBtn.addEventListener('click', () => {
  const city = cityInput.value;
  if (city) {
    fetchWeatherData(city);
  }
});

async function fetchWeatherData(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) throw new Error('City not found');
    const data = await response.json();
    displayWeatherData(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeatherData(data) {
  locationElement.textContent = `${data.name}, ${data.sys.country}`;
  descriptionElement.textContent = `Weather: ${data.weather[0].description}`;
  temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
  windElement.textContent = `Wind Speed: ${data.wind.speed} m/s`;
}
