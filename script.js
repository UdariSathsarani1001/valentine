// ===== CONFIGURATION =====
const loveMessages = [
    "Every time I see you, my world stops and all that exists is you and my eyes staring in disbelief at your beauty... ❤️",
    "You are my today and all of my tomorrows. With you, I've found the one whom my soul loves. 💕",
    "In your smile I see something more beautiful than the stars... You light up my entire universe. ✨",
    "I fell in love with you because of the million things you never knew you were doing to make me fall deeper every day. 🌹",
    "You are my favorite notification, my favorite hello, and my hardest goodbye. I love you more than words can express. 💖"
];

let heartClickCount = 0;
let currentSection = 'landingScreen';

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    initFloatingHearts();
    initThemeToggle();
    initMusicControl();
    initEnvelopeAnimation();
    initNavigation();
    initSurpriseSection();
    initEasterEgg();
    initSoundEffects();
});

// ===== FLOATING HEARTS BACKGROUND =====
function initFloatingHearts() {
    const container = document.getElementById('floatingHearts');
    const heartTypes = ['💖', '💕', '💗', '💓', '💝', '❤️', '🌸', '✨'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's';
        heart.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 10000);
    }
    
    // Create initial hearts
    for (let i = 0; i < 15; i++) {
        setTimeout(createHeart, i * 500);
    }
    
    // Continuously create hearts
    setInterval(createHeart, 1000);
}

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        playClickSound();
        
        // Save preference
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDark);
    });
    
    // Load saved preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// ===== MUSIC CONTROL =====
function initMusicControl() {
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    
    // Try to autoplay immediately
    bgMusic.play().then(() => {
        musicToggle.classList.add('playing');
    }).catch(e => {
        console.log('Autoplay prevented, waiting for user interaction');
        // If autoplay fails, try again on first user interaction
        document.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play().then(() => {
                    musicToggle.classList.add('playing');
                }).catch(err => console.log('Audio play failed:', err));
            }
        }, { once: true });
    });
    
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play().catch(e => console.log('Audio play failed:', e));
            musicToggle.classList.add('playing');
        } else {
            bgMusic.pause();
            musicToggle.classList.remove('playing');
        }
        playClickSound();
    });
}

// ===== ENVELOPE ANIMATION =====
function initEnvelopeAnimation() {
    const openBtn = document.getElementById('openBtn');
    const notYetBtn = document.getElementById('notYetBtn');
    const envelope = document.getElementById('envelope');
    
    openBtn.addEventListener('click', () => {
        playClickSound();
        envelope.classList.add('opening');
        
        setTimeout(() => {
            navigateToSection('loveLetterSection');
            typeLoveLetter();
        }, 2000);
    });
    
    notYetBtn.addEventListener('click', () => {
        playClickSound();
        shakeElement(document.querySelector('.envelope-container'));
        showTemporaryMessage("Take your time... but don't make me wait too long! 💕");
    });
}

// ===== TYPING EFFECT FOR LOVE LETTER =====
function typeLoveLetter() {
    const letterText = document.getElementById('letterText');
    letterText.innerHTML = '';
    
    loveMessages.forEach((message, index) => {
        setTimeout(() => {
            const p = document.createElement('p');
            p.textContent = message;
            letterText.appendChild(p);
        }, index * 600);
    });
}

// ===== NAVIGATION =====
function initNavigation() {
    // Back buttons
    document.getElementById('backToStart').addEventListener('click', () => {
        playClickSound();
        navigateToSection('landingScreen');
    });
    
    document.getElementById('backToLetter2').addEventListener('click', () => {
        playClickSound();
        navigateToSection('loveLetterSection');
    });
    
    // Forward buttons
    document.getElementById('toSurprise').addEventListener('click', () => {
        playClickSound();
        navigateToSection('surpriseSection');
    });
}

function navigateToSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');
    
    currentSection = sectionId;
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ===== SURPRISE SECTION =====
function initSurpriseSection() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    
    yesBtn.addEventListener('click', () => {
        playClickSound();
        celebrateYes();
    });
    
    noBtn.addEventListener('click', (e) => {
        playClickSound();
        moveAwayButton(e.target);
    });
}

function celebrateYes() {
    const surpriseContent = document.getElementById('surpriseContent');
    const celebration = document.getElementById('celebration');
    
    // Hide the proposal
    surpriseContent.style.display = 'none';
    
    // Show celebration message
    const celebrationMsg = document.createElement('div');
    celebrationMsg.className = 'surprise-message';
    celebrationMsg.innerHTML = `
        <h2 class="proposal-text" style="animation: scaleIn 0.6s ease;">
            You made me the happiest person! 🎉💖
        </h2>
        <p style="font-size: 1.5rem; margin: 1rem 0; font-family: 'Dancing Script', cursive;">
            I love you so much, mi papi! 
        </p>
        <p style="font-size: 1.2rem; font-family: 'Dancing Script', cursive;">
            You and me forever 💑
        </p>
    `;
    celebration.appendChild(celebrationMsg);
    
    // Start confetti
    startConfetti();
    
    // Create hearts explosion
    createHeartsExplosion();
    
    // Play celebration sound
    setTimeout(() => {
        playHeartSound();
    }, 300);
}

function moveAwayButton(button) {
    const maxX = window.innerWidth - button.offsetWidth - 50;
    const maxY = window.innerHeight - button.offsetHeight - 50;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    button.style.position = 'fixed';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
    button.style.transition = 'all 0.3s ease';
    
    // Change text after a few moves
    if (Math.random() > 0.7) {
        const funnyTexts = ['Please?', 'Come on!', 'Say Yes!', 'Pretty please?', 'Ishan! 💕'];
        button.textContent = funnyTexts[Math.floor(Math.random() * funnyTexts.length)];
    }
}

// ===== CONFETTI ANIMATION =====
function startConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const confettiCount = 150;
    const colors = ['#FF69B4', '#FFB6C1', '#E6E6FA', '#FFDAB9', '#FF1493', '#DDA0DD'];
    
    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.size = Math.random() * 10 + 5;
            this.speedY = Math.random() * 3 + 2;
            this.speedX = Math.random() * 2 - 1;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -10;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
            ctx.restore();
        }
    }
    
    for (let i = 0; i < confettiCount; i++) {
        confettiPieces.push(new ConfettiPiece());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Stop confetti after 10 seconds
    setTimeout(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 10000);
}

// ===== HEARTS EXPLOSION =====
function createHeartsExplosion() {
    const celebration = document.getElementById('celebration');
    const heartEmojis = ['💖', '💕', '💗', '💓', '💝', '❤️', '💞'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
            heart.style.position = 'fixed';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.fontSize = Math.random() * 30 + 20 + 'px';
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '101';
            
            const angle = (Math.PI * 2 * i) / 50;
            const velocity = Math.random() * 10 + 5;
            const tx = Math.cos(angle) * velocity * 50;
            const ty = Math.sin(angle) * velocity * 50;
            
            heart.style.transition = 'all 2s ease-out';
            celebration.appendChild(heart);
            
            setTimeout(() => {
                heart.style.transform = `translate(${tx}px, ${ty}px)`;
                heart.style.opacity = '0';
            }, 10);
            
            setTimeout(() => {
                heart.remove();
            }, 2000);
        }, i * 20);
    }
}

// ===== EASTER EGG =====
function initEasterEgg() {
    const heartSeal = document.getElementById('heartSeal');
    const modal = document.getElementById('easterEggModal');
    const closeBtn = document.getElementById('closeEasterEgg');
    
    heartSeal.addEventListener('click', (e) => {
        e.stopPropagation();
        heartClickCount++;
        
        // Visual feedback
        heartSeal.style.transform = 'translate(-50%, -50%) scale(1.3)';
        setTimeout(() => {
            heartSeal.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 200);
        
        if (heartClickCount === 5) {
            playHeartSound();
            modal.classList.add('show');
            heartClickCount = 0; // Reset counter
            
            // Add extra hearts animation
            createMiniHeartsExplosion(e.pageX, e.pageY);
        }
    });
    
    closeBtn.addEventListener('click', () => {
        playClickSound();
        modal.classList.remove('show');
    });
    
    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

function createMiniHeartsExplosion(x, y) {
    const heartEmojis = ['💖', '💕', '💗', '💓'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.position = 'fixed';
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';
        heart.style.fontSize = '24px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '2001';
        heart.style.transition = 'all 1s ease-out';
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            const angle = (Math.PI * 2 * i) / 15;
            const distance = Math.random() * 100 + 50;
            heart.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
            heart.style.opacity = '0';
        }, 10);
        
        setTimeout(() => {
            heart.remove();
        }, 1000);
    }
}

// ===== SOUND EFFECTS =====
function initSoundEffects() {
    // Create audio context for sound effects
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext) {
        window.audioContext = new AudioContext();
    }
}

function playClickSound() {
    if (!window.audioContext) return;
    
    const oscillator = window.audioContext.createOscillator();
    const gainNode = window.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(window.audioContext.destination);
    
    oscillator.frequency.value = 800;
    gainNode.gain.value = 0.1;
    
    oscillator.start(window.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + 0.1);
    oscillator.stop(window.audioContext.currentTime + 0.1);
}

function playHeartSound() {
    if (!window.audioContext) return;
    
    const oscillator = window.audioContext.createOscillator();
    const gainNode = window.audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(window.audioContext.destination);
    
    oscillator.type = 'sine';
    oscillator.frequency.value = 523.25; // C5
    gainNode.gain.value = 0.2;
    
    oscillator.start(window.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(659.25, window.audioContext.currentTime + 0.2);
    gainNode.gain.exponentialRampToValueAtTime(0.01, window.audioContext.currentTime + 0.5);
    oscillator.stop(window.audioContext.currentTime + 0.5);
}

// ===== UTILITY FUNCTIONS =====
function shakeElement(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'shake 0.5s ease';
    }, 10);
}

function showTemporaryMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.top = '50%';
    messageDiv.style.left = '50%';
    messageDiv.style.transform = 'translate(-50%, -50%)';
    messageDiv.style.background = 'linear-gradient(135deg, #FF69B4, #FFB6C1)';
    messageDiv.style.color = 'white';
    messageDiv.style.padding = '20px 40px';
    messageDiv.style.borderRadius = '50px';
    messageDiv.style.fontSize = '1.2rem';
    messageDiv.style.fontFamily = "'Dancing Script', cursive";
    messageDiv.style.boxShadow = '0 10px 40px rgba(255, 105, 180, 0.5)';
    messageDiv.style.zIndex = '1000';
    messageDiv.style.animation = 'fadeIn 0.3s ease';
    
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            messageDiv.remove();
        }, 300);
    }, 2000);
}

// Add shake animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
        to {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.8);
        }
    }
`;
document.head.appendChild(style);

// ===== RESPONSIVE ADJUSTMENTS =====
window.addEventListener('resize', () => {
    const canvas = document.getElementById('confettiCanvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// ===== PREVENT CONTEXT MENU ON MOBILE =====
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// ===== LOG INITIALIZATION =====
console.log('%c💖 Valentine\'s Day Website Loaded! 💖', 'color: #FF69B4; font-size: 20px; font-weight: bold;');
console.log('%cMade with love for Ishan 💕', 'color: #FFB6C1; font-size: 14px; font-style: italic;');
