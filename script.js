

$(function(){
    let d = new Date();
    
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    // let currentHours = d.getHours();
    // let currentMinutes = d.getMinutes();
    // let currentSeconds = d.getSeconds();

    // currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    // currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    
    // let timeOfDay = (currentHours < 12) ? "AM" : "PM";

    // currentHours = (currentHours > 12) ? currentHours - 12: currentHours;

    // let hourOutput = currentHours + ":" + currentMinutes + ":" + currentSeconds 
    


    let totalDays = new Date(year, month, 0).getDate();

    let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year;

    // let output =  `${month}/${day}/${year}`


    $('#currentDay').text(output)



const btn = document.getElementById("btnOne")
const ins = document.getElementById("insert")

btn.onclick =function () {
    
    const key = ins.value;

    if(key) {
        localStorage.setItem("key", key);
        location.reload();
        
    }
}

    

})

function updateClock ( ) {
 	let currentTime = new Date ( );
  	let currentHours = currentTime.getHours ( );
  	let currentMinutes = currentTime.getMinutes ( );
  	let currentSeconds = currentTime.getSeconds ( );

  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	let timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";

  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

  	currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	let hourOutput = `${currentHours}:${currentMinutes}:${currentSeconds}  ${timeOfDay}`;
  	
  	
    $('#currentHourDay').text(hourOutput)
   	  	
 };

$(document).ready(function(){
   setInterval('updateClock()', 1000);
});


