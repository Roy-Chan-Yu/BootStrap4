var btn = document.querySelector('.btn-slide');

btn.addEventListener('click', function() {
    document.querySelector('.side-nav').classList.toggle('slide');
    document.querySelector('.open').classList.toggle('d-none');
    document.querySelector('.close').classList.toggle('d-none');
})

// Chart 1

var ctx = document.getElementById('myChart1').getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue','Yellow','Green','Purple','Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
            ],
            borderWidth: 3,    
        }]
    }
})

// Chart 2

const data = {
    labels: [
        'Red', 'Blue','Yellow','Green','Purple','Orange'
    ],
    datasets: [{
      label: '# of Votes',
      data: [300, 50, 100, 124, 200, 400],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
      ],
      hoverOffset: 6
    }]
  };

const config = {
    type: 'doughnut',
    data: data,
};

const myChart2 = new Chart(
    document.getElementById('myChart2'),
    config
);

// Chart 3

const category = ['My First Dataset','Red', 'Blue','Yellow','Green','Purple','Orange'];

const data3 = {
    labels: [
        'Red', 'Blue','Yellow','Green','Purple','Orange'
    ],
    datasets: [{
      label: '# of Votes',
      data: [300, 50, 100, 124, 200, 400],
      backgroundColor: [
        'rgba(255, 99, 132, 0.9)',
                'rgba(54, 162, 235, 0.9)',
                'rgba(255, 206, 86, 0.9)',
                'rgba(75, 192, 192, 0.9)',
                'rgba(153, 102, 255, 0.9)',
                'rgba(255, 159, 64, 0.9)'
      ],
      hoverOffset: 6
    }]
  };

const configLine = {
    type: 'line',
    data: data3,
};

const myChart3 = new Chart(
    document.getElementById('myChart3'),
    configLine
)

