var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['Camisa 1', 'Camisa 2', 'Camisa 3',],

        datasets: [{
            label: 'Quantidade/dia',
            data: [200, 150, 175, ],
            backgroundColor: [
                'hsl(162, 56%, 46%)',
                'rgba(54, 162, 235, 1)',
                'rgba(100, 206, 86, 1)'

            ],
            borderColor: [
                'hsl(162, 56%, 46%)',
                'rgba(54, 162, 235, 1)',
                'rgba(100, 206, 85, 1)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});