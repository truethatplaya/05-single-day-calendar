//global variables
var timeDisplayEl = $("#rightNow");

//Current Date and Time
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

//Save Appointment
function saveAppointment() {
  var storeAppointment = localStorage.getItem("textArea");
  console.log(storeAppointment);
}

var saveBtn = document.querySelector(".saveBtn");
var userInput = document.querySelector("textArea");

//when save button is clicked
saveBtn.addEventListener("click", function (event) {
  event.preventDefault();
  saveAppointment();

  // create object from user input
  var appointmentInfo = {
    appointment: userInput.value.trim(),
  };

  // set user input to local storage
  localStorage.setItem("appointmentInfo", JSON.stringify(appointmentInfo));
});

setInterval(displayTime, 1000);
