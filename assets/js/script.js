var timeDisplayEl = $("#rightNow");
var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
var currentHour = moment().format("HH");
console.log(currentHour);

//----------Current Date and Time --------
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

var timeSlotBackgroud = $("#textArea");
var militaryTime = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var hourName = [
  "hour9",
  "hour10",
  "hour11",
  "hour12",
  "hour1",
  "hour2",
  "hour3",
  "hour4",
  "hour5",
  "hour6",
  "hour7",
];
var saveBtn = $(".saveBtn");
var userInput = $("#appointmentTitle");

//make 9 set items and 9 get items
localStorage.setItem("key", "value");
localStorage.getItem("key", "value");

//cli

// //todo on click
// var userInputLocation = document.getElementById("#locationInput");
// var lsOutput = $("#lSOutput");
// // //Save Appointment to local storage
// saveBtn.addEventListener("click", function () {
//   getUserInputFromLocalStorage();
// });

//   // create object from user input
//   var appointmentInfo = {
//     appointment: userInput.value.trim(),
//   };

//   // set user input to local storage
//   window.localStorage.setItem(
//     "title, descrption",
//     JSON.stringify(appointmentInfo)
//   );
// });

// function getUserInputFromLocalStorage() {
//   window.localStorage.getItem("appointmentInput);
//   JSON.parse(window.localStorage.getItem("appointmentInfo"));
//   console.log(localStorage);
// }

setInterval(displayTime, 1000);
