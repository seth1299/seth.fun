document.querySelectorAll('input[type="range"]').forEach(input => {
    input.addEventListener('input', updateBudget);
});

function updateBudget() {
    const educationValue = document.getElementById('education').value;
    document.getElementById('education-value').textContent = `${educationValue}%`;

    // Update chart with new values
    updateChart([educationValue, /* other category values */]);
}

function resetBudget() {
    document.querySelectorAll('input[type="range"]').forEach(input => {
        input.value = 20; // Reset to default value
        input.dispatchEvent(new Event('input'));
    });
}

document.getElementById('reset-button').addEventListener('click', resetBudget);
