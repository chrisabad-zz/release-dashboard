// ===================
// Countdown days
// ===================
function daysUntil(dateInput) {
  var startDate = Date.now();
  var endDate = Date.parse(dateInput);
  var diff = new Date(endDate - startDate);
  var days = Math.ceil(diff/1000/60/60/24);
  if (days > 1) {
    return days + ' days left';
  }
  else {
    return days + ' day left';
  }
}

var countdown = $('#countdown');
var date = countdown.data('end-date');
countdown.html(daysUntil(date));



// ===================
// Ends Date formatting
// format: YYYY-MM-DD
// ===================
function formatDate(dateInput) {
  var currentDate = new Date(dateInput);
  var newDate = {
    day: '',
    date: '',
    dateSuffix: 'th',
    month: ''
  }
  var weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  newDate['day'] = weekDays[currentDate.getDay()];
  newDate['date'] = currentDate.getDate();
  newDate['month'] = months[currentDate.getMonth()];

  if (currentDate.getDate() == 1 || currentDate.getDate() == 21 || currentDate.getDate() == 31) newDate['dateSuffix'] = 'st';
  if (currentDate.getDate() == 2 || currentDate.getDate() == 22) newDate['dateSuffix'] = 'nd';
  if (currentDate.getDate() == 3 || currentDate.getDate() == 23) newDate['dateSuffix'] = 'rd';

  var stringDateDisplayed = 'ends ' + newDate['day'] + ' ' + newDate['date'] + newDate['dateSuffix'] + ' ' + newDate['month'];

  return stringDateDisplayed;
}

var endsDate = $('#endDate');
var date = endsDate.data('end-date');
endsDate.html(formatDate(date));



// ===================
// Pulsing
// ===================
function setRandomClass(items) {
   var number = items.length;
   var random = Math.floor((Math.random() * number / 300));
   items.eq(random).addClass("pulse");
   setTimeout(function() {
       items.eq(random).removeClass("pulse");
   }, 2000);
}

(function loop() {
   var rand = Math.round(Math.random() * (8000 - 200)) + 200;

   var ul = $(".section--main .list");
   var items = ul.find(".tick");

   setTimeout(function() {
       setRandomClass(items);
       loop();
   }, rand);
}());
