export const getWeather = async (city) => {
  try {
    const key = "ab4639f5754271e773ed6d3ffd73f327";
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=
            ${city}&appid=${key}`,
    );
    const weather = await response.json();
    return weather;
  } catch (e) {
    return "City not found";
  }
};
export const showWeather = async (city) => {
  const weather = await getWeather(city);
  if (weather === "City not found") {
    return "City not found";
  }
  document.querySelector(".show_weather").innerHTML =
    `Погода в ${weather.name} <br>
  Temperature: ${weather.main.temp}˚
  <img src = https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png> `;
};
