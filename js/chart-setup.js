const ctx = document.getElementById('budgetChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Education', 'Healthcare', 'Defense', 'Entertainment'], // Adjust as needed
        datasets: [{
            label: 'Budget Allocation',
            data: [20, 30, 10, 40], // Example initial data
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});

function updateChart(data) {
    chart.data.datasets[0].data = data;
    chart.update();
}
