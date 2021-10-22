//var todaysDate = $("#currentDay");
//todaysDate.text(moment().format("MMMM Do YYYY, h:mm:ss a"));

var update = function () {
  document.getElementById("currentDay").innerHTML = moment().format(
    "MMMM Do YYYY, h:mm:ss a"
  );
};
setInterval(update, 1000);

var timeEl = moment().format("H");

var nineBlock = document.getElementById("time-block-9");
var tenBlock = document.getElementById("time-block-10");
var elevenBlock = document.getElementById("time-block-11");
var twelveBlock = document.getElementById("time-block-12");
var oneBlock = document.getElementById("time-block-1");
var twoBlock = document.getElementById("time-block-2");
var threeBlock = document.getElementById("time-block-3");
var fourBlock = document.getElementById("time-block-4");
var fiveBlock = document.getElementById("time-block-5");

//9AM

if (timeEl < 9) {
  nineBlock.classList.add("future");
}

if (timeEl == 9) {
  nineBlock.classList.add("present");
}

if (timeEl > 9) {
  nineBlock.classList.add("past");
}

var plansNine = document.querySelector("#time-block-9");
var saveButton = document.querySelector("#save1");
var retrievePlans9 = localStorage.getItem("plansNine");

saveButton.addEventListener("click", function () {
  localStorage.setItem("plansNine", plansNine.value);
});

plansNine.textContent = retrievePlans9;

//10AM

if (timeEl < 10) {
  tenBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 10) {
  tenBlock.classList.add("present");
}

if (timeEl > 10) {
  tenBlock.classList.add("past");
}

//11AM

if (timeEl < 11) {
  elevenBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 11) {
  elevenBlock.classList.add("present");
}

if (timeEl > 11) {
  elevenBlock.classList.add("past");
}

//12PM

if (timeEl < 12) {
  twelveBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 12) {
  twelveBlock.classList.add("present");
}

if (timeEl > 12) {
  twelveBlock.classList.add("past");
}

//1PM

if (timeEl < 13) {
  oneBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 13) {
  oneBlock.classList.add("present");
}

if (timeEl > 13) {
  oneBlock.classList.add("past");
}

//2PM

if (timeEl < 14) {
  twoBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 14) {
  twoBlock.classList.add("present");
}

if (timeEl > 14) {
  twoBlock.classList.add("past");
}

//3PM

if (timeEl < 15) {
  threeBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 15) {
  threeBlock.classList.add("present");
}

if (timeEl > 15) {
  threeBlock.classList.add("past");
}

//4PM

if (timeEl < 16) {
  fourBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 16) {
  fourBlock.classList.add("present");
}

if (timeEl > 16) {
  fourBlock.classList.add("past");
}

//5PM

if (timeEl < 17) {
  fiveBlock.classList.add("future");

  console.log(timeEl);
}

if (timeEl == 17) {
  fiveBlock.classList.add("present");
}

if (timeEl > 17) {
  fiveBlock.classList.add("past");
}
