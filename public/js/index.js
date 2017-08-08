const cityInput = document.getElementById('cityName');
const cityButton = document.getElementById('serchButton');

cityInput.addEventListener('keyup',()=>{
	 post('/suggest',cityName.value,(res)=>{
	 	console.log(res);
	 } )
})

cityButton.addEventListener('submit',()=>{
	 post('/submit',cityName.value,(res)=>{
	 	console.log(res);
	 } )
})
