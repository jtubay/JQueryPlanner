

$(function(){
    let d = new Date();
    
    let year = d.getFullYear();
    let month = d.getMonth()+1;
    let day = d.getDate();
    
    


    // let totalDays = new Date(year, month, 0).getDate();

    // let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year;

    // let output =  `${month}/${day}/${year}`
    const m = moment();
    const currentT = m.format("LL")

    $('#currentDay').text(currentT)






$("#btnOne").on("click", function(event) {
    event.preventDefault()
    const key = $("#insert").val()
    // ins.value;

    if(key) {
        localStorage.setItem("key", JSON.stringify(key));
        location.reload();
    }
    
    
})

const last = JSON.parse(localStorage.getItem("key"))
    $("#displayOne").text(last)

$("#btnTwo").on("click", function() {
    const keyTwo = $("#insertTwo").val()
    
    if(keyTwo) {
        localStorage.setItem("keyTwo", keyTwo);
        location.reload();
        
    }
})

$("#btnThree").on("click", function() {
    const keyThree = $("#insertThree").val()
    
    if(keyThree) {
        localStorage.setItem("keyThree", keyThree);
        location.reload();
        
    }
})

$("#btnFour").on("click", function() {
    const keyFour = $("#insertFour").val()
    
    if(keyFour) {
        localStorage.setItem("keyFour", keyFour);
        location.reload();
        
    }
})

$("#btnFive").on("click", function() {
    const keyFive = $("#insertFive").val()
    
    if(keyFive) {
        localStorage.setItem("keyFive", keyFive);
        location.reload();
        
    }
})

$("#btnSix").on("click", function() {
    const keySix = $("#insertSix").val()
    
    if(keySix) {
        localStorage.setItem("keySix", keySix);
        location.reload();
        
    }
})

$("#btnSeven").on("click", function() {
    const keySeven = $("#insertSeven").val()
    
    if(keySeven) {
        localStorage.setItem("keySeven", keySeven);
        location.reload();
        
    }
})

$("#btnEight").on("click", function() {
    const keyEight = $("#insertEight").val()
    
    if(keyEight) {
        localStorage.setItem("keyEight", keyEight);
        location.reload();
        
    }
})

$("#btnNine").on("click", function() {
    const keyNine = $("#insertNine").val()
    
    if(keyNine) {
        localStorage.setItem("keyNine", keyNine);
        location.reload();
        
    }
})


    
    


    

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


