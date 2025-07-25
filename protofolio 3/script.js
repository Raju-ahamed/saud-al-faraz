// header
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});
//protofolio
document.addEventListener('DOMContentLoaded', function() {
    // Animate elements on scroll
    const animateItems = document.querySelectorAll('.animate-item');
    
    const animateOnScroll = function() {
        animateItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (itemTop < windowHeight - 100) {
                item.classList.add('show');
            }
        });
    };
    
    // Initial animation trigger
    animateOnScroll();
    
    // Animate on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Animate social buttons
    const socialButtons = document.querySelectorAll('.social-btn');
    socialButtons.forEach((btn, index) => {
        btn.style.animationDelay = `${index * 0.2 + 0.5}s`;
    });
});

// next
// document.addEventListener('DOMContentLoaded', function() {
//     const memberCards = document.querySelectorAll('.member-card');
//     const dots = document.querySelectorAll('.nav-dot');
//     const teamMembers = document.querySelector('.team-members');
//     let currentIndex = 0;
//     let interval;
    
//     // Auto-rotate team members
//     function startAutoRotation() {
//         interval = setInterval(() => {
//             currentIndex = (currentIndex + 1) % memberCards.length;
//             updateCarousel();
//         }, 5000);
//     }
    
//     // Update carousel display
//     function updateCarousel() {
//         // Remove active classes
//         memberCards.forEach(card => card.classList.remove('active'));
//         dots.forEach(dot => dot.classList.remove('active'));
        
//         // Add active class to current card
//         memberCards[currentIndex].classList.add('active');
//         dots[currentIndex].classList.add('active');
        
//         // Apply slide effect
//         teamMembers.style.transform = `translateX(-${currentIndex * 100}%)`;
        
//         // Add bounce animation
//         const activeCard = memberCards[currentIndex];
//         activeCard.style.animation = 'none';
//         void activeCard.offsetWidth; // Trigger reflow
//         activeCard.style.animation = 'bounce 0.8s ease';
//     }
    
//     // Dot navigation click event
//     dots.forEach(dot => {
//         dot.addEventListener('click', function() {
//             clearInterval(interval);
//             currentIndex = parseInt(this.getAttribute('data-index'));
//             updateCarousel();
//             startAutoRotation();
//         });
//     });
    
//     // View More/View Less buttons
//     document.querySelectorAll('.view-more-btn').forEach(btn => {
//         btn.addEventListener('click', function() {
//             this.closest('.card-inner').parentElement.classList.add('flipped');
//         });
//     });
    
//     document.querySelectorAll('.view-less-btn').forEach(btn => {
//         btn.addEventListener('click', function() {
//             this.closest('.card-inner').parentElement.classList.remove('flipped');
//         });
//     });
    
//     // Pause auto rotation on hover
//     teamMembers.addEventListener('mouseenter', () => clearInterval(interval));
//     teamMembers.addEventListener('mouseleave', startAutoRotation);
    
//     // Initialize
//     updateCarousel();
//     startAutoRotation();
// });