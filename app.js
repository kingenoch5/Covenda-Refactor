// Covenda AI Landing Page JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Covenda AI Landing Page initialized');
    
    // Initialize all functionality
    initializeNavigation();
    initializeCTAButtons();
    initializeInteractiveElements();
    initializeAnimations();
    initializeScrollEffects();
});

// Initialize navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const href = this.getAttribute('href');
            console.log('Navigation clicked:', href);
            
            if (href && href.startsWith('#')) {
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = targetSection.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    console.log(`Scrolled to section: ${href}`);
                } else {
                    console.warn(`Target section not found: ${href}`);
                }
            }
        });
    });
}

// Initialize CTA button functionality
function initializeCTAButtons() {
    // Get all buttons on the page
    const allButtons = document.querySelectorAll('button, .btn');
    
    allButtons.forEach(button => {
        const buttonText = button.textContent.trim();
        
        // Remove any existing event listeners by cloning the button
        const newButton = button.cloneNode(true);
        button.parentNode.replaceChild(newButton, button);
        
        // Add new event listener based on button text
        if (buttonText.includes('Start Free Assessment')) {
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleStartAssessment();
            });
        } /* else if (buttonText.includes('See 5-Min Demo')) {
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleDemo();
            }); */
        } else if (buttonText.includes('Get Started')) {
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleGetStarted();
            });
        } else if (buttonText.includes('Contact Sales')) {
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleContactSales();
            });
        } else if (buttonText.includes('Login')) {
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                handleLogin();
            });
        }
    });
}

// CTA Handler Functions
function handleStartAssessment() {
    console.log('Start Free Assessment handler called');
    
    if (confirm('🚀 Start Your Free Assessment\n\n✅ No credit card required\n✅ Get SOC 2 ready in 30 days\n✅ Automated risk assessment\n\nClick OK to begin your free assessment!')) {
        alert('🎉 Great! Redirecting to your free assessment...\n\n(In the live application, you would be taken to our secure signup form at app.covenda.ai)');
        trackCTAClick('Start Assessment', window.location.pathname);
    }
}

/*function handleDemo() {
    console.log('Demo handler called');
    
    if (confirm('📺 Schedule Your 5-Minute Demo\n\n👨‍💼 See Covenda AI in action\n⚡ Learn how to cut compliance time by 75%\n📊 View real customer results\n\nClick OK to schedule your personalized demo!')) {
        alert('📅 Perfect! Opening demo scheduler...\n\n(In the live application, this would open our Calendly scheduling widget)');
        trackCTAClick('Demo Request', window.location.pathname);
    }
}*/

function handleGetStarted() {
    console.log('Get Started handler called');
    
    if (confirm('🎯 Get Started with Covenda AI\n\n🆓 30-day free trial\n⚡ Quick setup in minutes\n📈 Immediate compliance insights\n\nClick OK to create your account!')) {
        alert('✨ Excellent! Setting up your account...\n\n(In the live application, you would be taken to our plan signup page)');
        trackCTAClick('Get Started', window.location.pathname);
    }
}

function handleContactSales() {
    console.log('Contact Sales handler called');
    
    if (confirm('💼 Contact Our Sales Team\n\n🏢 Custom enterprise solutions\n👥 Dedicated compliance manager\n📞 Priority support\n\nClick OK to speak with our sales team!')) {
        alert('📞 Connecting you with sales...\n\n(In the live application, this would open our contact form or dial our sales line)');
        trackCTAClick('Contact Sales', window.location.pathname);
    }
}

function handleLogin() {
    console.log('Login handler called');
    
    if (confirm('🔐 Access Your Account\n\nClick OK to go to the login page')) {
        alert('🚀 Redirecting to login...\n\n(In the live application, this would take you to app.covenda.ai/login)');
        trackCTAClick('Login', window.location.pathname);
    }
}

// Initialize interactive elements
function initializeInteractiveElements() {
    // Metrics interaction
    const metrics = document.querySelectorAll('.metric');
    metrics.forEach(metric => {
        metric.style.cursor = 'pointer';
        metric.addEventListener('click', function(e) {
            e.preventDefault();
            const value = this.querySelector('.metric-value')?.textContent || '';
            const label = this.querySelector('.metric-label')?.textContent || '';
            
            alert(`📊 ${value} ${label}\n\nThis metric represents real results from our customers who use Covenda AI for compliance automation.`);
            trackEvent('Metric Clicked', { metric: `${value} ${label}` });
        });
    });

    // Framework badges
    const frameworks = document.querySelectorAll('.framework-badge');
    frameworks.forEach(badge => {
        badge.style.cursor = 'pointer';
        badge.addEventListener('click', function(e) {
            e.preventDefault();
            const framework = this.textContent.trim();
            
            alert(`🛡️ ${framework} Compliance\n\nCovenda AI provides comprehensive ${framework} support including:\n\n✅ Pre-built templates\n✅ Automated evidence collection\n✅ Audit-ready reports\n✅ Expert guidance`);
            trackEvent('Framework Clicked', { framework });
        });
    });

    // Testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.style.cursor = 'pointer';
        testimonial.addEventListener('click', function(e) {
            e.preventDefault();
            const name = this.querySelector('.author-name')?.textContent || '';
            const title = this.querySelector('.author-title')?.textContent || '';
            const quote = this.querySelector('.testimonial-quote')?.textContent || '';
            
            alert(`💬 Customer Success Story\n\n"${quote}"\n\n— ${name}\n${title}\n\nWant to achieve similar results? Start your free assessment today!`);
            trackEvent('Testimonial Clicked', { customer: name });
        });
    });
}

// Initialize animations
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate sections
    const sections = document.querySelectorAll('section:not(.hero)');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    let ticking = false;
    
    function updateHeader() {
        const header = document.querySelector('.header');
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.style.backgroundColor = 'rgba(252, 252, 249, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = '';
            header.style.backdropFilter = '';
            header.style.boxShadow = '';
        }
        
        ticking = false;
    }
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    });
}

// Analytics and tracking
function trackEvent(eventName, properties = {}) {
    const eventData = {
        event: eventName,
        timestamp: new Date().toISOString(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...properties
    };
    
    console.log('📈 Event Tracked:', eventData);
    
    // In production, send to analytics service
    // Example: gtag('event', eventName, properties);
    // Example: analytics.track(eventName, properties);
}

function trackCTAClick(ctaType, location) {
    trackEvent('CTA Clicked', {
        cta_type: ctaType,
        location: location,
        page_section: getCurrentSection()
    });
}

function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;
    
    for (let section of sections) {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        
        if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
            return section.className || section.id || 'unknown';
        }
    }
    
    return 'top';
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
        const targetPosition = section.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        return true;
    }
    return false;
}

// Export for testing and external use
window.CovendaAI = {
    handleStartAssessment,
    handleDemo,
    handleGetStarted,
    handleContactSales,
    handleLogin,
    scrollToSection,
    trackEvent,
    trackCTAClick
};
