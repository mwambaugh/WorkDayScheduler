//hooks to DOM
var currentDay = document.querySelector("#currentDay");
var textSelect = document.querySelectorAll("textarea");
console.log(textSelect);
var saveBtn = document.querySelector(".saveBtn");

//state var
var timeStamp = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var currentTime = moment().format("HH");

//element text
currentDay.textContent = timeStamp;

// for loop to go through the text length and comparing each text area in the array to the current data time hour/number AND add past/present/future css class
for (let i = 0; i < textSelect.length; i++) {
//datatime is the time number on each element in he HTML via textselect
  var dataTime = textSelect[i].dataset.time;
  console.log(dataTime);
  console.log(currentTime);
  if (dataTime === currentTime) {
    textSelect[i].classList.add("present");
  } else if (dataTime > currentTime) {
    textSelect[i].classList.add("future");
  } else if (dataTime < currentTime) {
    textSelect[i].classList.add("past");
  }
}

// $(document).ready(function(){
// Save btn event listener to to-do items 
$(".saveBtn").on("click", function (event) {
    var toDo = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // event.defaultPrevented;

// Save To Do Items in Local Storage
localStorage.setItem(time, toDo);
})

// Get & display toDo item, description class, from local storage under hour id
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

