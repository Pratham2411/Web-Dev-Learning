const btn = document.getElementById("submitBtn");
const res = document.getElementById("result");
const upi = document.getElementById("upi");
const card = document.getElementById("card");
const netbanking= document.getElementById("netbanking");
btn.onclick = function () {
    if (upi.checked) {
        res.textContent = "Selected Payment Option: UPI";
    } 
    else if (card.checked) {
        res.textContent = "Selected Payment Option: Debit / Credit Card";
    } 
    else if (netbanking.checked) {
        res.textContent = "Selected Payment Option: Net Banking";
    } 
    else {
        res.textContent = "Please select a payment option";
    }
};
