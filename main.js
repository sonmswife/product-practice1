/**
 * Generates a unique set of 6 random numbers between 1 and 45.
 * @returns {number[]} Array of sorted numbers.
 */
function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        // Math.random() is [0, 1), so * 45 is [0, 45), floor is 0-44, +1 is 1-45.
        const num = Math.floor(Math.random() * 45) + 1;
        numbers.add(num);
    }
    // Convert Set to Array and sort numerically (a - b)
    return Array.from(numbers).sort((a, b) => a - b);
}

/**
 * Determines the color class based on the lotto number.
 * 1-10: Yellow, 11-20: Blue, 21-30: Red, 31-40: Gray, 41-45: Green
 * @param {number} num 
 * @returns {string} CSS class name
 */
function getColorClass(num) {
    if (num <= 10) return 'yellow';
    if (num <= 20) return 'blue';
    if (num <= 30) return 'red';
    if (num <= 40) return 'gray';
    return 'green';
}

function renderBalls(numbers) {
    const container = document.getElementById('balls-container');
    container.innerHTML = ''; // Clear previous

    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.classList.add('ball', getColorClass(num));
        ball.textContent = num;
        
        // Stagger the animation by adding a delay
        ball.style.animationDelay = `${index * 0.1}s`;
        
        container.appendChild(ball);
    });
}

function init() {
    const btn = document.getElementById('generate-btn');
    
    btn.addEventListener('click', () => {
        // Optional: Add a subtle vibration for mobile users
        if (navigator.vibrate) navigator.vibrate(50);
        
        const numbers = generateLottoNumbers();
        renderBalls(numbers);
    });
}

// Start the application
init();
