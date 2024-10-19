let mass, velocity;

function generateTask() {
    mass = Math.floor(Math.random() * 50) + 1; // Random mass between 1 and 50
    velocity = Math.floor(Math.random() * 20) + 1; // Random velocity between 1 and 20

    document.getElementById('question').textContent = `Calculate the kinetic energy for mass ${mass} kg and velocity ${velocity} m/s.`;
    document.getElementById('feedback').textContent = '';
    document.getElementById('energyInput').value = '';
}

function checkAnswer() {
    const userEnergy = parseFloat(document.getElementById('energyInput').value);
    const correctEnergy = 0.5 * mass * velocity * velocity;

    if (userEnergy === correctEnergy) {
        document.getElementById('feedback').textContent = 'Correct! Here is another task:';
        generateTask();
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct answer was ${correctEnergy} J. Try again!`;
    }
}

window.onload = generateTask;
