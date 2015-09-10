// Setting date
var daysUntil = function(date) {
  var startDate = Date.now();
  var endDate = Date.parse(date);
  var diff = new Date(endDate - startDate);
  var days = diff/1000/60/60/24;
  return Math.ceil(days);
}

var element = document.getElementById('countdown')
var date = element.getAttribute('data-end-date');
element.innerHTML = daysUntil(date);

// Drawing donut chart
var data = [
  { value: 1, color:"#19a9e5" },
  { value: 15, color: "#4f545c" }
];

var ctx = document.getElementById('progress').getContext('2d');
var progressChart = new Chart(ctx).Doughnut(data, { segmentShowStroke: false });

// setInterval(function () {
//     setRandomClass();
//     randomWait = Math.floor((Math.random() * 20000) + 2000);
// }, 2000);

function setRandomClass(items) {
   var number = items.length;
   var random = Math.floor((Math.random() * number));
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


// Duplicate HTML by a certain amount
function duplicateHTML(element, amount) {
  var elementhtml = element.html();
  var newhtml = elementhtml;

  for(i = 0; i < amount; i++) {
    newhtml += elementhtml;
  }

  element.html(newhtml);
}

$(function() {
  // For each list--scroll we duplicate the HTML many times to do the looping
  // (This is really dirty code, but fine for being displayed in TV internally)

  $('.js-scroll').each(function() {
    duplicateHTML($(this), 200);
  });

  // Reload everyday (86400000 ms = 24h)
  setTimeout(function() {
    location.reload();
  }, 86400000);
});
