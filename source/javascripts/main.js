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
  { value: 100, color:"#19a9e5" },
  { value: 45, color: "#4f545c" }
];

var ctx = document.getElementById('progress').getContext('2d');
var progressChart = new Chart(ctx).Doughnut(data, { segmentShowStroke: false });
