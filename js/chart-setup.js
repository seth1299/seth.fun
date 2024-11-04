const ctx = document.getElementById('budgetChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Education', 'Healthcare'], // Add other categories as needed
        datasets: [{
            label: 'Budget Allocation',
            data: [20, 30], // Example initial values
            backgroundColor: ['#FF6384', '#36A2EB'] // Add more colors as needed
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
});
