const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1701d3afa3msh21a34978f49b54ap1dd894jsnda69e9e4e38e",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.temp;
      temp2.innerHTML = response.temp;
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Aurangabad");



  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=dubai",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

    humidity3.innerHTML = response.humidity;
	temp3.innerHTML = response.temp;
	wind_speed3.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));


	fetch(
		"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=England",
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  console.log(response);
	
		humidity4.innerHTML = response.humidity;
		temp4.innerHTML = response.temp;
		wind_speed4.innerHTML = response.wind_speed;
		})
		.catch((err) => console.error(err));

		fetch(
			"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan",
			options
		  )
			.then((response) => response.json())
			.then((response) => {
			  console.log(response);
		
			humidity5.innerHTML = response.humidity;
			temp5.innerHTML = response.temp;
			wind_speed5.innerHTML = response.wind_speed;
			})
			.catch((err) => console.error(err));	


			fetch(
				"https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Japan",
				options
			  )
				.then((response) => response.json())
				.then((response) => {
				  console.log(response);
			
				humidity6.innerHTML = response.humidity;
				temp6.innerHTML = response.temp;
				wind_speed6.innerHTML = response.wind_speed;
				})
				.catch((err) => console.error(err));	
		

  

