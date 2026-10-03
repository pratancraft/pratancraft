
// DAFTAR FOTO PORTOFOLIO PRATAN CRAFT
const projects = [
    {
        title: "Business Website",
        category: "Website Development",
        description: "Website profil dan promosi bisnis.",
        image: "images/web-design.jpg",
        alt: "Contoh website bisnis PRATAN CRAFT"
    },
    {
        title: "Modern Interface",
        category: "UI/UX Design",
        description: "Desain antarmuka digital modern.",
        image: "images/ui-ux.jpg",
        alt: "Contoh desain UI UX"
    },
    {
        title: "Digital Project",
        category: "Custom Solution",
        description: "Solusi digital sesuai kebutuhan.",
        image: "images/digital.jpg",
        alt: "Contoh proyek digital"
    }
];

// TAMPILKAN FOTO KE HALAMAN
const portfolioGrid = document.querySelector(".portfolio-grid");

if (portfolioGrid) {
    portfolioGrid.innerHTML = projects.map(project => `
        <article class="portfolio-card reveal">
            <div class="portfolio-image">
                <img
                    src="${project.image}"
                    alt="${project.alt}"
                    loading="lazy"
                >
            </div>
            <div class="portfolio-info">
                <small>${project.category}</small>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
            </div>
        </article>
    `).join("");

    // Aktifkan kembali animasi untuk kartu yang baru dibuat
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        portfolioGrid.querySelectorAll(".reveal").forEach(card => {
            observer.observe(card);
        });
    } else {
        portfolioGrid.querySelectorAll(".reveal").forEach(card => {
            card.classList.add("show");
        });
    }
}