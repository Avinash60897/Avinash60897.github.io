// Game data structure with embedded games
const games = {
    1: { title: 'Collect SDGs - Eco Odyssey', file: 'game1.html' },
    2: { title: 'The Sustainability Search', file: 'game2.html' },
    3: { title: 'Save Our World', file: 'game3.html' },
    4: { title: 'Industrial Shredder', file: 'game4.html' },
    5: { title: 'Eco-Precision Timer', file: 'game5.html' }
};

// Function to open game in modal
function playGame(gameNumber) {
    const modal = document.getElementById('gamePlayerModal');
    const gameFrame = document.getElementById('gameFrame');
    
    // Clear previous content
    gameFrame.innerHTML = '';
    
    // Create iframe for the game
    const iframe = document.createElement('iframe');
    iframe.src = games[gameNumber].file;
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.border = 'none';
    iframe.style.borderRadius = '10px';
    iframe.title = games[gameNumber].title;
    
    gameFrame.appendChild(iframe);
    
    // Show modal
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// Function to close game modal
function closeGame() {
    const modal = document.getElementById('gamePlayerModal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('gamePlayerModal');
    if (event.target === modal) {
        closeGame();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeGame();
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.includes('onclick')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Add scroll animation for elements
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease forwards';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    observeElements();
    console.log('🎮 Mega Games Hub Loaded! Ready to play!');
    console.log('📊 Games loaded:', Object.keys(games).length);
});