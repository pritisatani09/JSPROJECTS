const apiKey = '9505fd1df737e20152fbd78cdb289b6a';
const form = document.querySelector("form");
const input = document.getElementById("name");
const main = document.querySelector("main");
const city = document.querySelector(".name figcaption");
const flag = document.querySelector(".name img");
const weatherIcon = document.querySelector(".temperature img");
const temperature = document.querySelector(".temperature span");
const description = document.querySelector(".description");
const clouds = document.getElementById("clouds");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value.trim() !== "") {
    getWeather(input.value.trim());
  }
});

function getWeather(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.cod === 200) {
        city.innerText = data.name;
        flag.src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.innerText = Math.round(data.main.temp);
        description.innerText = data.weather[0].description;
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        wind.innerText = (data.wind.speed * 3.6).toFixed(1); // m/s to km/h
      } else {
        main.classList.add("error");
        setTimeout(() => main.classList.remove("error"), 1000);
      }
      input.value = "";
    })
    .catch(() => {
      main.classList.add("error");
      setTimeout(() => main.classList.remove("error"), 1000);
    });
}

// Default city on page load
window.addEventListener("load", () => {
  getWeather("New York");
});
