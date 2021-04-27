var timeDisplayEl = $("#rightNow");
var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
var currentHour = moment().format("hh");

//----------Current Date and Time --------
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplayEl.text(rightNow);
}

// var timeSlotBackgroud = $("#textArea");
// var hours = [7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7];
// var militaryTime = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
// var hourName = [
//   "hour9",
//   "hour10",
//   "hour11",
//   "hour12",
//   "hour1",
//   "hour2",
//   "hour3",
//   "hour4",
//   "hour5",
//   "hour6",
//   "hour7",
// ];
// var saveBtn = $(".saveBtn");
// var userInput = $("#appointmentTitle");

// for (var i = 0; i < hours.length; i++) {
//   var newRow = $("<row>");
//   $(".container").append(newRow);

//   var newTimeCol = $("<col>").addClass("hour", "col-3 hour").text(hours[i]);
//   var newInputCol = $("<col>")
//     .addClass("input", "col-8 input")
//     .html("<textArea rows='2' style='width: 100%; height: 100%'></textArea>");
//   newRow.append(newTimeCol, newInputCol);
//   newInputCol.attr("id", hourName[i]);

//   newRow.addClass("timeBlock row");
//   newRow.attr("id", militaryTime[i]);

//   var newBtn = $("<button>").addClass("saveBtn", "fas fa-save col-1");
//   newRow.append(newBtn);

//   if (hours[i] === 12) {
//     newTimeCol.text(hours[i] + "PM");
//   } else if (hours[i] < 12) {
//     newTimeCol.text(hours[i] + "AM");
//   } else {
//     newTimeCol.text(hours[i] + "PM");
//   }
// }
// //todo on click
// // var userInputLocation = document.getElementById("#locationInput");
// var lsOutput = $("#lSOutput");
// // //Save Appointment to local storage
// // saveBtn.addEventListener("click", function () {
// //   getUserInputFromLocalStorage();
// // });

// // //   // create object from user input
// // //   var appointmentInfo = {
// // //     appointment: userInput.value.trim(),
// // //   };

// // //   // set user input to local storage
// // // //   window.localStorage.setItem(
// // // //     "title, descrption",
// // // //     JSON.stringify(appointmentInfo)
// // // // //   );
// // // // // });

// // // function getUserInputFromLocalStorage() {
// // //   window.localStorage.getItem("appointmentInput);
// // //   JSON.parse(window.localStorage.getItem("appointmentInfo"));
// // //   console.log(localStorage);
// // // }

setInterval(displayTime, 1000);
