import React, { useState, useEffect } from "react";

const WeatherApi = () => {
  const [weatherData, setWeatherData] = useState(() => {
    const savedData = localStorage.getItem("weatherData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      const storedTime = new Date(parsedData.timestamp);
      const currentTime = new Date();
      // Check if stored data is less than 30 minutes old
      if (currentTime - storedTime < 30 * 60 * 1000) {
        return parsedData.data;
      }
    }
    return null;
  });
  const [loading, setLoading] = useState(!weatherData);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=Mumbai";

      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_WEATHER_API_KEY,
          "x-rapidapi-host": import.meta.env.VITE_WEATHER_API_HOST,
        },
      };

      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setWeatherData(data);
        localStorage.setItem(
          "weatherData",
          JSON.stringify({
            data: data,
            timestamp: new Date().toISOString(),
          })
        );
        setLoading(false);
      } catch (error) {
        console.error("Weather API Error:", error);
        setError("Failed to fetch weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="weather-widget backdrop-blur-md bg-white/40 p-4 rounded-lg border border-white/20">
      {weatherData && (
        <div className="flex items-center gap-3">
          <img
            src={weatherData.current?.condition?.icon}
            alt={weatherData.current?.condition?.text}
            className="w-13 h-13"
          />
          <div className="text-gray-800">
            <p className="text-5xl font-bold">
              {weatherData.current?.temp_c}°C
            </p>
            <p className="text-sm">
              {weatherData.location?.name}, {weatherData.location?.country}
            </p>
            <div className="weather-info mt-2 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <span>Humidity:</span>
                <span className="font-medium">
                  {weatherData.current?.humidity}%
                </span>
              </p>
              <p className="flex items-center gap-1">
                <span>Feels like:</span>
                <span className="font-medium">
                  {weatherData.current?.feelslike_c}°C
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApi;
