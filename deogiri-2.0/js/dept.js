
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");

    if (!hamburger || !mobileMenu) return; // Safety guard

    // Toggle menu open/close
    hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.toggle("active");
        hamburger.textContent = isOpen ? "✕" : "☰";
        hamburger.setAttribute("aria-expanded", isOpen);
        mobileMenu.setAttribute("aria-hidden", !isOpen);
    });

    // Auto-close when a link is clicked
    mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            hamburger.textContent = "☰";
            hamburger.setAttribute("aria-expanded", false);
            mobileMenu.setAttribute("aria-hidden", true);
        });
    });

    // Reset state if resized to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            mobileMenu.classList.remove("active");
            hamburger.textContent = "☰";
            hamburger.setAttribute("aria-expanded", false);
            mobileMenu.setAttribute("aria-hidden", true);
        }
    });
});
