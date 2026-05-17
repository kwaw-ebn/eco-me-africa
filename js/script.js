/**
 * ==========================================================================
 * ECO-ME AFRICA - CORE JS INDUSTRIAL ARCHITECTURE
 * Vanilla JavaScript Engine supporting Reactive DOM UI components.
 * ==========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    initNavigation();
    initScrollAnimations();
    initCounters();
    initTestimonialSlider();
    initFAQAccordion();
    initContentFilteringAndSearch();
    initLightboxGallery();
    initContactFormHandling();
});

/* --- Responsive Navigation Control Matrix --- */
function initNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const header = document.querySelector(".header-nav");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        document.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });
    }

    // Scroll Control Observer Configuration
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
        
        toggleScrollTopButton();
    });

    initScrollTopButton();
}

/* --- Scroll Top Structural Behavior --- */
function initScrollTopButton() {
    const btn = document.createElement("button");
    btn.className = "scroll-top-btn";
    btn.innerHTML = "&#8593;";
    btn.setAttribute("aria-label", "Scroll to top");
    document.body.appendChild(btn);

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

function toggleScrollTopButton() {
    const btn = document.querySelector(".scroll-top-btn");
    if (btn) {
        if (window.scrollY > 300) {
            btn.classList.add("visible");
        } else {
            btn.classList.remove("visible");
        }
    }
}

/* --- Intersection Observer Scroll Animations Engine --- */
function initScrollAnimations() {
    const reveals = document.querySelectorAll(".reveal");
    
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                observer.unobserve(entry.target); // Optimize: Only animate once
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(element => revealObserver.observe(element));
}

/* --- High-Performance Numerical Counter Core --- */
function initCounters() {
    const counters = document.querySelectorAll(".counter-value");
    if (counters.length === 0) return;

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const limit = parseInt(target.getAttribute("data-target"), 10);
                let current = 0;
                const duration = 2000; // 2 seconds execution time
                const stepTime = Math.max(Math.floor(duration / limit), 15);
                
                const incrementor = setInterval(() => {
                    current += Math.ceil(limit / (duration / stepTime));
                    if (current >= limit) {
                        target.innerText = limit.toLocaleString() + "+";
                        clearInterval(incrementor);
                    } else {
                        target.innerText = current.toLocaleString() + "+";
                    }
                }, stepTime);
                
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

/* --- Content Slider (Voices of Impact) Engine --- */
function initTestimonialSlider() {
    const slides = document.querySelectorAll(".testimonial-slide");
    if (slides.length === 0) return;

    let currentSlide = 0;
    const slideInterval = 6000; // 6 seconds per layout rotation

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    // Auto-init rotation loop
    setInterval(nextSlide, slideInterval);
}

/* --- Accordion Interactive Module --- */
function initFAQAccordion() {
    const Accordions = document.querySelectorAll(".faq-question");
    
    Accordions.forEach(button => {
        button.addEventListener("click", () => {
            const answer = button.nextElementSibling;
            
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                // Collapse alternative visible siblings
                document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = null);
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
}

/* --- Filter & Structural Dynamic Search Interface (Blog/Gallery) --- */
function initContentFilteringAndSearch() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const searchableItems = document.querySelectorAll("[data-category]");
    const searchBar = document.getElementById("searchBar");

    if (filterButtons.length === 0 && !searchBar) return;

    let activeFilter = "all";
    let activeSearchQuery = "";

    function filterExecutionEngine() {
        searchableItems.forEach(item => {
            const category = item.getAttribute("data-category").toLowerCase();
            const textContent = item.textContent.toLowerCase();
            
            const matchCategory = (activeFilter === "all" || category.includes(activeFilter));
            const matchSearch = textContent.includes(activeSearchQuery);

            if (matchCategory && matchSearch) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            filterButtons.forEach(btn => btn.classList.remove("active"));
            e.target.classList.add("active");
            activeFilter = e.target.getAttribute("data-filter").toLowerCase();
            filterExecutionEngine();
        });
    });

    if (searchBar) {
        searchBar.addEventListener("input", (e) => {
            activeSearchQuery = e.target.value.toLowerCase();
            filterExecutionEngine();
        });
    }
}

/* --- Non-Blocking Dynamic Lightbox Matrix --- */
function initLightboxGallery() {
    const galleryItems = document.querySelectorAll(".gallery-item");
    if (galleryItems.length === 0) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img class="lightbox-content" src="" alt="Enlarged view">
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector(".lightbox-content");
    const lightboxClose = lightbox.querySelector(".lightbox-close");

    galleryItems.forEach(item => {
        item.addEventListener("click", () => {
            const imgSrc = item.querySelector("img").getAttribute("src");
            lightboxImg.setAttribute("src", imgSrc);
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent background scroll
        });
    });

    const closeAction = () => {
        lightbox.classList.remove("active");
        document.body.style.overflow = "auto";
    };

    lightboxClose.addEventListener("click", closeAction);
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeAction();
    });
}

/* --- Safe Contact Form and Feedback Management --- */
function initContactFormHandling() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        
        // Form field data mapping processing logic simulation placeholder
        const submitBtn = form.querySelector('button[type="submit"]');
        const processingMessage = document.createElement("p");
        processingMessage.style.color = "var(--primary-green)";
        processingMessage.style.marginTop = "15px";
        processingMessage.style.fontWeight = "600";
        processingMessage.innerText = "Processing submission... Thank you for connecting with Eco-Me Africa.";
        
        submitBtn.disabled = true;
        form.appendChild(processingMessage);

        setTimeout(() => {
            form.reset();
            processingMessage.innerText = "Message sent successfully! Our impact team will contact you shortly.";
            submitBtn.disabled = false;
        }, 1500);
    });
}