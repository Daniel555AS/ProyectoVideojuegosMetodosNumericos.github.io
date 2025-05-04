document.addEventListener("DOMContentLoaded", function () {
    const secondSection = document.querySelector(".second-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                secondSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Activated when at least 30% of the section is visible

    observer.observe(secondSection);
});

const thirdSection = document.querySelector(".third-section");

const observerThirdSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            thirdSection.classList.add("show");
        }
    });
}, { threshold: 0.3 }); // // Activated when at least 30% of the section is visible

observerThirdSection.observe(thirdSection);

// Select all project cards
const projectCards = document.querySelectorAll('.project-card');

// Add a click event to each card
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        // Gets the URL from the 'data-link' attribute
        const link = card.getAttribute('data-link');
        // Redirects to the URL
        window.location.href = link;
    });
});


