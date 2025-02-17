document.addEventListener("DOMContentLoaded", function () {
    const secondSection = document.querySelector(".second-section");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                secondSection.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Se activa cuando al menos el 30% de la sección sea visible

    observer.observe(secondSection);
});
