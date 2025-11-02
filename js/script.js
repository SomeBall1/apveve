// ===================================
// Mobile Menu Toggle
// ===================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        mobileMenuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-wrapper') && navMenu.classList.contains('active')) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Navbar Scroll Effect
// ===================================
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScrollTop = scrollTop;
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
const sections = document.querySelectorAll('.section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    animateOnScroll.observe(section);
});

// ===================================
// Gallery Image Modal
// ===================================
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src;
        const imgAlt = this.querySelector('img').alt;

        // Create modal
        const modal = document.createElement('div');
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <img src="${imgSrc}" alt="${imgAlt}">
                <p>${imgAlt}</p>
            </div>
        `;

        // Add modal styles if not already present
        if (!document.getElementById('modal-styles')) {
            const style = document.createElement('style');
            style.id = 'modal-styles';
            style.textContent = `
                .image-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .modal-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    animation: fadeIn 0.3s ease;
                }
                .modal-content {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    z-index: 10000;
                    animation: zoomIn 0.3s ease;
                }
                .modal-content img {
                    max-width: 100%;
                    max-height: 80vh;
                    border-radius: 8px;
                }
                .modal-content p {
                    text-align: center;
                    color: white;
                    margin-top: 1rem;
                    font-size: 1.2rem;
                }
                .modal-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 3rem;
                    cursor: pointer;
                    line-height: 1;
                    padding: 0;
                    width: 40px;
                    height: 40px;
                }
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes zoomIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
            `;
            document.head.appendChild(style);
        }

        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';

        // Close modal handlers
        const closeModal = () => {
            modal.remove();
            document.body.style.overflow = 'auto';
        };

        modal.querySelector('.modal-close').addEventListener('click', closeModal);
        modal.querySelector('.modal-overlay').addEventListener('click', closeModal);

        // Close on Escape key
        const escapeHandler = (e) => {
            if (e.key === 'Escape') {
                closeModal();
                document.removeEventListener('keydown', escapeHandler);
            }
        };
        document.addEventListener('keydown', escapeHandler);
    });
});

// ===================================
// Contact Form Handling
// ===================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const dates = document.getElementById('dates').value;
        const message = document.getElementById('message').value;

        // Create mailto link (basic functionality - can be replaced with actual backend)
        const subject = encodeURIComponent(`Apartment Veve Inquiry from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Preferred Dates: ${dates}\n\n` +
            `Message:\n${message}`
        );

        const mailtoLink = `mailto:your-email@example.com?subject=${subject}&body=${body}`;

        // Show success message
        showFormMessage('Thank you! Your message is being prepared. Your email client will open shortly.', 'success');

        // Open mailto link
        setTimeout(() => {
            window.location.href = mailtoLink;
        }, 1000);

        // Reset form
        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    // Remove any existing messages
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;

    // Add message styles if not already present
    if (!document.getElementById('form-message-styles')) {
        const style = document.createElement('style');
        style.id = 'form-message-styles';
        style.textContent = `
            .form-message {
                padding: 1rem;
                border-radius: 8px;
                margin-top: 1rem;
                animation: slideDown 0.3s ease;
            }
            .form-message-success {
                background-color: #d4edda;
                color: #155724;
                border: 1px solid #c3e6cb;
            }
            .form-message-error {
                background-color: #f8d7da;
                color: #721c24;
                border: 1px solid #f5c6cb;
            }
            @keyframes slideDown {
                from {
                    opacity: 0;
                    transform: translateY(-10px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Insert message
    contactForm.appendChild(messageDiv);

    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// ===================================
// Lazy Loading for Images
// ===================================
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Active Navigation Link Highlighting
// ===================================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        if (pageYOffset >= (sectionTop - navbarHeight - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// Add active link style
if (!document.getElementById('active-link-styles')) {
    const style = document.createElement('style');
    style.id = 'active-link-styles';
    style.textContent = `
        .nav-menu li a.active-link {
            color: var(--primary-color);
            position: relative;
        }
        .nav-menu li a.active-link::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: var(--primary-color);
        }
    `;
    document.head.appendChild(style);
}

// ===================================
// Loading Animation
// ===================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Add fade-in animation for page load
    if (!document.getElementById('page-load-styles')) {
        const style = document.createElement('style');
        style.id = 'page-load-styles';
        style.textContent = `
            body {
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            body.loaded {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
});

// ===================================
// Back to Top Button (Optional)
// ===================================
// Create back to top button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.innerHTML = '↑';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

// Add button styles
if (!document.getElementById('back-to-top-styles')) {
    const style = document.createElement('style');
    style.id = 'back-to-top-styles';
    style.textContent = `
        #backToTop {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background-color: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            font-size: 1.5rem;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            z-index: 999;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        #backToTop:hover {
            background-color: #3d9485;
            transform: translateY(-5px);
        }
        #backToTop.visible {
            opacity: 1;
            visibility: visible;
        }
        @media (max-width: 768px) {
            #backToTop {
                width: 40px;
                height: 40px;
                bottom: 20px;
                right: 20px;
                font-size: 1.2rem;
            }
        }
    `;
    document.head.appendChild(style);
}

// Show/hide button on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

// Scroll to top when clicked
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Console Message
// ===================================
console.log('%cApartment Veve 🏠', 'color: #50b3a2; font-size: 24px; font-weight: bold;');
console.log('%cWelcome to our website! Looking for something?', 'color: #555; font-size: 14px;');
