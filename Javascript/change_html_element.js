// create the element

  const newH1=document.createElement("h1");

// Add attributes and properties
  newH1.textContent="I like pizza!";  

// Append element to DOM
// it will append as last child
//   document.body.append(newH1);  

// for first
// document.body.prepend(newH1); 
 
newH1.id="myH1";
newH1.style.color="tomato";
newH1.style.textAlign="center";
// put element into box1
document.getElementById("box1").append(newH1);

// insert before box2
document.body.insertBefore(newH1,box2);

// removing html element
   // parent.removeChild()
// document.body.removeChild(newH1);