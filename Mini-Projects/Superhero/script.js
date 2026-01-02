let heroes = [];

function normalize(s) {
    return String(s || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

async function loadHeroes() {
    try {
        const res = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        if (!res.ok) throw new Error("Fetch failed");
        heroes = await res.json();
    } catch (e) {
        console.error(e);
        heroes = [];
    }
}

loadHeroes();

async function fetchData() {
    const input = document.getElementById("heroName");
    const q = normalize(input.value);
    const grid = document.getElementById("heroGrid");

    if (!q) return alert("Type a hero name");

    if (!heroes.length) await loadHeroes();

    let hero = heroes.find(h => normalize(h.name) === q);

    if (!hero) {
        hero = heroes.find(h =>
            (h.biography?.aliases || []).some(a => normalize(a) === q)
        );
    }

    if (!hero) return alert("Hero not found!");

    const card = document.createElement("div");
    card.className = "hero-card";

    card.innerHTML = `
        <img src="${hero.images?.md || ""}" class="hero-img">
        <h3>${hero.name}</h3>
        <p>Intelligence: ${hero.powerstats?.intelligence ?? "N/A"}</p>
        <p>Speed: ${hero.powerstats?.speed ?? "N/A"}</p>
        <p>Power: ${hero.powerstats?.power ?? "N/A"}</p>
        <p>Combat: ${hero.powerstats?.combat ?? "N/A"}</p>
        <button class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
    `;

    grid.appendChild(card);
    input.value = "";
}
