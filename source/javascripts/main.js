var data = [
    {
      value: 100,
      color:"#19a9e5"
    },
    {
      value: 45,
      color: "#4f545c"
    }
  ];
var ctx = document.getElementById('progress').getContext('2d');
var progressChart = new Chart(ctx).Doughnut(data, {
  segmentShowStroke: false,
});
