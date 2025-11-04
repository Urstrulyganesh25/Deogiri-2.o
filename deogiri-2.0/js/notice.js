// ===== Notice Search =====
const searchInput = document.getElementById("searchInput");
const notices = document.querySelectorAll(".notice");

searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    notices.forEach((n) => {
        const title = n.querySelector("h3").textContent.toLowerCase();
        n.style.display = title.includes(filter) ? "block" : "none";
    });
});

// ===== Mobile Menu =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("active");
    hamburger.textContent = open ? "✕" : "☰";
    hamburger.setAttribute("aria-expanded", open);
});

mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        hamburger.textContent = "☰";
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.remove("active");
        hamburger.textContent = "☰";
    }
});
