// $(document).ready(function(){
// 	var apiKey = "8bc0abd3d79d29fd03b0be4c4fbe5b71";
// 	var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q={" + city +"}&units=metric&APPID=" + apiKey;
// 	var temperature;
// 	var city;
	
	
// 	function cityCheck() {
// 		 city = document.getElementById("location").value

// 	$.getJSON(weatherURL,function(data){
// 		// console.log(data);
// 		 temperature = data.main.temp;


		


		

// 		var canvasMain = document.getElementById("main");
// 		var ctxMain = canvasMain.getContext("2d");
// 		ctxMain.beginPath();
// 		ctxMain.arc(200,200,90,0,Math.PI*2);
// 		ctxMain.stroke();

// 		 if(temperature >= 27) {
// 			ctxMain.fillStyle = "#ff471a";
// 		}else if(temperature >=18 && temperature <27 ){
// 			ctxMain.fillStyle = "#9fff80";
// 		}
// 		else if(temperature > 0 && temperature <= 17 ){
// 			ctxMain.fillStyle = "#b3e6ff";
// 		}
// 		else {ctxMain.fillStyle = "#1a53ff";}

// 		ctxMain.fill();
// 		ctxMain.closePath();

		





// 		// var ctxMain = canvasMain.getContext("2d");
// 		// ctxMain.lineWidth = 20;
// 		// ctxMain.strokeStyle = "red";
// 		// ctxMain.beginPath();
// 		// ctxMain.arc(200,200,95,Math.PI*1.5 ,0);
// 		// ctxMain.stroke();


			


// 	});

// return false;}
// });


var apiKey = "8bc0abd3d79d29fd03b0be4c4fbe5b71";
var weatherURL; 
var city;
var temp;

function cityCheck() {
		 city = document.getElementById("location").value
		weatherURL = "http://api.openweathermap.org/data/2.5/weather?q={" + city +"}&units=metric&APPID=" + apiKey;
		// console.log(weatherURL);
		$.getJSON(weatherURL, function(data){
			console.log(data)
			temp = data.main.temp;
			var canvasMain = document.getElementById("main");
 		var ctxMain = canvasMain.getContext("2d");
		ctxMain.beginPath();
		ctxMain.arc(200,200,90,0,Math.PI*2);
		ctxMain.stroke();

 		 if(temp >= 27) {
 			ctxMain.fillStyle = "#ff471a";
 		}else if(temp >=18 && temp <27 ){
 			ctxMain.fillStyle = "#9fff80";
 		}
 		else if(temp > 0 && temp < 18 ){
 			ctxMain.fillStyle = "#b3e6ff";
 		}
 		else {ctxMain.fillStyle = "#1a53ff";}

 		ctxMain.fill();
 		ctxMain.closePath();

 		ctxMain.beginPath();
		ctxMain.font = "30px Arial";
		ctxMain.fillStyle = "white";
		ctxMain.fillText( temp, 165, 210);
		
		ctxMain.fill();


		});
		return false;}

		


























