let text = "   hELLo jAVaSCRipt   ";
text = text.trim();
let letter=text.charAt(0);
let rest=text.slice(1);
letter=letter.toUpperCase();
rest=rest.toLowerCase();
text=letter+rest;
console.log(text);

// using chaining

text=text.trim().charAt(0).toUpperCase() +text.trim().slice(1).toLowerCase();
console.log(text);
