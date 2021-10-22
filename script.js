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
var saveButtonNine = document.querySelector("#save9");
var retrievePlansNine = localStorage.getItem("plansNine");

saveButtonNine.addEventListener("click", function () {
  localStorage.setItem("plansNine", plansNine.value);
});

plansNine.textContent = retrievePlansNine;

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

var plansTen = document.querySelector("#time-block-10");
var saveButtonTen = document.querySelector("#save10");
var retrievePlansTen = localStorage.getItem("plansTen");

saveButtonTen.addEventListener("click", function () {
  localStorage.setItem("plansTen", plansTen.value);
});

plansTen.textContent = retrievePlansTen;

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

var plansEleven = document.querySelector("#time-block-11");
var saveButtonEleven = document.querySelector("#save11");
var retrievePlansEleven = localStorage.getItem("plansEleven");

saveButtonEleven.addEventListener("click", function () {
  localStorage.setItem("plansEleven", plansEleven.value);
});

plansEleven.textContent = retrievePlansEleven;

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

var plansTwelve = document.querySelector("#time-block-12");
var saveButtonTwelve = document.querySelector("#save12");
var retrievePlansTwelve = localStorage.getItem("plansTwelve");

saveButtonTwelve.addEventListener("click", function () {
  localStorage.setItem("plansTwelve", plansTwelve.value);
});

plansTwelve.textContent = retrievePlansTwelve;

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

var plansOne = document.querySelector("#time-block-1");
var saveButtonOne = document.querySelector("#save1");
var retrievePlansOne = localStorage.getItem("plansOne");

saveButtonOne.addEventListener("click", function () {
  localStorage.setItem("plansOne", plansOne.value);
});

plansOne.textContent = retrievePlansOne;

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

var plansTwo = document.querySelector("#time-block-2");
var saveButtonTwo = document.querySelector("#save2");
var retrievePlansTwo = localStorage.getItem("plansTwo");

saveButtonTwo.addEventListener("click", function () {
  localStorage.setItem("plansTwo", plansTwo.value);
});

plansTwo.textContent = retrievePlansTwo;

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

var plansThree = document.querySelector("#time-block-3");
var saveButtonThree = document.querySelector("#save3");
var retrievePlansThree = localStorage.getItem("plansThree");

saveButtonThree.addEventListener("click", function () {
  localStorage.setItem("plansThree", plansThree.value);
});

plansThree.textContent = retrievePlansThree;

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

var plansFour = document.querySelector("#time-block-4");
var saveButtonFour = document.querySelector("#save4");
var retrievePlansFour = localStorage.getItem("plansFour");

saveButtonFour.addEventListener("click", function () {
  localStorage.setItem("plansFour", plansFour.value);
});

plansFour.textContent = retrievePlansFour;

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

var plansFive = document.querySelector("#time-block-5");
var saveButtonFive = document.querySelector("#save5");
var retrievePlansFive = localStorage.getItem("plansFive");

saveButtonFive.addEventListener("click", function () {
  localStorage.setItem("plansFive", plansFive.value);
});

plansFive.textContent = retrievePlansFive;
