const data = {
  labels: [
    'Autres atteintes',
    'Violence physique',
    'Violence verbale'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [12.8, 36.2, 50.7],
    backgroundColor: [
      'rgb(201, 36, 43)',
      'rgb(250, 199, 17)',
      'rgb(0, 159, 227)'
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



