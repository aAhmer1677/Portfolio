const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const themeToggle = document.getElementById('themeToggle');
const navbar = document.querySelector('.navbar');

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const diffX = mouseX - cursorX;
    const diffY = mouseY - cursorY;
    
    cursorX += diffX * 0.3;
    cursorY += diffY * 0.3;
    
    const diffFollowerX = mouseX - followerX;
    const diffFollowerY = mouseY - followerY;
    
    followerX += diffFollowerX * 0.1;
    followerY += diffFollowerY * 0.1;
    
    if (cursor) {
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
    }
    
    if (cursorFollower) {
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
    }
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

document.querySelectorAll('a, button, input, textarea').forEach(elem => {
    elem.addEventListener('mouseenter', () => {
        if (cursor) cursor.classList.add('hover');
        if (cursorFollower) {
            cursorFollower.style.width = '60px';
            cursorFollower.style.height = '60px';
        }
    });
    
    elem.addEventListener('mouseleave', () => {
        if (cursor) cursor.classList.remove('hover');
        if (cursorFollower) {
            cursorFollower.style.width = '40px';
            cursorFollower.style.height = '40px';
        }
    });
});

function updateClock() {
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        clockElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

updateClock();
setInterval(updateClock, 1000);

const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

window.addEventListener('scroll', () => {
    if (navbar) {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    const parallaxBg = document.querySelector('.parallax-bg');
    const parallaxBg2 = document.querySelector('.parallax-bg-2');
    
    if (parallaxBg) {
        parallaxBg.style.transform = `translateY(${window.scrollY * 0.5}px)`;
    }
    
    if (parallaxBg2) {
        parallaxBg2.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.querySelectorAll('.scroll-reveal').forEach(elem => {
    observer.observe(elem);
});

const achievementsData = {
    'NRICH-WHICH_IS_BIGGER': {
        title: 'NRICH Solution Published - Which is Bigger',
        description: 'At the age of 13, I managed to get my solution for Which is Bigger published, which is a 14 to 16 age categorised problem.',
        details: [
            'NRICH is an internationally renowned platform for mathematical problems',
            'It is hosted by the University of Cambridge',
            'It has a low acceptance rate.'
        ]
    },
    'NRICH-CLIMBING_COMPLEXITY': {
        title: 'NRICH Solution Published - Climbing Complexity',
        description: 'At the age of 13, I managed to get my solution for Climbing Complexity published, which is an 11 to 14 age categorised problem.',
        details: [
            'NRICH is an internationally renowned platform for mathematical problems',
            'It is hosted by the University of Cambridge',
            'It has a low acceptance rate.'
        ]
    },
    'NRICH-SHIFTING_TIMES_TABLES': {
        title: 'NRICH Solution Published - Shifting Times Tables',
        description: 'At the age of 13, I managed to get my solution for Shifting Times Tables published, which is an 11 to 14 age categorised problem.',
        details: [
            'NRICH is an internationally renowned platform for mathematical problems',
            'It is hosted by the University of Cambridge',
            'It has a low acceptance rate.'
        ]
    },
    'JMC-2025': {
        title: 'Gold Certificate - JMC 2025',
        description: 'I attained a Gold Certificate in the JMC, Junior Maths Challenge 2025.',
        details: [
            'The JMC is hosted by the UKMT, United Kingdom Mathematical Trust',
            'Top 92 percentile get Gold Certificate',
            'Highly Prestigious in the United Kingdom'
        ]
    },
    'PCTC-R2-2024-25': {
        title: 'Certificate of Merit - Perse Coding Team Challenge Round 2 2024-25',
        description: 'Achieved Certificate of Merit in Round 2 of the Perse Coding Team Challenge.',
        details: [
            'The Perse Coding Team Challenge is a prestigious coding competition',
            'Tests algorithmic thinking and programming skills',
            'Achieved merit-level performance in challenging problems'
        ]
    },
    'PCTC-R1-2024-25': {
        title: 'Certificate of Distinction - Perse Coding Team Challenge Round 1 2024-25',
        description: 'Earned Certificate of Distinction in Round 1 of the Perse Coding Team Challenge.',
        details: [
            'Top performance in the first round of competition',
            'Demonstrated strong programming fundamentals',
            'Advanced to Round 2 with distinction'
        ]
    },
    'LANGUAGE_NUT-2024': {
        title: '18th Place in Language Nut Competition 2024',
        description: 'Ranked 18th globally in the Language Nut Competition.',
        details: [
            'International language learning competition',
            'Competed against students from multiple countries',
            'Demonstrated excellence in language acquisition'
        ]
    },
    'PCTC-R1-2023-24': {
        title: 'Certificate of Distinction - Perse Coding Team Challenge Round 1 2023-24',
        description: 'Achieved Certificate of Distinction in the 2023-24 Perse Coding Team Challenge.',
        details: [
            'Excellence in first-round coding challenges',
            'Strong problem-solving and programming skills'
        ]
    },
    'BEBRAS-R1-2023-24': {
        title: 'Gold Certificate in Bebras UK Round 1 2023-24',
        description: 'Earned Gold Certificate in the Bebras UK Computational Thinking Challenge.',
        details: [
            'Bebras is an international computational thinking challenge',
            'Tests logical reasoning and problem-solving abilities',
            'Gold certificate represents top performance'
        ]
    }
};

const searchInput = document.getElementById('achievementSearch');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const achievementItems = document.querySelectorAll('.achievement-item');
        
        achievementItems.forEach(item => {
            const title = item.querySelector('h3').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
}

const modal = document.getElementById('achievementModal');
const closeModal = document.querySelector('.close-modal');
const viewDetailsBtns = document.querySelectorAll('.view-details-btn');

viewDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const achievementId = btn.getAttribute('data-achievement');
        const data = achievementsData[achievementId];
        
        if (data && modal) {
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalDescription').textContent = data.description;
            
            const detailsList = data.details.map(detail => 
                `<li>${detail}</li>`
            ).join('');
            
            document.getElementById('modalDetails').innerHTML = `
                <h3 style="margin-top: 1.5rem; margin-bottom: 1rem;">Key Highlights:</h3>
                <ul style="list-style: none; padding: 0;">
                    ${detailsList}
                </ul>
            `;
            
            modal.classList.add('active');
        }
    });
});

if (closeModal) {
    closeModal.addEventListener('click', () => {
        if (modal) modal.classList.remove('active');
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        console.log('Form submitted:', formData);
        
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.classList.add('active');
        
        setTimeout(() => {
            contactForm.style.display = 'flex';
            if (formSuccess) formSuccess.classList.remove('active');
            contactForm.reset();
        }, 5000);
    });
}

const cvFrame = document.getElementById('cvFrame');

if (cvFrame) {
    cvFrame.src = 'assets/cv.pdf';
    cvFrame.style.display = 'block';
}