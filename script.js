// Select the heart container
const heartContainer = document.getElementById('heart-container');

// Function to generate floating hearts dynamically
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    // Randomize heart position
    const posX = Math.random() * window.innerWidth; // Random horizontal position
    const size = Math.random() * 30 + 20; // Random size between 20px and 50px

    heart.style.left = `${posX}px`;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    // Add animation duration
    const duration = Math.random() * 5 + 5; // Random duration between 5s and 10s
    heart.style.animationDuration = `${duration}s`;

    // Remove heart after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);

    heartContainer.appendChild(heart);
}

// Generate hearts every 300ms
setInterval(createHeart, 300);
