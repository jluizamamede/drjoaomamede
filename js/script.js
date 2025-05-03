document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".main-nav a[href^=\"#\"]");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate position considering the fixed header height
                const headerOffset = document.querySelector(".main-header").offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Optional: Update active link state (simple version)
                navLinks.forEach(nav => nav.classList.remove("active"));
                this.classList.add("active");
            }
        });
    });

    // Optional: Highlight nav link on scroll (more complex, might skip for simplicity)
    // ... Intersection Observer logic ...
});

