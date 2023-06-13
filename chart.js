const data = {
  labels: [
    'Red',
    'Yellow',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [12.8, 36.2, 50.7],
    backgroundColor: [
      'rgb(204, 0, 0)',
      'rgb(255, 255, 51)',
      'rgb(0, 102, 204)'
    ],
    borderColor: '#000',
    borderWidth: 3,
    hoverOffset: 4
  }]
};

// On configure notre chart
const config = {
  type: 'doughnut',
  data: data,

  options: {
    aspectRatio: 1,
    responsive: true,  
}
}

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);



