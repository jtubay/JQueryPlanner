//this function runs when the page loads
$(function() {
  let d = new Date();

  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let day = d.getDate();

  // let totalDays = new Date(year, month, 0).getDate();

  // let output = (month<10 ? '0' : '') + month + '/' + (day<10 ? '0' : '') + day + '/' + year;

  // let output =  `${month}/${day}/${year}`

  //below are variables and functions used to display current date using moment.js
  const m = moment();
  const currentT = m.format("LL");

  $("#currentDay").text(currentT);

  //this is the code that gives the buttons onclicks and saves the input to ls and displays it
  $("#btnOne").on("click", function(event) {
    event.preventDefault();
    const key = $("#insert").val();
    // ins.value;

    if (key) {
      localStorage.setItem("key", JSON.stringify(key));
      location.reload();
    }
  });
  //used to display ls
  const disOne = JSON.parse(localStorage.getItem("key"));
  $("#displayOne").text(disOne);

  $("#btnTwo").on("click", function() {
    const keyTwo = $("#insertTwo").val();

    if (keyTwo) {
      localStorage.setItem("keyTwo", JSON.stringify(keyTwo));
      location.reload();
    }
  });

  const disTwo = JSON.parse(localStorage.getItem("keyTwo"));
  $("#displayTwo").text(disTwo);

  $("#btnThree").on("click", function() {
    const keyThree = $("#insertThree").val();

    if (keyThree) {
      localStorage.setItem("keyThree", JSON.stringify(keyThree));
      location.reload();
    }
  });

  const disThree = JSON.parse(localStorage.getItem("keyThree"));
  $("#displayThree").text(disThree);

  $("#btnFour").on("click", function() {
    const keyFour = $("#insertFour").val();

    if (keyFour) {
      localStorage.setItem("keyFour", JSON.stringify(keyFour));
      location.reload();
    }
  });

  const disFour = JSON.parse(localStorage.getItem("keyFour"));
  $("#displayFour").text(disFour);

  $("#btnFive").on("click", function() {
    const keyFive = $("#insertFive").val();

    if (keyFive) {
      localStorage.setItem("keyFive", JSON.stringify(keyFive));
      location.reload();
    }
  });

  const disFive = JSON.parse(localStorage.getItem("keyFive"));
  $("#displayFive").text(disFive);

  $("#btnSix").on("click", function() {
    const keySix = $("#insertSix").val();

    if (keySix) {
      localStorage.setItem("keySix", JSON.stringify(keySix));
      location.reload();
    }
  });

  const disSix = JSON.parse(localStorage.getItem("keySix"));
  $("#displaySix").text(disSix);

  $("#btnSeven").on("click", function() {
    const keySeven = $("#insertSeven").val();

    if (keySeven) {
      localStorage.setItem("keySeven", JSON.stringify(keySeven));
      location.reload();
    }
  });

  const disSeven = JSON.parse(localStorage.getItem("keySeven"));
  $("#displaySeven").text(disSeven);

  $("#btnEight").on("click", function() {
    const keyEight = $("#insertEight").val();

    if (keyEight) {
      localStorage.setItem("keyEight", JSON.stringify(keyEight));
      location.reload();
    }
  });

  const disEight = JSON.parse(localStorage.getItem("keyEight"));
  $("#displayEight").text(disEight);

  $("#btnNine").on("click", function() {
    const keyNine = $("#insertNine").val();

    if (keyNine) {
      localStorage.setItem("keyNine", JSON.stringify(keyNine));
      location.reload();
    }
  });

  const disNine = JSON.parse(localStorage.getItem("keyNine"));
  $("#displayNine").text(disNine);

  //end of onclicks and ls display
});
//used to update and display current time
function updateClock() {
  let currentTime = new Date();
  let currentHours = currentTime.getHours();
  let currentMinutes = currentTime.getMinutes();
  let currentSeconds = currentTime.getSeconds();

  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  let timeOfDay = currentHours < 12 ? "AM" : "PM";

  currentHours = currentHours > 12 ? currentHours - 12 : currentHours;

  currentHours = currentHours == 0 ? 12 : currentHours;

  let hourOutput = `${currentHours}:${currentMinutes}:${currentSeconds}  ${timeOfDay}`;

  $("#currentHourDay").text(hourOutput);
}
//sets up a time interval on load to get the clock going
$(document).ready(function() {
  setInterval("updateClock()", 1000);
});
