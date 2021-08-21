function updateTime() {
     var dateInfo = new Date();
   
     /* time */
     var hr,
       _min = (dateInfo.getMinutes() < 10) ? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
       sec = (dateInfo.getSeconds() < 10) ? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
       ampm = (dateInfo.getHours() >= 12) ? "PM" : "AM";
   
     // replace 0 with 12 at midnight, subtract 12 from hour if 13–23
     if (dateInfo.getHours() == 0) {
       hr = 12;
     } else if (dateInfo.getHours() > 12) {
       hr = dateInfo.getHours() - 12;
     } else {
       hr = dateInfo.getHours();
     }
   
     var currentTime = hr + ":" + _min + ":" + sec;
   
     // print time
     document.getElementsByClassName("hms")[0].innerHTML = currentTime;
     document.getElementsByClassName("ampm")[0].innerHTML = ampm;
   
     /* date */
     var dow = [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday"
       ],
       month = [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December"
       ],
       day = dateInfo.getDate();
   
     // store date
     var currentDate = dow[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + day;
   
     document.getElementsByClassName("date")[0].innerHTML = currentDate;
   };
   
   // print time and date once, then update them every second
   updateTime();
   setInterval(function() {
     updateTime()
   }, 1000);
/***************************/

$('.navbar-toggler').click(function() {
     if($('.navbar-bg').css('display') == 'none') {
       $('.navbar-bg').css('display', 'block');
       $('.navbar-collapse').addClass('show');
       $('.navbar-collapse').addClass('collapsed');
       // $('.navbar-collapse').css('position', 'fixed');
     }else {
       $('.navbar-bg').css('display', 'none');
       $('.navbar-collapse').removeClass('show');
       $('.navbar-collapse').removeClass('collapsed');
     }
     });
     
     $('.navbar-bg').click(function() {
     $('.navbar-bg').css('display', 'none');
     $('.navbar-collapse').removeClass('show');
     $('.navbar-collapse').removeClass('collapsed');
     });
     
     $('.close-collapse').click(function() {
     $('.navbar-bg').css('display', 'none');
     $('.navbar-collapse').removeClass('show');
     $('.navbar-collapse').removeClass('collapsed');
     });
     
/*****************************/
// Analog Clock

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();

// Clock Sector
var start_hour = 1;
var end_hour = 3;

var hoursStart = (start_hour + 0 / 60 + 20 /60 / 60) * 360 /12;
$(".start").css("transform", "rotate(" + hoursStart + "deg)");
var hoursEnd = (end_hour + 0 / 60 + 20 /60 / 60) * 360 /12;
$(".end").css("transform", "rotate(" + hoursEnd + "deg)");


var start =  hoursStart + 90;
var end = hoursEnd - 90;

$(".clock")
	.css("background-color", "blue")
	.css("background-image", 
	"linear-gradient(" + end +"deg, #282828 50%, transparent 50%),linear-gradient(" + start +"deg, #282828 50%, transparent 50%)");

  $(".inner-clock-face")
	.css("background-color", "blue")
	.css("background-image", 
	"linear-gradient(" + end +"deg, #282828 50%, transparent 50%),linear-gradient(" + start +"deg, #282828 50%, transparent 50%)");