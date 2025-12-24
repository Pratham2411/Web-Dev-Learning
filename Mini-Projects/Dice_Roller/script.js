const select = document.getElementById("diceCount");
const box = document.getElementById("diceContainer");

function roll() {
    box.innerHTML = "";

    const n = Number(select.value);

    for (let i = 0; i < n; i++) {
        const v = Math.floor(Math.random() * 6) + 1;

        const img = document.createElement("img");
        img.src = `images/${v}.png`;
        img.alt = `Dice ${v}`;

        box.appendChild(img);
    }
}
