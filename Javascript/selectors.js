// script.js

// getElementById → selects single element by id
const title = document.getElementById("title");

// getElementsByClassName → selects multiple elements by class (HTMLCollection)
const infos = document.getElementsByClassName("info");

// getElementsByTagName → selects multiple elements by tag name
const spans = document.getElementsByTagName("span");

// querySelector → selects first matching element (CSS selector)
const firstBox = document.querySelector(".box");

// querySelectorAll → selects all matching elements (NodeList)
const allBoxes = document.querySelectorAll(".box");

// event using selected element
const btn = document.getElementById("btn");

btn.onclick = function () {

    // updating id-selected element
    title.textContent = "Selectors Applied";

    // updating class-selected elements
    infos[0].textContent = "Updated Paragraph One";
    infos[1].textContent = "Updated Paragraph Two";

    // updating tag-selected elements
    spans[0].textContent = "Span Updated A";
    spans[1].textContent = "Span Updated B";

    // updating first matched element
    firstBox.textContent = "First Box Changed";

    // updating all matched elements
    allBoxes[0].style.backgroundColor = "lightblue";
    allBoxes[1].style.backgroundColor = "lightgreen";
};
