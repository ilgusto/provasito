// scripts/main.js
$(document).ready(function() {
    $('#hamburger').click(function() {
        $(this).toggleClass('open');
        $('#nav-menu').toggleClass('open');
    });

    // Scroll-triggered animations
    const sections = document.querySelectorAll('.section');

    const options = {
        threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-visible');
                entry.target.classList.remove('explosion');
            } else {
                if (entry.target.classList.contains('section-visible')) {
                    entry.target.classList.add('explosion');
                    setTimeout(() => {
                        entry.target.classList.remove('section-visible');
                    }, 1000);
                }
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
