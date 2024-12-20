let weather = {
   fetchWeather: function(city) {
      fetch(""
         + city
         + "&units=metric&appid="
         + this.apiKey
      )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
   },
   displayWeather: function(data) {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
      document.querySelector(".temp").innerText = temp + "°";
      document.querySelector(".description").innerText = "Description" + description;
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
   },
   search: function() {
      this.fetchWeather(document.querySelector(".search-bar").value);
   }
};

document.querySelector(".search button").addEventListener("click", function() {
   weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event) {
   if (event.key == "Enter") {
      weather.search();
   }
})
