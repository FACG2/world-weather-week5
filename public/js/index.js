const cityInput = document.getElementById('cityName');
const cityButton = document.getElementById('serchButton');
var OptionList=document.getElementById('citieslist');
var weatherDive = document.getElementById("cityWeather");


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
			console.log(res);
	 		showWeather(res);
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
function showWeather(data){

		weatherDive.innerHTML="";
		cityInput.value="";
		OptionList.innerHTML="";

		var d = new Date();
		var dateDay=document.createElement('h3');
		dateDay.classList.add('dateDay');
		dateDay.textContent=d.toDateString();
		weatherDive.appendChild(dateDay);

		var temp=document.createElement('h3');
		temp.classList.add('cityTemp');
		temp.textContent=data.temp;
		weatherDive.appendChild(temp);

		var weatherDesc=document.createElement('p');
		weatherDesc.classList.add('weatherDesc');
		weatherDesc.textContent=data.description;
		weatherDive.appendChild(weatherDesc);

		var weatherIcon = document.createElement('img');
		weatherIcon.classList.add('weatherIcon');
		weatherIcon.setAttribute("src",data.icon);
		weatherDive.appendChild(weatherIcon);

		var pressure=document.createElement('h3');
		pressure.classList.add('pressure');
		pressure.textContent=data.pressure;
		weatherDive.appendChild(pressure);

		var humidity=document.createElement('h3');
		humidity.classList.add('humidity');
		humidity.textContent=data.humidity;
		weatherDive.appendChild(humidity);


	}

function ifCityNotFound(){
	weatherDive.innerHTML = "";
	cityInput.value="";
	var notFound=document.createElement('p');
		notFound.classList.add('notFound');
		notFound.textContent="Oops! there is no City matches your search!";
		weatherDive.appendChild(notFound);
}
