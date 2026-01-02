const container = document.getElementById("projects-container");

// Modal elements
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDescription = document.getElementById("modalDescription");
const modalLive = document.getElementById("modalLive");
const modalGithub = document.getElementById("modalGithub");
const modalClose = document.getElementById("modalClose");

// Render project cards
projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-image">
            <img src="${project.image}" alt="${project.name}">
        </div>

        <div class="project-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>

            <div class="project-links">
                <a href="${project.live}" target="_blank">Live</a>
                <a href="${project.github}" target="_blank">GitHub</a>
            </div>
        </div>
    `;

    // Open modal on card click
    card.addEventListener("click", (e) => {
        // prevent modal when clicking links
        if (e.target.tagName === "A") return;
        openModal(project);
    });

    container.appendChild(card);
});

// Open modal
function openModal(project) {
    modalTitle.textContent = project.name;
    modalImage.src = project.image;
    modalImage.alt = project.name;
    modalDescription.textContent = project.description;
    modalLive.href = project.live;
    modalGithub.href = project.github;

    modal.classList.add("active");
}

// Close modal
function closeModal() {
    modal.classList.remove("active");
}

// Events to close modal
modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
});
