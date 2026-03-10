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
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const currentTheme = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
    
    btn.addEventListener('click', () => {
        // Optional: Add a subtle vibration for mobile users
        if (navigator.vibrate) navigator.vibrate(50);
        
        const numbers = generateLottoNumbers();
        renderBalls(numbers);
    });

    // Partnership Form Handling
    const form = document.getElementById('partnership-form');
    const formStatus = document.getElementById('form-status');
    const submitBtn = document.getElementById('submit-btn');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Set loading state
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
            submitBtn.textContent = '보내는 중...';
            
            const formData = new FormData(form);
            
            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    formStatus.textContent = '문의가 성공적으로 전송되었습니다. 곧 연락드리겠습니다!';
                    formStatus.className = 'form-status success';
                    form.reset();
                } else {
                    const data = await response.json();
                    if (data.errors) {
                        formStatus.textContent = data.errors.map(error => error.message).join(", ");
                    } else {
                        formStatus.textContent = '오류가 발생했습니다. 잠시 후 다시 시도해주세요.';
                    }
                    formStatus.className = 'form-status error';
                }
            } catch (error) {
                formStatus.textContent = '서버 통신 중 오류가 발생했습니다.';
                formStatus.className = 'form-status error';
            } finally {
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                submitBtn.textContent = '문의하기';
            }
        });
    }
}

// Start the application
init();
