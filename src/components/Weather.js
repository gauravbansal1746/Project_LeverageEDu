import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Fetch weather data using your API key and store it in the state
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=Bathinda&appid=ea4379fd51d7ed83c6b435c139734b1c')
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather">
     <h2>Weather Forecast</h2>
    {weatherData.list.map((forecast, index) => (
      <div key={index}>
        <p>Date and Time: {forecast.dt_txt}</p>
        <p>Temperature: {forecast.main.temp} K</p>
        <p>Humidity: {forecast.main.humidity}%</p>
        <p>Weather Condition: {forecast.weather[0].description}</p>
        {/* You can add more weather details as needed */}
      </div>
    ))}
    </div>
  )
};

export default Weather;