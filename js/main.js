document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', updateBudget);
});

function updateBudget() {
    const categories = ['education', 'healthcare']; // Add other categories as needed
    let total = 0;
    categories.forEach(cat => {
        const value = parseInt(document.getElementById(cat).value);
        document.getElementById(`${cat}-value`).textContent = `${value}%`;
        total += value;
    });
    
    document.getElementById('total-budget').textContent = `${total}%`;
    if (total > 100) {
        document.getElementById('total-budget').style.color = 'red';
        alert('Total budget cannot exceed 100%!');
    } else {
        document.getElementById('total-budget').style.color = 'black';
    }

    updateChart(categories.map(cat => parseInt(document.getElementById(cat).value)));
}

function updateChart(data) {
    chart.data.datasets[0].data = data;
    chart.update();
}

document.getElementById('reset-button').addEventListener('click', () => {
    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.value = 20; // Default value, adjust as needed
        input.dispatchEvent(new Event('input'));
    });
});
