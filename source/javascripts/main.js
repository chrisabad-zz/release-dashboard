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
   var random = Math.floor((Math.random() * number));
   items.eq(random).addClass("pulse");
   setTimeout(function() {
       items.eq(random).removeClass("pulse");
   }, 4000);
}

(function loop() {
   var rand = Math.round(Math.random() * (4000 - 200)) + 200;

   var ul = $(".list");
   var items = ul.find(".tick");

   setTimeout(function() {
       setRandomClass(items);
       loop();
   }, rand);
}());


// ===================
// Animating list
// ===================
function animateListIn() {
  var elems = $(".list");
  var elemsChild = $(".list li");
  elemsChild.css({
    transform: 'translateY(40px) scale(0.98)',
    opacity: 0
  });
  setTimeout(function() {
    var delay = 400;
    elemsChild.each(function(){
      animate({
        el: $(this),
        translateY: 0,
        opacity: 1,
        scale: 1,
        duration: 1000,
        delay: delay,
        easing: 'cubic-bezier(.13,.68,.36,1.1)'
      });
      delay += 50;
    });
  }, 2000);

}

function animateListOut() {
  var delay = 0;
  var elems = $(".list");
  var elemsChild = $(".list li");
  var countEl = elems.children().length - 1;

  elemsChild.each(function(i){
    animate({
      el: $(this),
      translateY: '0',
      translateX: '0',
      opacity: 0,
      scale: 0.98,
      duration: 1000,
      delay: delay,
      easing: 'cubic-bezier(.58,-0.14,.94,.2)',
      complete: function() {
        if(i >= countEl) {
          setTimeout(function() {
            animateListIn();
          }, 1000);
        }
      }
    });
    delay += 50;
  });
}



animateListIn();
setTimeout(function() {
  window.setInterval(function(){
    animateListOut();
  }, 60000);
}, 60000);

// Reloads page every 5min
var rate = 60000 * 5;
setTimeout(function() {
  location.reload(true);
}, rate);
