// ------------------------------------------NAVBAR---------------------------------------------------
// Set the countdown date (adjust the date as per your requirements)
var countdownDate = new Date("June 04, 2023 10:00:00").getTime();

// Update the countdown every 1 second
var countdown = setInterval(function() {
  // Get current date and time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countdownDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display a message
  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "We Are Live!";
  }
}, 1000);

// Hamburger Menu JS
document.querySelector('.hamburger-menu').addEventListener('click', function() {
  var navbar = document.getElementById('navbar-id');
  navbar.classList.toggle('show-mobile-menu');
});



// ---------------------------------EVENT SCHEDULE------------------------------------------------
//Expnad Functionality
const expand_btn = document.querySelector(".expand");
const ev_schedule_div = document.querySelector("#event_schedule");
expand_btn.addEventListener("click", () => {
  ev_schedule_div.style.height = "auto";
  expand_btn.style.display = "none";
});

//Different days and events visibility
const day1 = document.querySelector("#d_1");
const day2 = document.querySelector("#d_2");
const day3 = document.querySelector("#d_3");

const timelines_day_1 = document.querySelector("#timeline_day-1");
const timelines_day_2 = document.querySelector("#timeline_day-2");
const timelines_day_3 = document.querySelector("#timeline_day-3");

day1.addEventListener("click", () => {
  timelines_day_1.classList.remove("hidden_timeline");
  timelines_day_2.classList.add("hidden_timeline");
  timelines_day_3.classList.add("hidden_timeline");
});

day2.addEventListener("click", () => {
  timelines_day_1.classList.add("hidden_timeline");
  timelines_day_2.classList.remove("hidden_timeline");
  timelines_day_3.classList.add("hidden_timeline");
});

day3.addEventListener("click", () => {
  timelines_day_1.classList.add("hidden_timeline");
  timelines_day_2.classList.add("hidden_timeline");
  timelines_day_3.classList.remove("hidden_timeline");
});
