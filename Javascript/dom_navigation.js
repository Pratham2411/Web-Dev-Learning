// const element=document.getElementById("desserts");
// const firstChild=element.firstElementChild;
// firstChild.style.backgroundColor="yellow";

// selecting all first childs
const ulElements=document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const firstChild=ulElement.firstElementChild;
    firstChild.style.backgroundColor="yellow";
})

// similar property lastElementChild

const element=document.getElementById("apple");
const nextSibling=element.nextElementSibling;
nextSibling.style.backgroundColor="orange";
// previousElementSibling

const element1=document.getElementById("carrot");
const parent=element1.parentElement;
parent.style.backgroundColor="pink";

// .children
const element2=document.getElementById("desserts");
const children=element2.children;

Array.from(children).forEach( child =>{
    child.style.backgroundColor="wheat";
})
