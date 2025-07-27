
document.addEventListener('DOMContentLoaded', function() {  
    // header
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});  
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
            // Smooth scrolling for anchor links (including hero button)
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const targetId = this.getAttribute('href');
                    if (targetId === '#') return;
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Animation on scroll for hero content
            function animateHeroOnScroll() {
                const heroContent = document.querySelector('.hero-content');
                const heroPosition = heroContent.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;

                if (heroPosition < screenPosition) {
                    heroContent.classList.add('animate', 'show');
                }
            }

            window.addEventListener('scroll', animateHeroOnScroll);
            animateHeroOnScroll();
// Run once on page load
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    // about 1st section
    console.log('DOM fully loaded and parsed'); // Debug log
            function animateOnScroll() {
                const sections = document.querySelectorAll('.about-content');
                sections.forEach(section => {
                    const sectionTop = section.getBoundingClientRect().top;
                    const windowHeight = window.innerHeight;
                    if (sectionTop < windowHeight - 100) {
                        section.classList.add('visible');
                    }
                });
            }

            // Initial check and event listener
            animateOnScroll();
            window.addEventListener('scroll', animateOnScroll);
            window.addEventListener('resize', animateOnScroll); // Handle resize 
    // Clients slider
    const clientSlider = document.querySelector('.clients-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const clientSlides = document.querySelectorAll('.client-slide');
    let slideIndex = 0;
    const slideWidth = 220; // Width of each slide including margin
    
    function showSlide(index) {
        if (index >= clientSlides.length) slideIndex = 0;
        if (index < 0) slideIndex = clientSlides.length - 1;
        
        clientSlider.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
    }
    
    prevBtn.addEventListener('click', () => {
        slideIndex--;
        showSlide(slideIndex);
    });
    
    nextBtn.addEventListener('click', () => {
        slideIndex++;
        showSlide(slideIndex);
    });
    
    // Auto slide clients
    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 3000);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your message has been received. We'll contact you soon regarding ${service}.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-content, .about-text, .service-card,.service-card2, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate', 'show');
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-content,.about-text, .service-card,.service-card2, .contact-content').forEach(element => {
        element.classList.add('animate');
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});

// testimonial
document.addEventListener('DOMContentLoaded', function() {
    const testimonials = document.querySelectorAll('.testimonial');
    const dots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    let interval;
    
    // Function to show testimonial
    function showTestimonial(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Auto-rotate testimonials
    function startAutoRotation() {
        interval = setInterval(() => {
            const nextIndex = (currentIndex + 1) % testimonials.length;
            showTestimonial(nextIndex);
        }, 5000);
    }
    
    // Start auto rotation
    startAutoRotation();
    
    // Dot navigation click event
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            clearInterval(interval);
            const index = parseInt(this.getAttribute('data-index'));
            showTestimonial(index);
            startAutoRotation();
        });
    });
    
    // Pause auto rotation on hover
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsContainer.addEventListener('mouseenter', () => clearInterval(interval));
    testimonialsContainer.addEventListener('mouseleave', startAutoRotation);
});

// vission mission and goal
document.addEventListener('DOMContentLoaded', function() {
    const mvpCards = document.querySelectorAll('.mvp-card');
    
    // Add click event to each card
    mvpCards.forEach(card => {
        card.addEventListener('click', function() {
            // Remove active class from all cards
            mvpCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            this.classList.add('active');
            
            // You can add additional functionality here
            // For example, display more detailed information
            const tabName = this.getAttribute('data-tab');
            console.log(`${tabName} card clicked`);
            
            // Animation effect
            animateCard(this);
        });
    });
    
    // Function to add animation effect
    function animateCard(card) {
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Activate the first card by default
    if (mvpCards.length > 0) {
        mvpCards[0].classList.add('active');
    }
});