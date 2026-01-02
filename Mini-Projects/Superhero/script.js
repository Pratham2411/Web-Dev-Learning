let heroes = [];

async function loadHeroes() {
    try {
        const response = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        if (!response.ok) throw new Error("Fetch failed");
        heroes = await response.json();
    } catch (error) {
        console.error(error);
    }
}

loadHeroes();

function fetchData() {
    const input = document.getElementById("heroName");
    const name = input.value.toLowerCase();
    const grid = document.getElementById("heroGrid");

    const hero = heroes.find(h => h.name.toLowerCase().includes(name));

    if (!hero) {
        alert("Hero not found!");
        return;
    }

    const card = document.createElement("div");
    card.className = "hero-card";
    
    card.innerHTML = `
        <img src="${hero.images.md}" class="hero-img">
        <h3>${hero.name}</h3>
        <p>Intelligence: ${hero.powerstats.intelligence}</p>
        <p>Speed: ${hero.powerstats.speed}</p>
        <p>Power: ${hero.powerstats.power}</p>
        <p>Combat: ${hero.powerstats.combat}</p>
        <button class="remove-btn" onclick="this.parentElement.remove()">Remove</button>
    `;

    grid.appendChild(card);
    input.value = ""; // Clear input for next search
}