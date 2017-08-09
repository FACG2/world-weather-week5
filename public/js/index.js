const cityInput = document.getElementById('cityName');
const cityButton = document.getElementById('serchButton');
var OptionList=document.getElementById('citieslist');
var weatherDive = document.getElementById("cityWeather");
var weatherDivTomow = document.getElementById("weatherDivTomow");
var Notfound = document.getElementById("Notfound");

cityInput.addEventListener('keyup',()=>{
	 post('/suggest',cityName.value,(res)=>{
	 	showSug(res);
	 } )
})

cityButton.addEventListener('click',(event)=>{
	event.preventDefault();
	 post('/submit',cityName.value,(res)=>{
		//  console.log(res);
	 	if(res === "city does not exist"){
	 		ifCityNotFound();
	 	}else{
	 		showTodayWeather(res);
	 		showTommowWeather(res);
	 	}
	 })
})

function showSug(data){
		OptionList.innerHTML="";
		data.map(function(option){
		var optionItem=document.createElement('option');
		optionItem.classList.add('option');
		optionItem.textContent=option;
		optionItem.setAttribute("value", option);
		OptionList.appendChild(optionItem);
		})
	}
//{description: "scattered clouds", icon: "http://openweathermap.org/img/w/03n.png", temp: "28.00", pressure: 1009, humidity: 74}
function showTodayWeather(data){
		weatherDive.innerHTML="";
		cityInput.value="";
		OptionList.innerHTML="";
		Notfound.innerHTML="";
		weatherDive.style.display="inline-block";

		var descWeathTod=document.createElement('div');
		descWeathTod.classList.add('descWeathTod');

		var theday=document.createElement('h2');
		theday.classList.add('theDay');
		theday.textContent="Today's weather";
		weatherDive.appendChild(theday);

		var mainOne=document.createElement('div');
		mainOne.classList.add('mainOne');

		var d = new Date();
		var dateDay=document.createElement('h3');
		dateDay.classList.add('dateDay');
		dateDay.textContent=d.toDateString();
		descWeathTod.appendChild(dateDay);

		var weatherDesc=document.createElement('p');
		weatherDesc.classList.add('weatherDesc');
		weatherDesc.textContent=data.today.description;
		descWeathTod.appendChild(weatherDesc);


		var weatherIcon = document.createElement('img');
		weatherIcon.classList.add('weatherIcon');
		weatherIcon.setAttribute("src",data.today.icon);
		descWeathTod.appendChild(weatherIcon);

		mainOne.appendChild(descWeathTod);


		var numbersToday=document.createElement('div');
		numbersToday.classList.add('numbersToday');

		var temp=document.createElement('h3');
		temp.classList.add('cityTemp');
		temp.textContent="Temp: " + data.today.temp + " °C";
		numbersToday.appendChild(temp);	

		var pressure=document.createElement('h3');
		pressure.classList.add('pressure');
		pressure.textContent="Pressure: " + data.today.pressure + " Pa";
		numbersToday.appendChild(pressure);

		var humidity=document.createElement('h3');
		humidity.classList.add('humidity');
		humidity.textContent="Humidity: " + data.today.humidity + "%";
		numbersToday.appendChild(humidity);

		mainOne.appendChild(numbersToday);

		weatherDive.appendChild(mainOne);
	}


function showTommowWeather(data){
		weatherDivTomow.innerHTML="";
		Notfound.innerHTML="";
		weatherDivTomow.style.display="inline-block"


		var descWeathTomow=document.createElement('div');
		descWeathTomow.classList.add('descWeathTomow');

		var theday1=document.createElement('h2');
		theday1.classList.add('theDay1');
		theday1.textContent="Tomorrow's weather";
		weatherDivTomow.appendChild(theday1);

		var mainOne=document.createElement('div');
		mainOne.classList.add('mainOne');


		var today = new Date();
		var tomorrow = new Date(today.getTime() + (24 * 60 * 60 * 1000));




		var dateDay=document.createElement('h3');
		dateDay.classList.add('dateDay');
		dateDay.textContent=tomorrow.toDateString();
		descWeathTomow.appendChild(dateDay);



		var weatherDesc=document.createElement('p');
		weatherDesc.classList.add('weatherDesc');
		weatherDesc.textContent=data.tommorrow.description;
		descWeathTomow.appendChild(weatherDesc);

		var weatherIcon = document.createElement('img');
		weatherIcon.classList.add('weatherIcon');
		weatherIcon.setAttribute("src",data.tommorrow.icon);
		descWeathTomow.appendChild(weatherIcon);
		

		mainOne.appendChild(descWeathTomow);


		var numbersTomow=document.createElement('div');
		numbersTomow.classList.add('numbersTomow');

		var temp=document.createElement('h3');
		temp.classList.add('cityTemp');
		temp.textContent="Temp: " + data.tommorrow.temp + " °C";
		numbersTomow.appendChild(temp);

		var pressure=document.createElement('h3');
		pressure.classList.add('pressure');
		pressure.textContent="Pressure: " + data.tommorrow.pressure + " Pa";
		numbersTomow.appendChild(pressure);

		var humidity=document.createElement('h3');
		humidity.classList.add('humidity');
		humidity.textContent="Humidity: " + data.tommorrow.humidity +"%";
		numbersTomow.appendChild(humidity);


		mainOne.appendChild(numbersTomow)


		weatherDivTomow.appendChild(mainOne)	


	}
function ifCityNotFound(){
	weatherDive.innerHTML = "";
	cityInput.value="";
	weatherDivTomow.innerHTML="";
	Notfound.innerHTML="";

	var notFoundp=document.createElement('p');
		notFoundp.classList.add('notFoundp');
		notFoundp.textContent="Oops! there is no City matches your search!";
		Notfound.appendChild(notFoundp);
}
